import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Bot, ArrowRight, Sparkles, MessageSquare, BookOpen, Eye,
    Shield, BarChart3, Zap, AlertTriangle, CheckCircle,
    Brain, Target, Lightbulb, RefreshCw, Lock, TrendingUp
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const modes = [
    {
        title: "Assist Mode",
        subtitle: "Primary Mode",
        icon: MessageSquare,
        color: "violet",
        features: [
            { name: "Live Conversation Analysis", desc: "Real-time detection of customer intent, sentiment, and escalation risk" },
            { name: "Smart Response Suggestions", desc: "AI generates context-aware reply suggestions with one-click insertion" },
            { name: "Alternative Responses", desc: "Multiple response options with labeled variations (Empathetic, Direct, Technical)" },
            { name: "Explainable AI", desc: "\"Why this response?\" rationale showing intent match, tone reasoning, and risk notes" },
            { name: "Agent Tips", desc: "Actionable coaching tips for handling the specific situation" }
        ]
    },
    {
        title: "Knowledge Mode",
        subtitle: "Retrieval-Only",
        icon: BookOpen,
        color: "blue",
        features: [
            { name: "Internal Knowledge Search", desc: "Query your knowledge base for policies, procedures, and verified product information" },
            { name: "Verified Sources", desc: "Responses grounded in your published documentation with source citations" },
            { name: "Governance Guardrails", desc: "Insert confirmation before adding KB content to replies - never sent directly to customers" },
            { name: "Knowledge-Grounded Responses", desc: "Returns explicit \"no match\" when no verified guidance exists (no LLM fallback)" },
            { name: "Example Prompts", desc: "Pre-built queries like \"What is our refund policy?\" for quick access" }
        ]
    },
    {
        title: "Context Mode",
        subtitle: "Read-Only",
        icon: Eye,
        color: "emerald",
        features: [
            { name: "Conversation Snapshot", desc: "AI-generated summary showing customer goal, resolved items, and pending actions" },
            { name: "Readiness Status", desc: "Visual indicator showing \"Ready to close\", \"Awaiting customer\", or \"Needs follow-up\"" },
            { name: "Internal Notes Integration", desc: "Displays tags and agent notes alongside AI analysis" },
            { name: "One-Click Refresh", desc: "Regenerate summary as conversation evolves" },
            { name: "Cross-Conversation Memory", desc: "AI carries customer context across sessions — preferences, past issues, and sentiment — so every interaction picks up where the last left off" }
        ]
    }
]

const differentiators = [
    { title: "Retrieval-Only Knowledge", desc: "Unlike competitors, we never hallucinate - if it's not in your KB, we tell you", icon: Shield },
    { title: "Explainable AI", desc: "Full transparency into why AI made specific decisions", icon: Lightbulb },
    { title: "Governance-First Design", desc: "Confirmation dialogs, audit trails, and quality controls built-in", icon: Lock },
    { title: "Three Specialized Modes", desc: "Purpose-built interfaces for different agent needs", icon: Sparkles },
    { title: "Rich Analytics", desc: "Measure ROI with detailed usage and adoption metrics", icon: BarChart3 },
    { title: "Real-Time Intelligence", desc: "Live sentiment, intent, and risk analysis as conversations unfold", icon: TrendingUp },
    { title: "Contextual Autonomy", desc: "AI adapts tone and actions to each customer's history — empathetic with at-risk accounts, proactive with loyal ones", icon: Brain }
]

