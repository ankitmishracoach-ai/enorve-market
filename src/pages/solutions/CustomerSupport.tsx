import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    HeadphonesIcon, ArrowRight, Inbox, Brain, Zap, Clock, Users,
    MessageSquare, CheckCircle, TrendingUp, AlertTriangle, Target,
    Sparkles, Timer, Shield, BarChart3, Heart, Smile, Mail,
    MessageCircle, Instagram, Send
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const painPoints = [
    { icon: Users, text: "Agents are overwhelmed by volume", color: "#EF4444" },
    { icon: MessageSquare, text: "Same questions answered again and again", color: "#D4C08A" },
    { icon: Clock, text: "SLAs are hard to track across channels", color: "#1FA86F" },
    { icon: Brain, text: "Senior agents waste time on repetitive issues", color: "#3B82F6" }
]

const solutions = [
    {
        number: "01",
        title: "One inbox, zero context switching",
        feature: "Multi-Channel Inbox",
        color: "#3B82F6",
        icon: Inbox,
        capabilities: [
            "Web chat, email, WhatsApp, Instagram in one view",
            "Advanced filters, saved views, collision detection"
        ],
        impact: "Agents work faster, fewer mistakes"
    },
    {
        number: "02",
        title: "AI that assists — not replaces — your agents",
        feature: "AI Copilot (Assist Mode + Context Mode)",
        color: "#1FA86F",
        icon: Brain,
        capabilities: [
            "Suggested replies based on conversation + knowledge",
            "AI summaries for long threads",
            "Sentiment and intent detection",
            "Cross-conversation memory — AI knows each customer's full history"
        ],
        impact: "Faster replies, consistent tone, less mental load"
    },
    {
        number: "03",
        title: "Let AI close what it's confident about",
        feature: "AI Auto-Resolution",
        color: "#10B981",
        icon: Zap,
        capabilities: [
            "Configurable confidence thresholds",
            "Category exclusions for sensitive issues"
        ],
        impact: "Fewer tickets for humans, faster resolutions for customers"
    },
    {
        number: "04",
        title: "Never miss an SLA again",
        feature: "SLA Management + Real-time Alerts",
        color: "#D4C08A",
        icon: Timer,
        capabilities: [
            "First response and resolution SLAs",
            "At-risk and breach notifications"
        ],
        impact: "Predictable performance, fewer escalations"
    }
]

const outcomes = [
    { icon: TrendingUp, title: "Faster first response", value: "—", desc: "AI replies instantly, 24/7" },
    { icon: CheckCircle, title: "Routine conversations resolved", value: "—", desc: "designed to auto-resolve" },
    { icon: Heart, title: "Less repetitive work for your team", value: "—", desc: "AI handles the routine" },
    { icon: Smile, title: "Higher customer satisfaction", value: "—", desc: "faster, more consistent replies" }
]

