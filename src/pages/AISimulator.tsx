import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Mail, MessageCircle, Instagram, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react"
import { goToSignup } from "../lib/constants"
import { usePageTitle } from "../hooks/usePageTitle"

// ── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
  id: number
  sender: "customer" | "ai" | "system"
  text: string
  delay: number // ms from start
}

interface SystemAlert {
  type: "error" | "success" | "protocol"
  text: string
  delay: number
}

// ── Script ───────────────────────────────────────────────────────────────────
const LEFT_MESSAGES: ChatMessage[] = [
  { id: 1, sender: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 500 },
  { id: 2, sender: "ai", text: "Hi! Thanks for reaching out \u{1F60A} I'd be happy to help with a discount on your next order!", delay: 2000 },
  { id: 3, sender: "customer", text: "ARE YOU SERIOUS? I want a REFUND not a discount", delay: 4000 },
  { id: 4, sender: "ai", text: "I understand your frustration! Here's a 20% discount code: SAVE20", delay: 5500 },
]

const LEFT_ALERTS: SystemAlert[] = [
  { type: "error", text: "POLICY VIOLATED \u2014 Refund ignored, discount offered without authorization", delay: 7000 },
  { type: "error", text: "BRAND DAMAGE \u2014 Customer escalated to social media", delay: 7800 },
]

const RIGHT_MESSAGES: ChatMessage[] = [
  { id: 1, sender: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 500 },
  { id: 2, sender: "ai", text: "I'm sorry to hear that. A product breaking after 2 days is not acceptable. Let me process your refund right away. Can you confirm your order number?", delay: 2500 },
  { id: 3, sender: "customer", text: "It's #4521", delay: 4500 },
  { id: 4, sender: "ai", text: "Thank you. Your refund of $49.00 has been initiated. You'll see it in 3\u20135 business days. Is there anything else I can help with?", delay: 6000 },
]

const RIGHT_ALERTS: SystemAlert[] = [
  { type: "protocol", text: "Refund Protocol \u2014 activated", delay: 1800 },
  { type: "success", text: "RESOLVED \u2014 Protocol followed. Customer satisfied.", delay: 7500 },
]

const TOTAL_DURATION = 9500

// ── Message Bubble ───────────────────────────────────────────────────────────
function MessageBubble({ message, side }: { message: ChatMessage; side: "left" | "right" }) {
  const isCustomer = message.sender === "customer"
  const isAI = message.sender === "ai"

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isCustomer ? "justify-start" : "justify-end"} mb-3`}
    >
      <div
        className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
          isCustomer
            ? "bg-[#1e1e2e] text-[#f5f2eb] rounded-bl-md"
            : side === "left"
              ? "bg-[#e05252]/15 text-[#f5f2eb] border border-[#e05252]/20 rounded-br-md"
              : "bg-[#2d9653]/15 text-[#f5f2eb] border border-[#2d9653]/20 rounded-br-md"
        }`}
      >
        <span className={`text-[10px] font-medium block mb-1 ${
          isCustomer ? "text-[#888899]" : side === "left" ? "text-[#e05252]/70" : "text-[#2d9653]/70"
        }`}>
          {isCustomer ? "Customer" : isAI ? "AI Agent" : ""}
        </span>
        {message.text}
      </div>
    </motion.div>
  )
}

