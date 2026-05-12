import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePageTitle } from "../hooks/usePageTitle"
import {
  MessageSquare, Shield, ShieldAlert, ShieldCheck, CheckCircle2,
  AlertTriangle, Zap, Mail, Instagram, BarChart3,
  GitBranch, Bot, Users, ArrowRight, Play,
} from "lucide-react"

// ── Types ────────────────────────────────────────────────────────────────────
interface ChatMsg { from: "customer" | "ai-bad" | "ai-good" | "system"; text: string; delay: number }

// ── Scene data ───────────────────────────────────────────────────────────────
const SCENE_DURATION = {
  intro: 5000,
  problem: 13000,
  solution: 14000,
  builder: 11000,
  simulator: 11000,
  inbox: 9000,
  analytics: 9000,
  outro: 7000,
}

type Scene = keyof typeof SCENE_DURATION
const SCENES: Scene[] = ["intro", "problem", "solution", "builder", "simulator", "inbox", "analytics", "outro"]

const BAD_CHAT: ChatMsg[] = [
  { from: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 1500 },
  { from: "ai-bad", text: "Hi! Thanks for reaching out! I'd be happy to help with a discount on your next order!", delay: 4000 },
  { from: "customer", text: "ARE YOU SERIOUS? I want a REFUND not a discount", delay: 7000 },
  { from: "ai-bad", text: "I understand your frustration! Here's a 20% discount code: SAVE20", delay: 9500 },
  { from: "system", text: "Policy violated — Refund ignored, unauthorized discount offered", delay: 11500 },
]

const GOOD_CHAT: ChatMsg[] = [
  { from: "customer", text: "I want a refund. This product broke after 2 days. This is unacceptable.", delay: 1500 },
  { from: "system", text: "Refund Protocol activated", delay: 3500 },
  { from: "ai-good", text: "I'm sorry to hear that. A product breaking after 2 days is not acceptable. Let me process your refund right away. Can you confirm your order number?", delay: 4500 },
  { from: "customer", text: "It's #4521", delay: 8000 },
  { from: "ai-good", text: "Thank you. Your refund of $49.00 has been initiated. You'll see it in 3-5 business days.", delay: 10000 },
  { from: "system", text: "Resolved — Protocol followed, customer satisfied", delay: 12500 },
]

const FLOW_NODES = [
  { label: "Trigger", sub: "Customer requests refund", color: "#1FA86F", icon: Zap },
  { label: "Collect", sub: "Ask for order number", color: "#14b8a6", icon: MessageSquare },
  { label: "Action", sub: "Look up order details", color: "#22c55e", icon: GitBranch },
  { label: "Condition", sub: "Within 30-day policy?", color: "#D4C08A", icon: Shield },
  { label: "Approve", sub: "Process refund", color: "#3b82f6", icon: CheckCircle2 },
  { label: "Escalate", sub: "Transfer to manager", color: "#ef4444", icon: Users },
]

const INBOX_ITEMS = [
  { name: "Sarah M.", channel: "webchat", icon: MessageSquare, preview: "When will my order arrive?", time: "2m", status: "ai" as const },
  { name: "James K.", channel: "email", icon: Mail, preview: "Invoice request for March", time: "5m", status: "ai" as const },
  { name: "Priya R.", channel: "instagram", icon: Instagram, preview: "Product color doesn't match", time: "8m", status: "human" as const },
  { name: "Tom W.", channel: "webchat", icon: MessageSquare, preview: "Change my subscription plan", time: "12m", status: "ai" as const },
  { name: "Lisa C.", channel: "email", icon: Mail, preview: "Delivery to wrong address", time: "15m", status: "human" as const },
]

const METRICS = [
  { label: "Resolution Rate", value: 87, suffix: "%", color: "#22c55e" },
  { label: "Avg Response", value: 12, suffix: "s", color: "#3b82f6" },
  { label: "AI Confidence", value: 94, suffix: "%", color: "#1FA86F" },
  { label: "QA Score", value: 82, suffix: "/100", color: "#D4C08A" },
]

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, duration = 1500, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(to * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [to, duration])
  return <>{val}{suffix}</>
}

