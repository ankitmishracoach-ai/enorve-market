import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Share2, Check } from "lucide-react"
import { goToSignup } from "../lib/constants"
import { usePageTitle } from "../hooks/usePageTitle"

/* ── Animated counter ── */
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 2, duration = 800 }: {
    value: number; prefix?: string; suffix?: string; decimals?: number; duration?: number
}) {
    const [display, setDisplay] = useState(0)
    const ref = useRef<number>(0)

    useEffect(() => {
        const start = display
        const startTime = performance.now()
        function tick(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setDisplay(start + (value - start) * eased)
            if (progress < 1) ref.current = requestAnimationFrame(tick)
        }
        ref.current = requestAnimationFrame(tick)
        return () => { if (ref.current) cancelAnimationFrame(ref.current) }
    }, [value, duration])

    return <span>{prefix}{display.toFixed(decimals)}{suffix}</span>
}

/* ── Input with label ── */
function CalcInput({ label, value, onChange, min, max, step = 1, prefix }: {
    label: string; value: number; onChange: (v: number) => void
    min: number; max: number; step?: number; prefix?: string
}) {
    return (
        <div>
            <label className="block text-sm text-gray-400 mb-2">{label}</label>
            <div className="flex items-center gap-4">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={e => onChange(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none bg-white/10 accent-emerald-500 cursor-pointer [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(45,150,83,0.4)]"
                />
                <div className="relative w-28 shrink-0">
                    {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">{prefix}</span>}
                    <input
                        type="number"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={e => {
                            const v = Number(e.target.value)
                            if (!isNaN(v) && v >= min && v <= max) onChange(v)
                        }}
                        className={`w-full h-10 rounded-xl bg-white/5 border border-white/10 text-white text-sm text-right pr-3 focus:outline-none focus:border-emerald-500/50 transition-colors ${prefix ? "pl-7" : "pl-3"}`}
                    />
                </div>
            </div>
        </div>
    )
}

/* ── Percentile bar ── */
function PercentileBar({ costPerTicket }: { costPerTicket: number }) {
    // Industry average $8-$25, map to 0-100
    const pct = Math.min(100, Math.max(0, ((costPerTicket - 3) / (30 - 3)) * 100))
    const label = pct < 30 ? "Below average" : pct < 60 ? "Average" : pct < 80 ? "Above average" : "High"
    const color = pct < 30 ? "bg-emerald-500" : pct < 60 ? "bg-emerald-400" : pct < 80 ? "bg-amber-400" : "bg-red-400"

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                <span>$3</span>
                <span className="text-gray-400">{label}</span>
                <span>$30+</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden relative">
                {/* Industry range markers */}
                <div className="absolute left-[18.5%] top-0 w-px h-full bg-white/20" title="$8" />
                <div className="absolute left-[81.5%] top-0 w-px h-full bg-white/20" title="$25" />
                <motion.div
                    className={`h-full rounded-full ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </div>
    )
}

/* ── Main page ── */
export function CostPerTicketCalculator() {
    usePageTitle({
        title: "Cost Per Support Ticket Calculator | Enorve",
        description: "Calculate your true cost per support ticket in 30 seconds. Benchmark against industry averages and find where to cut costs."
    })

    // Read URL params
    const searchParams = new URLSearchParams(window.location.search)
    const [agents, setAgents] = useState(Number(searchParams.get("agents")) || 5)
    const [salary, setSalary] = useState(Number(searchParams.get("salary")) || 3000)
    const [tickets, setTickets] = useState(Number(searchParams.get("tickets")) || 2000)
    const [calculated, setCalculated] = useState(!!searchParams.get("agents"))
    const [copied, setCopied] = useState(false)

    // Calculations
    const monthlyLaborCost = agents * salary
    const costPerTicket = tickets > 0 ? monthlyLaborCost / tickets : 0
    const annualSupportCost = monthlyLaborCost * 12

    function handleCalculate() {
        setCalculated(true)
        const params = new URLSearchParams({
            agents: String(agents),
            salary: String(salary),
            tickets: String(tickets),
        })
        window.history.replaceState({}, "", `?${params.toString()}`)
    }

    function handleShare() {
        const url = window.location.href
        const text = `My support team costs $${costPerTicket.toFixed(2)}/ticket. What's yours? \u2192 ${url}`
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <div className="pt-28 pb-24 relative overflow-hidden min-h-screen">
            {/* Ambient glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,150,83,0.15),rgba(255,255,255,0))] pointer-events-none z-0" />

            <div className="max-w-2xl mx-auto px-6 relative z-10">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Free Tool</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        What does your support team actually cost?
                    </h1>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Most support leads don't know their cost-per-ticket. Calculate yours in 30 seconds.
                    </p>
                </motion.div>

                {/* Inputs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-6 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8"
                >
                    <CalcInput
                        label="Support agents on your team"
                        value={agents} onChange={setAgents}
                        min={1} max={50}
                    />
                    <CalcInput
                        label="Average monthly salary per agent ($)"
                        value={salary} onChange={setSalary}
                        min={500} max={10000} step={100}
                        prefix="$"
                    />
                    <CalcInput
                        label="Tickets handled per month"
                        value={tickets} onChange={setTickets}
                        min={100} max={50000} step={100}
                    />

                    <button
                        onClick={handleCalculate}
                        className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-base transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,150,83,0.3)] hover:shadow-[0_0_30px_rgba(45,150,83,0.4)] cursor-pointer"
                    >
                        Calculate my savings
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* Results */}
                {calculated && (
                    <div className="space-y-6">
                        {/* Big number */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                        >
                            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Your cost per ticket</p>
                            <p className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-1">
                                <AnimatedNumber value={costPerTicket} prefix="$" decimals={2} />
                            </p>
                            <PercentileBar costPerTicket={costPerTicket} />
                        </motion.div>

                        {/* Annual spend */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                        >
                            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Annual support spend</p>
                            <p className="text-3xl md:text-4xl font-semibold text-white">
                                $<AnimatedNumber value={annualSupportCost} prefix="" decimals={0} />
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Based on the inputs you entered — no projection, no automation assumption.
                            </p>
                        </motion.div>

                        {/* Share + CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-center space-y-4 pt-4"
                        >
                            <p className="text-base text-gray-400 font-normal">
                                Now model what AI automation can reduce \u2014 using your own target automation rate.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <button
                                    onClick={goToSignup}
                                    className="h-12 px-8 rounded-full bg-white text-black font-medium text-base hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    See how Enorve does it
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="h-12 px-6 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {copied ? (
                                        <><Check className="w-4 h-4 text-emerald-400" /> Copied!</>
                                    ) : (
                                        <><Share2 className="w-4 h-4" /> Share my number</>
                                    )}
                                </button>
                            </div>

                            <Link
                                to={`/labor-replacement-calculator?agents=${agents}&salary=${salary * 12}&conversations=${tickets}`}
                                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                Model automation impact
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    </div>
                )}

                {/* SEO content */}
                <div className="mt-20 border-t border-white/5 pt-12 space-y-8">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">What is cost per ticket?</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Cost per ticket is the total cost of running your support operation divided by the number of tickets resolved. It includes agent salaries, tooling, management overhead, and training. Most e-commerce support teams run between $5 and $25 per ticket depending on channel mix, conversation complexity, and team size.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">How AI reduces cost per ticket</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            AI-powered support resolves routine conversations — order status, refund requests, product questions — without human involvement. This reduces the number of tickets that need agent time, lowering your cost per ticket while maintaining quality. The key is protocol-governed AI that follows your exact policies, not a generic chatbot.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">How to use this calculator</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Enter the number of support agents, their average monthly salary, and your monthly ticket volume. The calculator shows your current cost per ticket and estimates savings with AI automation. Results are shareable via URL.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