export function CustomerSupport() {
    usePageTitle({
        title: "AI for Customer Support Teams | Enorve",
        description: "Resolve conversations automatically with AI that follows your rules. Faster first response, less repetitive work, higher satisfaction."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <HeadphonesIcon className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-400">For Support & CX Teams</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Resolve more.<br />
                            Hire less.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Your agents are overwhelmed. AI Copilot helps them respond faster, while Auto-Resolution handles the easy ones automatically.
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

                    {/* Support Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-blue-500/25 blur-[120px] -z-10" />

                            {/* Main UI Mockup */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                <span className="absolute top-2 right-3 text-[9px] font-semibold uppercase tracking-wider text-white/20 bg-white/5 px-2 py-0.5 rounded-full z-10">Sample data — illustrative only</span>
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">Support Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
                                            <span className="text-[10px] text-green-400">SLA: 98.2%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-4 gap-2 p-3 border-b border-white/5">
                                    {[
                                        { label: "Open", value: "24", color: "text-blue-400" },
                                        { label: "Pending", value: "12", color: "text-amber-400" },
                                        { label: "AI Handling", value: "18", color: "text-violet-400" },
                                        { label: "Resolved Today", value: "89", color: "text-green-400" }
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center p-2 rounded-lg bg-white/[0.02]">
                                            <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                                            <div className="text-[10px] text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Conversation with AI Copilot */}
                                <div className="p-4">
                                    <div className="flex gap-3">
                                        {/* Conversation */}
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-start gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-[10px] font-bold text-white">RK</div>
                                                <div className="flex-1">
                                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                                        <p className="text-xs text-gray-300">My order #EN-99821 hasn't arrived yet. It's been 5 days!</p>
                                                    </div>
                                                    <div className="flex gap-2 mt-1">
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400">frustrated</span>
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">order_status</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Copilot Panel */}
                                        <div className="w-48 p-3 rounded-xl bg-violet-500/5 border border-violet-500/20">
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <Sparkles className="w-3 h-3 text-violet-400" />
                                                <span className="text-[10px] font-medium text-violet-400">AI Suggestion</span>
                                            </div>
                                            <p className="text-[10px] text-gray-300 leading-relaxed mb-2">
                                                "I apologize for the delay. I've checked order #EN-99821 - it's currently in transit and expected to arrive tomorrow by 6 PM."
                                            </p>
                                            <div className="flex gap-1">
                                                <button className="flex-1 px-2 py-1 rounded bg-violet-500 text-[9px] text-white font-medium">Insert</button>
                                                <button className="px-2 py-1 rounded bg-white/5 text-[9px] text-gray-400">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Channel Icons */}
                                <div className="px-4 pb-4 flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {[
                                            { icon: "💬", color: "#25D366" },
                                            { icon: "✉️", color: "#EA4335" },
                                            { icon: "📷", color: "#E4405F" },
                                            { icon: "💭", color: "#FACC15" }
                                        ].map((ch, i) => (
                                            <div
                                                key={i}
                                                className="w-6 h-6 rounded flex items-center justify-center text-[10px]"
                                                style={{ backgroundColor: `${ch.color}20`, border: `1px solid ${ch.color}40` }}
                                            >
                                                {ch.icon}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-400">All channels in one view</span>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-green-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">AI</div>
                                        <div className="text-[10px] text-gray-400">Auto-resolved</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <Timer className="w-4 h-4 text-blue-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">45s</div>
                                        <div className="text-[10px] text-gray-400">Avg response</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                            Sound familiar?
                        </h2>
                        <p className="text-lg text-gray-400">The challenges every support team faces</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {painPoints.map((pain, index) => (
                            <motion.div
                                key={pain.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${pain.color}20`, border: `1px solid ${pain.color}40` }}
                                >
                                    <pain.icon className="w-6 h-6" style={{ color: pain.color }} />
                                </div>
                                <p className="text-white font-medium leading-snug">{pain.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Here's how Enorve helps
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Purpose-built features that directly address your team's biggest challenges
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                            >
                                <div className="grid lg:grid-cols-[1fr,2fr,1fr] gap-8 items-center">
                                    {/* Number & Title */}
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="text-4xl font-bold opacity-30"
                                            style={{ color: solution.color }}
                                        >
                                            {solution.number}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-2 leading-tight">{solution.title}</h3>
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{ backgroundColor: `${solution.color}20`, color: solution.color, border: `1px solid ${solution.color}40` }}
                                            >
                                                <solution.icon className="w-3 h-3" />
                                                {solution.feature}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Capabilities */}
                                    <div className="space-y-2">
                                        {solution.capabilities.map((cap) => (
                                            <div key={cap} className="flex items-start gap-3">
                                                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: solution.color }} />
                                                <span className="text-gray-400 text-sm">{cap}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Impact */}
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/10">
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Impact</div>
                                        <p className="text-white font-medium text-sm">{solution.impact}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                            <TrendingUp className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-green-400 font-medium">Proven Results</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Real outcomes for support teams
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-green-500/30 transition-all duration-500 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <outcome.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{outcome.value}</div>
                                <div className="text-xs text-gray-400 mb-3">{outcome.desc}</div>
                                <h3 className="text-lg font-medium text-white">{outcome.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Visualization */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                From chaos<br />
                                <span className="text-gray-400">to clarity</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Watch your team's productivity transform. AI handles the repetitive work while your agents focus on conversations that matter.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { before: "Agents juggle 5+ browser tabs", after: "One unified inbox for everything" },
                                    { before: "30+ minutes to answer complex questions", after: "AI suggests answers in seconds" },
                                    { before: "Missed SLAs and angry customers", after: "Real-time alerts before breaches" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex-1 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                                            <div className="text-[10px] text-red-400 mb-1">Before</div>
                                            <p className="text-xs text-gray-400">{item.before}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <div className="flex-1 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                                            <div className="text-[10px] text-green-400 mb-1">After</div>
                                            <p className="text-xs text-white">{item.after}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Agent Journey Visualization */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <h3 className="text-lg font-medium text-white mb-6">A day in the life with Enorve</h3>

                            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-violet-500 before:to-green-500">
                                {[
                                    { time: "9:00 AM", event: "Log in to unified inbox", detail: "All channels ready, no tab switching", color: "#3B82F6" },
                                    { time: "9:15 AM", event: "AI handles routine queries", detail: "18 conversations auto-resolved", color: "#1FA86F" },
                                    { time: "10:30 AM", event: "Complex case arrives", detail: "AI Copilot suggests response with KB context", color: "#1FA86F" },
                                    { time: "11:00 AM", event: "SLA alert received", detail: "Prioritize at-risk conversation", color: "#D4C08A" },
                                    { time: "5:00 PM", event: "Shift ends", detail: "89 conversations resolved, zero SLA breaches", color: "#10B981" }
                                ].map((item, i) => (
                                    <div key={i} className="relative flex items-start gap-4">
                                        <div
                                            className="w-6 h-6 rounded-full border-2 border-[#0C0E12] -ml-5 flex items-center justify-center"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <CheckCircle className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] text-gray-400">{item.time}</span>
                                            </div>
                                            <h4 className="text-sm text-white font-medium">{item.event}</h4>
                                            <p className="text-xs text-gray-400">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            See Enorve in action for support teams
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and transform your support operations today.
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