// ── Floating background orbs ─────────────────────────────────────────────────
function BackgroundMesh() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/50" />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)", top: "-10%", right: "-5%" }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #1FA86F 0%, transparent 70%)", bottom: "-5%", left: "-5%" }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -25, 0], scale: [1, 0.95, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", top: "40%", left: "50%" }}
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  )
}

// ── Glass card ───────────────────────────────────────────────────────────────
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl backdrop-blur-sm ${className}`} style={{
      background: "rgba(255,255,255,0.65)",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
    }}>
      {children}
    </div>
  )
}

// ── Chat window frame ────────────────────────────────────────────────────────
function ChatWindow({ variant, children }: { variant: "bad" | "good"; children: React.ReactNode }) {
  const isBad = variant === "bad"
  return (
    <div className="rounded-2xl overflow-hidden" style={{
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
    }}>
      {/* Window header */}
      <div className={`flex items-center justify-between px-5 py-3 ${
        isBad ? "bg-gradient-to-r from-red-50 to-red-50/50" : "bg-gradient-to-r from-emerald-50 to-emerald-50/50"
      }`} style={{ borderBottom: `1px solid ${isBad ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.1)"}` }}>
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
            isBad ? "bg-red-100" : "bg-emerald-100"
          }`}>
            {isBad
              ? <ShieldAlert className="w-4 h-4 text-red-500" />
              : <ShieldCheck className="w-4 h-4 text-emerald-600" />
            }
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider ${isBad ? "text-red-500" : "text-emerald-600"}`}>
              {isBad ? "Without Enorve" : "With Enorve"}
            </p>
            <p className="text-[10px] text-slate-400">Customer Support</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className={`w-2.5 h-2.5 rounded-full ${isBad ? "bg-red-300" : "bg-emerald-300"}`} />
        </div>
      </div>

      {/* Chat body */}
      <div className="px-5 py-4 space-y-3 min-h-[280px]">
        {children}
      </div>

      {/* Input bar */}
      <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-300">
            Type a message...
          </div>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
            isBad ? "bg-red-100" : "bg-emerald-100"
          }`}>
            <ArrowRight className={`w-4 h-4 ${isBad ? "text-red-400" : "text-emerald-500"}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Chat bubble ──────────────────────────────────────────────────────────────