// ── Alert Banner ─────────────────────────────────────────────────────────────
function AlertBanner({ alert }: { alert: SystemAlert }) {
  const isError = alert.type === "error"
  const isSuccess = alert.type === "success"
  const isProtocol = alert.type === "protocol"

  return (
    <motion.div
      initial={{ opacity: 0, x: isError ? -8 : 8, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium mb-2 ${
        isError
          ? "bg-[#e05252]/10 text-[#e05252] border border-[#e05252]/20"
          : isProtocol
            ? "bg-[#2d9653]/10 text-[#2d9653] border border-[#2d9653]/20"
            : "bg-[#2d9653]/15 text-[#2d9653] border border-[#2d9653]/30"
      }`}
    >
      {isError && <ShieldAlert className="h-3.5 w-3.5 shrink-0" />}
      {(isSuccess || isProtocol) && <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />}
      {alert.text}
    </motion.div>
  )
}

// ── Typing Indicator ─────────────────────────────────────────────────────────
function TypingIndicator({ side }: { side: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-end mb-3"
    >
      <div className={`px-4 py-2.5 rounded-2xl rounded-br-md text-[13px] ${
        side === "left"
          ? "bg-[#e05252]/10 border border-[#e05252]/15"
          : "bg-[#2d9653]/10 border border-[#2d9653]/15"
      }`}>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${side === "left" ? "bg-[#e05252]/50" : "bg-[#2d9653]/50"}`}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Chat Panel ───────────────────────────────────────────────────────────────
function ChatPanel({
  side,
  messages,
  alerts,
  visibleCount,
  visibleAlerts,
  showTyping,
}: {
  side: "left" | "right"
  messages: ChatMessage[]
  alerts: SystemAlert[]
  visibleCount: number
  visibleAlerts: number
  showTyping: boolean
}) {
  const isLeft = side === "left"
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleCount, visibleAlerts, showTyping])

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <div className={`flex items-center justify-between px-4 py-3 border-b ${
        isLeft ? "border-[#e05252]/20" : "border-[#2d9653]/20"
      }`}>
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${isLeft ? "bg-[#e05252]" : "bg-[#2d9653]"}`} />
          <span className={`text-xs font-semibold uppercase tracking-widest ${
            isLeft ? "text-[#e05252]" : "text-[#2d9653]"
          }`}>
            {isLeft ? "Without Enorve" : "With Enorve"}
          </span>
        </div>
      </div>

      {/* Channel tabs */}
      <div className="flex gap-1.5 px-3 py-2 border-b border-[#1e1e2e]">
        {isLeft ? (
          <>
            <span className="text-[10px] px-2 py-1 rounded-md bg-[#1e1e2e] text-[#888899] flex items-center gap-1">
              <Mail className="h-3 w-3" /> Email <span className="text-[#e05252] font-bold">47</span>
            </span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-[#1e1e2e] text-[#888899] flex items-center gap-1">
              <MessageCircle className="h-3 w-3" /> WhatsApp <span className="text-[#e05252] font-bold">12</span>
            </span>
            <span className="text-[10px] px-2 py-1 rounded-md bg-[#1e1e2e] text-[#888899] flex items-center gap-1">
              <Instagram className="h-3 w-3" /> Instagram <span className="text-[#e05252] font-bold">8</span>
            </span>
          </>
        ) : (
          <span className="text-[10px] px-2 py-1 rounded-md bg-[#2d9653]/10 text-[#2d9653] flex items-center gap-1 border border-[#2d9653]/20">
            <CheckCircle2 className="h-3 w-3" /> All Channels — Unified
          </span>
        )}
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-0" style={{ maxHeight: "380px" }}>
        <AnimatePresence>
          {messages.slice(0, visibleCount).map((msg) => (
            <MessageBubble key={msg.id} message={msg} side={side} />
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {showTyping && <TypingIndicator side={side} />}
        </AnimatePresence>

        <AnimatePresence>
          {alerts.slice(0, visibleAlerts).map((alert, i) => (
            <AlertBanner key={i} alert={alert} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────────────
export function AISimulator() {
  usePageTitle({
    title: "AI Support Simulator — Same Customer, Two Outcomes",
    description: "Watch a side-by-side comparison of AI support with and without Enorve. See how protocol-governed AI outperforms generic chatbots."
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [leftVisible, setLeftVisible] = useState(0)
  const [rightVisible, setRightVisible] = useState(0)
  const [leftAlerts, setLeftAlerts] = useState(0)
  const [rightAlerts, setRightAlerts] = useState(0)
  const [leftTyping, setLeftTyping] = useState(false)
  const [rightTyping, setRightTyping] = useState(false)

  const reset = useCallback(() => {
    setIsPlaying(false)
    setElapsed(0)
    setLeftVisible(0)
    setRightVisible(0)
    setLeftAlerts(0)
    setRightAlerts(0)
    setLeftTyping(false)
    setRightTyping(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  const play = useCallback(() => {
    reset()
    setIsPlaying(true)
    setHasPlayed(true)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      const now = Date.now() - start
      setElapsed(now)
      if (now >= TOTAL_DURATION) {
        if (timerRef.current) clearInterval(timerRef.current)
        setIsPlaying(false)
      }
    }, 50)
  }, [reset])

  // Drive message visibility from elapsed time
  useEffect(() => {
    // Left messages
    let lv = 0
    for (const msg of LEFT_MESSAGES) {
      if (elapsed >= msg.delay) lv++
    }
    setLeftVisible(lv)

    // Right messages
    let rv = 0
    for (const msg of RIGHT_MESSAGES) {
      if (elapsed >= msg.delay) rv++
    }
    setRightVisible(rv)

    // Left alerts
    let la = 0
    for (const a of LEFT_ALERTS) {
      if (elapsed >= a.delay) la++
    }
    setLeftAlerts(la)

    // Right alerts
    let ra = 0
    for (const a of RIGHT_ALERTS) {
      if (elapsed >= a.delay) ra++
    }
    setRightAlerts(ra)

    // Typing indicators — show 800ms before next AI message
    const leftAiMessages = LEFT_MESSAGES.filter(m => m.sender === "ai")
    setLeftTyping(leftAiMessages.some(m => elapsed >= m.delay - 800 && elapsed < m.delay))

    const rightAiMessages = RIGHT_MESSAGES.filter(m => m.sender === "ai")
    setRightTyping(rightAiMessages.some(m => elapsed >= m.delay - 800 && elapsed < m.delay))
  }, [elapsed])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f2eb]">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#2d9653] mb-4 block">
          Interactive Demo
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Same customer. Two outcomes.
        </h1>
        <p className="text-[#888899] text-base sm:text-lg max-w-2xl mx-auto">
          Watch the same angry refund request play out — with a generic AI vs. an AI that follows your rules.
        </p>
      </div>

      {/* Simulator */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#13131a] overflow-hidden shadow-2xl">
          {/* Split panels */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#1e1e2e]">
            <ChatPanel
              side="left"
              messages={LEFT_MESSAGES}
              alerts={LEFT_ALERTS}
              visibleCount={leftVisible}
              visibleAlerts={leftAlerts}
              showTyping={leftTyping}
            />
            <ChatPanel
              side="right"
              messages={RIGHT_MESSAGES}
              alerts={RIGHT_ALERTS}
              visibleCount={rightVisible}
              visibleAlerts={rightAlerts}
              showTyping={rightTyping}
            />
          </div>

          {/* Progress bar */}
          {isPlaying && (
            <div className="h-0.5 bg-[#1e1e2e]">
              <motion.div
                className="h-full bg-[#2d9653]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min((elapsed / TOTAL_DURATION) * 100, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 px-4 py-4 border-t border-[#1e1e2e]">
            {!isPlaying && (
              <button
                onClick={play}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2d9653] hover:bg-[#3db968] text-white text-sm font-medium transition-colors"
              >
                <Play className="h-4 w-4" fill="currentColor" />
                {hasPlayed ? "Replay" : "Play Demo"}
              </button>
            )}
            {hasPlayed && !isPlaying && (
              <button
                onClick={reset}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1e1e2e] text-[#888899] hover:text-[#f5f2eb] text-sm transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Outcome comparison */}
      {hasPlayed && !isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto px-4 pb-16"
        >
          <p className="text-[11px] uppercase tracking-[3px] text-[#888899]/60 text-center mt-8">
            Scripted scenario — illustrative, not a live run
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="rounded-xl border border-[#e05252]/20 bg-[#e05252]/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="h-4 w-4 text-[#e05252]" />
                <span className="text-sm font-semibold text-[#e05252]">Without Enorve</span>
              </div>
              <ul className="space-y-2 text-[13px] text-[#888899]">
                <li className="flex items-start gap-2">
                  <span className="text-[#e05252] mt-0.5">x</span>
                  Policy violated — discount instead of refund
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e05252] mt-0.5">x</span>
                  Customer angrier after second response
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e05252] mt-0.5">x</span>
                  Escalation to social media likely
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#2d9653]/20 bg-[#2d9653]/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-4 w-4 text-[#2d9653]" />
                <span className="text-sm font-semibold text-[#2d9653]">With Enorve</span>
              </div>
              <ul className="space-y-2 text-[13px] text-[#888899]">
                <li className="flex items-start gap-2">
                  <span className="text-[#2d9653] mt-0.5">{"\u2713"}</span>
                  Refund protocol activated automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d9653] mt-0.5">{"\u2713"}</span>
                  Resolved in 2 exchanges, customer satisfied
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d9653] mt-0.5">{"\u2713"}</span>
                  Zero policy violations
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          One inbox. Every channel.
        </h2>
        <p className="text-[#888899] text-base mb-8">
          AI that never goes off-script.
        </p>
        <button
          onClick={goToSignup}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          Start free trial
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