export function AICopilot() {
    usePageTitle({
        title: "AI Copilot - Intelligent Agent Assistant",
        description: "AI-powered agent assistance. Instant suggestions, automated responses, and intelligent routing grounded in your knowledge base and protocols."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <Bot className="w-4 h-4 text-violet-400" />
                            <span className="text-sm text-violet-400">AI Copilot</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Your AI teammate<br />
                            for every conversation
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Three intelligent modes. Real-time situation analysis. Explainable decisions.
                            AI Copilot empowers your agents with context-aware suggestions grounded in your knowledge base.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" size="lg" onClick={goToSignup}>
                                    Start free trial
                                    <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Interactive Copilot Interface Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-violet-500/25 blur-[120px] -z-10" />

                            {/* Main Copilot Card */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">AI Copilot</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] px-2 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">Assist</span>
                                        <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">Knowledge</span>
                                        <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">Context</span>
                                    </div>
                                </div>

                                {/* Situation Card */}
                                <div className="p-4 border-b border-white/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Brain className="w-4 h-4 text-violet-400" />
                                        <span className="text-xs font-medium text-white">Situation Analysis</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-[10px] text-gray-400 mb-1">Intent</div>
                                            <div className="text-xs text-blue-400 font-medium">Billing Question</div>
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div className="text-[10px] text-gray-400 mb-1">Emotion</div>
                                            <div className="text-xs text-amber-400 font-medium flex items-center gap-1">
                                                Frustrated <span className="text-gray-400">78%</span>
                                            </div>
                                        </div>
                                        <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                            <div className="text-[10px] text-gray-400 mb-1">Risk</div>
                                            <div className="text-xs text-red-400 font-medium flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                                High
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Best Response */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-violet-400" />
                                            <span className="text-xs font-medium text-white">Best Response</span>
                                        </div>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">High confidence</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-3">
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            "I completely understand your frustration with the billing discrepancy. I've reviewed your account and found the duplicate charge from January 12th. I'm processing a refund of ₹4,999 right now — you should see it reflected within 3-5 business days."
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 px-4 py-2 rounded-lg bg-violet-500 text-white text-xs font-medium hover:bg-violet-600 transition-colors">
                                            Use response
                                        </button>
                                        <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 text-xs hover:bg-white/10 transition-colors border border-white/10">
                                            Copy
                                        </button>
                                    </div>

                                    {/* Alternatives */}
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                            <RefreshCw className="w-3 h-3" />
                                            <span>3 alternatives available</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-[10px] px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Empathetic</span>
                                            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Direct</span>
                                            <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">Technical</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-6 top-1/4 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-white font-medium">KB Grounded</span>
                                </div>
                            </div>

                            {/* SVG Connecting Lines */}
                            <svg className="absolute -left-20 top-0 w-20 h-full opacity-20" viewBox="0 0 80 400">
                                <path d="M80 50 L40 50 L40 350 L80 350" stroke="url(#gradient1)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#1FA86F" />
                                        <stop offset="100%" stopColor="#3B82F6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Three Modes Section */}
            <section className="max-w-[1200px] mx-auto px-6 mb-32 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]"
                    >
                        Three intelligent modes—<br />purpose-built for agents
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400 leading-relaxed max-w-lg"
                    >
                        Switch seamlessly between Assist, Knowledge, and Context modes based on the task at hand.
                    </motion.div>
                </div>

                {/* Mode Cards with Interactive Visuals */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {modes.map((mode, index) => (
                        <motion.div
                            key={mode.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0C0E12] rounded-[32px] p-8 border border-white/5 hover:border-violet-500/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center mb-6">
                                    <mode.icon className="w-7 h-7 text-violet-400" />
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-2xl font-medium text-white tracking-tight">{mode.title}</h3>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                                        {mode.subtitle}
                                    </span>
                                </div>

                                <ul className="space-y-4">
                                    {mode.features.map((feature) => (
                                        <li key={feature.name} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle className="w-3 h-3 text-violet-400" />
                                            </div>
                                            <div>
                                                <span className="text-white text-sm font-medium">{feature.name}</span>
                                                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Live Situation Analysis - Full Width Visual */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Isometric-style visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square max-w-md mx-auto relative">
                                {/* Central Brain Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center shadow-2xl">
                                        <Brain className="w-16 h-16 text-violet-400" />
                                    </div>
                                </div>

                                {/* Orbiting Signal Cards */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                                    <div className="p-3 rounded-xl bg-[#0C0E12] border border-white/10 shadow-xl animate-float">
                                        <div className="flex items-center gap-2">
                                            <Target className="w-4 h-4 text-blue-400" />
                                            <div>
                                                <div className="text-[10px] text-gray-500">Intent</div>
                                                <div className="text-xs text-blue-400 font-medium">Billing Question</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2">
                                    <div className="p-3 rounded-xl bg-[#0C0E12] border border-white/10 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-amber-400" />
                                            <div>
                                                <div className="text-[10px] text-gray-500">Emotion</div>
                                                <div className="text-xs text-amber-400 font-medium">Frustrated</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                        <div className="flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-400" />
                                            <div>
                                                <div className="text-[10px] text-gray-500">Risk Level</div>
                                                <div className="text-xs text-red-400 font-medium flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                                    High
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2">
                                    <div className="p-3 rounded-xl bg-[#0C0E12] border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-purple-400" />
                                            <div>
                                                <div className="text-[10px] text-gray-500">Escalation</div>
                                                <div className="text-xs text-purple-400 font-medium">Recommended</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connecting Lines SVG */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                    <defs>
                                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#1FA86F" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                                        </linearGradient>
                                    </defs>
                                    <line x1="200" y1="134" x2="200" y2="50" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="266" y1="200" x2="350" y2="200" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="200" y1="266" x2="200" y2="350" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                    <line x1="134" y1="200" x2="50" y2="200" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
                                </svg>

                                {/* Outer ring */}
                                <div className="absolute inset-8 rounded-full border border-white/5" />
                                <div className="absolute inset-16 rounded-full border border-dashed border-white/10" />
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Live Situation<br />
                                <span className="text-gray-500">Analysis</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Real-time intelligence as conversations unfold. The SituationCard provides instant visibility into customer intent, emotion, and escalation risk.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Target, title: "Customer Intent", desc: "Automatic classification (Product Question, Complaint, Tech Support, Order Status, Billing, Feedback)" },
                                    { icon: Sparkles, title: "Detected Emotion", desc: "Happy, Frustrated, Confused with visual indicators and confidence percentage" },
                                    { icon: AlertTriangle, title: "Risk Level", desc: "Low/Medium/High escalation risk based on AI scoring" },
                                    { icon: Zap, title: "Escalation Alert", desc: "Pulsing warning badge when human intervention is recommended" }
                                ].map((signal) => (
                                    <div key={signal.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                                            <signal.icon className="w-5 h-5 text-violet-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{signal.title}</h4>
                                            <p className="text-gray-500 text-xs leading-relaxed">{signal.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Decision Explainability */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                                <span className="text-xs text-amber-400 font-medium">Business Plan Feature</span>
                            </div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-[1.1]"
                            >
                                AI Decision<br />Explainability
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-lg"
                        >
                            Full transparency into why AI made specific decisions. The "Why AI Acted" panel provides complete diagnostic details.
                        </motion.p>
                    </div>

                    {/* Explainability Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-[32px] bg-[#0C0E12] border border-white/5 p-8 md:p-10 overflow-hidden">
                            {/* Header Bar */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Why AI Acted</h3>
                                        <p className="text-xs text-gray-500">Conversation #CONV-29481</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-gray-500">Escalation Score</span>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                            <div
                                                key={n}
                                                className={`w-4 h-6 rounded-sm ${n <= 7 ? 'bg-red-500/80' : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-red-400 font-bold text-lg">7/10</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Escalation Reasons */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-400" />
                                        Escalation Reasons
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <span className="text-sm text-gray-300">High frustration detected</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                                            <span className="text-sm text-gray-300">Complex billing issue</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <span className="text-sm text-gray-300">Repeated contact (3rd time)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Diagnostics */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4 text-blue-400" />
                                        AI Diagnostics
                                    </h4>
                                    <div className="space-y-3 font-mono text-xs">
                                        <div className="flex justify-between p-2 rounded bg-white/[0.02]">
                                            <span className="text-gray-500">AI Attempts</span>
                                            <span className="text-white">3</span>
                                        </div>
                                        <div className="flex justify-between p-2 rounded bg-white/[0.02]">
                                            <span className="text-gray-500">Last Confidence</span>
                                            <span className="text-amber-400">62%</span>
                                        </div>
                                        <div className="flex justify-between p-2 rounded bg-white/[0.02]">
                                            <span className="text-gray-500">KB Lookups</span>
                                            <span className="text-white">4 (2 failed)</span>
                                        </div>
                                        <div className="flex justify-between p-2 rounded bg-white/[0.02]">
                                            <span className="text-gray-500">RAG Status</span>
                                            <span className="text-emerald-400">Success</span>
                                        </div>
                                        <div className="flex justify-between p-2 rounded bg-white/[0.02]">
                                            <span className="text-gray-500">KB Grounded</span>
                                            <span className="text-emerald-400">Yes</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Timeline */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-violet-400" />
                                        AI Action Timeline
                                    </h4>
                                    <div className="relative space-y-4 pl-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-violet-500 before:to-transparent">
                                        <div className="relative flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-violet-500 border-2 border-[#0C0E12] -ml-[5px]" />
                                            <div>
                                                <div className="text-xs text-gray-400">10:23:41</div>
                                                <div className="text-sm text-white">Intent classified</div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0C0E12] -ml-[5px]" />
                                            <div>
                                                <div className="text-xs text-gray-400">10:23:42</div>
                                                <div className="text-sm text-white">KB search completed</div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-[#0C0E12] -ml-[5px]" />
                                            <div>
                                                <div className="text-xs text-gray-400">10:23:43</div>
                                                <div className="text-sm text-white">Low confidence flagged</div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-[#0C0E12] -ml-[5px]" />
                                            <div>
                                                <div className="text-xs text-gray-400">10:23:44</div>
                                                <div className="text-sm text-white">Escalation triggered</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Analytics Dashboard */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Copilot Analytics<br />
                                <span className="text-gray-500">Dashboard</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Track AI Copilot effectiveness across your team. Measure ROI with detailed usage and adoption metrics.
                            </p>

                            <div className="relative grid sm:grid-cols-2 gap-4">
                                <span className="absolute -top-3 right-0 text-[9px] font-semibold uppercase tracking-wider text-white/20 bg-white/5 px-2 py-0.5 rounded-full z-10">Sample data — illustrative only</span>
                                {[
                                    { metric: "Total Suggestions", value: "2,847", trend: "+12%" },
                                    { metric: "Usage Rate", value: "73%", trend: "+5%" },
                                    { metric: "Edit Rate", value: "22%", trend: "-3%" },
                                    { metric: "Active Agents", value: "24", trend: "+2" }
                                ].map((item) => (
                                    <div key={item.metric} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="text-xs text-gray-500 mb-1">{item.metric}</div>
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-bold text-white">{item.value}</span>
                                            <span className="text-xs text-emerald-400 mb-1">{item.trend}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Chart Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Usage by Feature</h3>
                                <span className="text-xs text-gray-500">Last 30 days</span>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">Suggestions Used</span>
                                        <span className="text-sm text-white font-medium">2,086</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">KB Searches</span>
                                        <span className="text-sm text-white font-medium">1,423</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">Context Summaries</span>
                                        <span className="text-sm text-white font-medium">892</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">Tone Analysis</span>
                                        <span className="text-sm text-white font-medium">634</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[32%] rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            Why Enorve AI Copilot?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Key differentiators that set us apart from the competition.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-violet-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-7 h-7 text-violet-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31, 168, 111,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Ready to supercharge your support?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and experience AI Copilot today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" size="lg" onClick={goToSignup}>
                                    Start free trial
                                    <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Talk to sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CSS for float animation */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}