function Bubble({ msg, visible }: { msg: ChatMsg; visible: boolean }) {
  if (!visible) return null
  const isCustomer = msg.from === "customer"
  const isSystem = msg.from === "system"
  const isBad = msg.from === "ai-bad"
  const isError = isSystem && msg.text.includes("violated")

  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-center py-1.5"
      >
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold shadow-sm ${
          isError
            ? "bg-red-50 text-red-600 border border-red-200/60"
            : "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
        }`}>
          {isError ? <AlertTriangle className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
          {msg.text}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className={`flex items-end gap-2 ${isCustomer ? "justify-start" : "justify-end"}`}
    >
      {isCustomer && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center flex-shrink-0 shadow-sm">
          <span className="text-[10px] font-bold text-slate-500">JD</span>
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-3 text-[13px] leading-relaxed shadow-sm ${
          isCustomer
            ? "bg-slate-100 text-slate-700 rounded-2xl rounded-bl-sm"
            : isBad
              ? "bg-gradient-to-br from-red-50 to-red-100/50 text-red-800 rounded-2xl rounded-br-sm border border-red-100/80"
              : "bg-gradient-to-br from-emerald-50 to-emerald-100/50 text-emerald-800 rounded-2xl rounded-br-sm border border-emerald-100/80"
        }`}
      >
        {msg.text}
      </div>
      {!isCustomer && (
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
          isBad ? "bg-gradient-to-br from-red-100 to-red-200" : "bg-gradient-to-br from-emerald-100 to-emerald-200"
        }`}>
          <Bot className={`w-3.5 h-3.5 ${isBad ? "text-red-500" : "text-emerald-600"}`} />
        </div>
      )}
    </motion.div>
  )
}

// ── Typing indicator ─────────────────────────────────────────────────────────
function TypingDots({ bad }: { bad?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center gap-2 ${bad ? "justify-end" : "justify-end"}`}
    >
      <div className={`flex gap-1 px-4 py-3 rounded-2xl ${bad ? "bg-red-50" : "bg-emerald-50"}`}>
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${bad ? "bg-red-300" : "bg-emerald-300"}`}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ── Scene label ──────────────────────────────────────────────────────────────
function SceneLabel({ text, color }: { text: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-2 mb-3"
    >
      <div className="h-px flex-1 max-w-[40px]" style={{ background: color }} />
      <span className="text-[11px] font-bold uppercase tracking-[3px]" style={{ color }}>
        {text}
      </span>
      <div className="h-px flex-1 max-w-[40px]" style={{ background: color }} />
    </motion.div>
  )
}

// ── Main ─────────────────────────────────────────────────────────────────────
export function DemoVideo() {
  usePageTitle({
    title: "Demo — Watch Enorve in Action",
    description: "See how Enorve builds, tests, and deploys AI support protocols in a cinematic walkthrough."
  })
  // Prevent indexing — internal demo page
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => { document.head.removeChild(meta) }
  }, [])
  const [scene, setScene] = useState<Scene>("intro")
  const [sceneTime, setSceneTime] = useState(0)
  const [started, setStarted] = useState(false)

  const sceneIdx = SCENES.indexOf(scene)

  const advanceScene = useCallback(() => {
    const nextIdx = sceneIdx + 1
    if (nextIdx < SCENES.length) {
      setScene(SCENES[nextIdx])
      setSceneTime(0)
    }
  }, [sceneIdx])

  useEffect(() => {
    if (!started) return
    const interval = setInterval(() => setSceneTime(t => t + 100), 100)
    return () => clearInterval(interval)
  }, [started, scene])

  useEffect(() => {
    if (!started) return
    if (sceneTime >= SCENE_DURATION[scene]) advanceScene()
  }, [sceneTime, scene, started, advanceScene])

  const totalDuration = Object.values(SCENE_DURATION).reduce((a, b) => a + b, 0)
  const elapsed = SCENES.slice(0, sceneIdx).reduce((a, s) => a + SCENE_DURATION[s], 0) + sceneTime
  const progress = Math.min(elapsed / totalDuration, 1)

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <BackgroundMesh />

      {/* Progress bar */}
      {started && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-black/[0.03] z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      {/* Logo watermark */}
      {started && (
        <div className="fixed top-5 left-6 z-50 flex items-center gap-2.5">
          <svg viewBox="390 290 700 810" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <g fill="#0F5C38">
              <path d="M734.17 952.23C557.58 952.23 413.88 808.63 413.73 632.09C413.88 455.24 557.58 311.64 734.17 311.64C910.87 311.64 1054.62 455.37 1054.62 632.09L1054.62 699.61L734.10 699.25L734.25 564.33L906.96 564.52C879.91 495.53 812.64 446.56 734.17 446.56C631.91 446.56 548.72 529.70 548.64 631.94C548.72 734.17 631.91 817.31 734.17 817.31Z"/>
              <path d="M430.73 1081.25L1071.03 803.99L590.80 803.99Z"/>
            </g>
          </svg>
          <span className="text-[15px] font-medium tracking-[0.5px] lowercase text-slate-500" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>enorve</span>
        </div>
      )}

      {/* Start screen */}
      {!started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white text-xl font-black">e</span>
            </div>
            <span className="text-3xl font-bold text-slate-800 tracking-tight">enorve</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg"
          >
            Product Demo
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStarted(true)}
            className="flex items-center gap-3 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl text-white font-semibold text-lg transition-colors shadow-xl shadow-emerald-500/25"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            Play Demo
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-slate-300 text-sm"
          >
            ~80 seconds · Best at 1920×1080
          </motion.p>
        </motion.div>
      )}

      {/* Scenes */}
      <AnimatePresence mode="wait">
        {started && (
          <motion.div
            key={scene}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl mx-auto px-8 flex flex-col items-center justify-center min-h-screen"
          >
            {/* ── INTRO ──────────────────────────────────── */}
            {scene === "intro" && (
              <div className="flex flex-col items-center gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                  className="text-5xl sm:text-7xl font-bold text-center text-slate-800 leading-[1.1] tracking-tight"
                >
                  Your AI says exactly
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    what you'd say.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-2xl text-slate-400 font-light"
                >
                  Every time.
                </motion.p>
              </div>
            )}

            {/* ── PROBLEM ────────────────────────────────── */}
            {scene === "problem" && (
              <div className="flex flex-col items-center gap-6 w-full max-w-md">
                <SceneLabel text="The Problem" color="#ef4444" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-4"
                >
                  Generic AI doesn't follow your rules.
                </motion.h2>

                <ChatWindow variant="bad">
                  {BAD_CHAT.map((msg, i) => (
                    <Bubble key={i} msg={msg} visible={sceneTime >= msg.delay} />
                  ))}
                  <AnimatePresence>
                    {sceneTime >= 3000 && sceneTime < 4000 && <TypingDots bad />}
                    {sceneTime >= 8500 && sceneTime < 9500 && <TypingDots bad />}
                  </AnimatePresence>
                </ChatWindow>
              </div>
            )}

            {/* ── SOLUTION ───────────────────────────────── */}
            {scene === "solution" && (
              <div className="flex flex-col items-center gap-6 w-full max-w-md">
                <SceneLabel text="With Enorve" color="#22c55e" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-4"
                >
                  AI that follows your protocol. Every time.
                </motion.h2>

                <ChatWindow variant="good">
                  {GOOD_CHAT.map((msg, i) => (
                    <Bubble key={i} msg={msg} visible={sceneTime >= msg.delay} />
                  ))}
                  <AnimatePresence>
                    {sceneTime >= 3500 && sceneTime < 4500 && <TypingDots />}
                    {sceneTime >= 9000 && sceneTime < 10000 && <TypingDots />}
                  </AnimatePresence>
                </ChatWindow>
              </div>
            )}

            {/* ── BUILDER ────────────────────────────────── */}
            {scene === "builder" && (
              <div className="flex flex-col items-center gap-6 w-full">
                <SceneLabel text="Protocol Engine" color="#1FA86F" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-6"
                >
                  Build your AI's behavior visually.
                </motion.h2>

                <div className="flex flex-wrap items-start justify-center gap-4 max-w-3xl">
                  {FLOW_NODES.map((node, i) => {
                    const Icon = node.icon
                    return (
                      <motion.div key={i} className="flex items-center gap-3">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.7, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.5, type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <GlassCard className="w-44 p-4">
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${node.color}15` }}>
                                <Icon className="w-4 h-4" style={{ color: node.color }} />
                              </div>
                              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: node.color }}>
                                {node.label}
                              </span>
                            </div>
                            <p className="text-[12px] text-slate-500 leading-relaxed">{node.sub}</p>
                          </GlassCard>
                        </motion.div>
                        {i < FLOW_NODES.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 + i * 0.5 }}
                          >
                            <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── SIMULATOR ──────────────────────────────── */}
            {scene === "simulator" && (
              <div className="flex flex-col items-center gap-6 w-full max-w-lg">
                <SceneLabel text="Adversarial Simulator" color="#D4C08A" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-4"
                >
                  Stress-test before customers see it.
                </motion.h2>

                <div className="grid grid-cols-3 gap-3 w-full mb-4">
                  {[
                    { name: "Angry Refunder", icon: "😤", desc: "Demands refund aggressively" },
                    { name: "Off-Topic Wanderer", icon: "🌀", desc: "Keeps changing subject" },
                    { name: "Policy Pusher", icon: "📋", desc: "Probes for exceptions" },
                  ].map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.3, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <GlassCard className={`p-4 text-center ${i === 0 ? "ring-2 ring-amber-400/30" : ""}`}>
                        <div className="text-2xl mb-2">{p.icon}</div>
                        <p className="text-xs font-semibold text-slate-700 mb-1">{p.name}</p>
                        <p className="text-[10px] text-slate-400">{p.desc}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                  className="w-full"
                >
                  <GlassCard className="p-8 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-[3px] mb-4">Health Score</p>
                    <div className="text-6xl font-bold mb-3" style={{
                      background: "linear-gradient(135deg, #D4C08A, #C17A2B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                      {sceneTime >= 3000 ? <Counter to={72} duration={1500} /> : "—"}
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 mt-4 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #D4C08A, #C17A2B)" }}
                        initial={{ width: 0 }}
                        animate={{ width: sceneTime >= 3000 ? "72%" : "0%" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: sceneTime >= 4500 ? 1 : 0 }}
                      className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-4"
                    >
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> No breaches</span>
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> 2/3 goals</span>
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> No hallucinations</span>
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </div>
            )}

            {/* ── INBOX ──────────────────────────────────── */}
            {scene === "inbox" && (
              <div className="flex flex-col items-center gap-6 w-full max-w-lg">
                <SceneLabel text="Unified Inbox" color="#3b82f6" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-4"
                >
                  Every channel. One inbox.
                </motion.h2>

                <div className="w-full space-y-2.5">
                  {INBOX_ITEMS.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30, y: 8 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.45, type: "spring", stiffness: 250, damping: 25 }}
                      >
                        <GlassCard className="flex items-center gap-4 px-5 py-4">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-slate-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                              <span className="text-[10px] text-slate-300">{item.time} ago</span>
                            </div>
                            <p className="text-xs text-slate-400 truncate">{item.preview}</p>
                          </div>
                          <div className={`text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                            item.status === "ai"
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                              : "bg-sky-50 text-sky-600 border border-sky-100"
                          }`}>
                            {item.status === "ai" ? "AI" : "Agent"}
                          </div>
                        </GlassCard>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── ANALYTICS ──────────────────────────────── */}
            {scene === "analytics" && (
              <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
                <SceneLabel text="Real-Time Analytics" color="#1FA86F" />
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-slate-600 text-center mb-4"
                >
                  See what's working. Fix what's not.
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                  {METRICS.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.3, type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <GlassCard className="p-5 text-center">
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-3">{m.label}</p>
                        <div className="text-3xl font-bold" style={{ color: m.color }}>
                          {sceneTime >= 1000 + i * 300 ? <Counter to={m.value} suffix={m.suffix} duration={1200} /> : "—"}
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: sceneTime >= 2800 ? 1 : 0, y: sceneTime >= 2800 ? 0 : 16 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <GlassCard className="p-6">
                    <div className="flex items-end gap-[3px] h-24">
                      {Array.from({ length: 28 }, (_, i) => {
                        const h = 25 + Math.sin(i * 0.4) * 15 + (i / 28) * 30 + Math.sin(i * 1.2) * 8
                        return (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t"
                            style={{ background: `linear-gradient(180deg, ${i > 20 ? "#22c55e" : "#94a3b8"}40, ${i > 20 ? "#22c55e" : "#94a3b8"}15)` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.min(h, 95)}%` }}
                            transition={{ delay: 3.0 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )
                      })}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-300 mt-3 px-1">
                      <span>7 days ago</span>
                      <span className="text-slate-400 font-medium">Message volume</span>
                      <span>Today</span>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            )}

            {/* ── OUTRO ──────────────────────────────────── */}
            {scene === "outro" && (
              <div className="flex flex-col items-center gap-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                  className="text-4xl sm:text-6xl font-bold text-center text-slate-800 leading-[1.1] tracking-tight"
                >
                  AI that follows your rules.
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Not its own.
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex flex-col items-center gap-4 mt-2"
                >
                  <a
                    href="https://enorve.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-2xl text-white font-semibold text-lg transition-colors shadow-xl shadow-emerald-500/20"
                  >
                    Start free trial →
                  </a>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scene indicators */}
      {started && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {SCENES.map((s, i) => (
            <motion.div
              key={s}
              className="rounded-full"
              animate={{
                width: i === sceneIdx ? 24 : 6,
                height: 6,
                backgroundColor: i === sceneIdx ? "#22c55e" : i < sceneIdx ? "#cbd5e1" : "#e2e8f0",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
