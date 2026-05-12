import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    ArrowRight, Send, Users, MessageSquare, Shield,
    BarChart3, Clock, Ban, Zap, GitBranch,
    CheckCircle, Filter, Eye, Smartphone
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const phaseColors = {
    emerald: {
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-500/20",
        text: "text-emerald-400",
        dotBg: "bg-emerald-400",
    },
    amber: {
        iconBg: "bg-amber-500/10",
        iconBorder: "border-amber-500/20",
        text: "text-amber-400",
        dotBg: "bg-amber-400",
    },
    cyan: {
        iconBg: "bg-cyan-500/10",
        iconBorder: "border-cyan-500/20",
        text: "text-cyan-400",
        dotBg: "bg-cyan-400",
    },
    violet: {
        iconBg: "bg-violet-500/10",
        iconBorder: "border-violet-500/20",
        text: "text-violet-400",
        dotBg: "bg-violet-400",
    },
} as const

type PhaseColor = keyof typeof phaseColors

const phases: {
    title: string
    subtitle: string
    description: string
    icon: typeof Send
    color: PhaseColor
    features: { name: string; desc: string }[]
}[] = [
    {
        title: "Target",
        subtitle: "Segment Builder",
        description: "Define exactly who receives your campaign using point-and-click filters. Lifecycle stage, purchase history, churn risk, last activity. Segments evaluate live at send time, not at creation.",
        icon: Filter,
        color: "emerald",
        features: [
            { name: "Dynamic segments", desc: "Filters re-evaluate at send time \u2014 customers who no longer match are excluded automatically" },
            { name: "AND/OR logic", desc: "Combine conditions with clickable AND/OR toggles for complex targeting" },
            { name: "Live audience count", desc: "See exactly how many customers match your segment as you build it" },
            { name: "Channel filtering", desc: "Target customers who have WhatsApp, Instagram, or both" },
            { name: "Preview before send", desc: "See sample customer names before activating \u2014 no blind sends" },
        ],
    },
    {
        title: "Compose",
        subtitle: "Message Builder",
        description: "Write the message your customers will receive. Dynamic variables pull in real customer data. A/B test variants to find what resonates. Preview how it looks on a phone before sending.",
        icon: MessageSquare,
        color: "amber",
        features: [
            { name: "Variable personalization", desc: "{{customer.first_name}}, {{order.number}}, {{company}} \u2014 inserted at send time" },
            { name: "A/B message testing", desc: "Split audience across up to 5 weighted variants, compare performance" },
            { name: "WhatsApp phone preview", desc: "See your message rendered as a WhatsApp bubble before sending" },
            { name: "WhatsApp template management", desc: "Create, submit, and track Meta template approvals \u2014 no external tools" },
            { name: "Character counter", desc: "WhatsApp\u2019s 1,024 character limit enforced inline" },
        ],
    },
    {
        title: "Send",
        subtitle: "Delivery Engine",
        description: "Activate and Enorve handles the rest. Frequency caps prevent spam. Quiet hours respect timezones. Opt-out keywords are detected automatically. Retry logic handles transient failures.",
        icon: Send,
        color: "cyan",
        features: [
            { name: "Frequency capping", desc: "One campaign per customer per N days \u2014 no over-messaging" },
            { name: "Quiet hours", desc: "No messages between 9pm-8am in the customer\u2019s local timezone" },
            { name: "Automatic opt-out detection", desc: "STOP, UNSUBSCRIBE, END \u2014 keyword replies trigger permanent per-channel opt-out" },
            { name: "Exponential backoff", desc: "Respects provider rate limits with Retry-After headers and progressive delays" },
            { name: "Cold outbound via templates", desc: "Reach customers outside the 24-hour WhatsApp session window with approved templates" },
        ],
    },
    {
        title: "Measure",
        subtitle: "Campaign Analytics",
        description: "Track the full funnel: sent, delivered, read, replied. Per-variant breakdowns show which message won. Replies land in your unified inbox and trigger Protocol-powered AI responses.",
        icon: BarChart3,
        color: "violet",
        features: [
            { name: "Full delivery funnel", desc: "Sent \u2192 Delivered \u2192 Read \u2192 Replied \u2014 tracked per message via delivery receipts" },
            { name: "A/B variant comparison", desc: "Side-by-side metrics for each variant so you can pick the winner" },
            { name: "Reply \u2192 Conversation", desc: "Customer replies create conversations in your unified inbox automatically" },
            { name: "Protocol on reply", desc: "Attach a Protocol so AI handles inbound replies autonomously" },
            { name: "Opt-out tracking", desc: "Monitor opt-out rates per campaign to catch messaging fatigue early" },
        ],
    },
]

const differentiators = [
    { title: "Not Just Webchat", desc: "Most tools pop up messages on your website. Enorve reaches customers on WhatsApp and Instagram \u2014 where they actually are.", icon: Smartphone },
    { title: "AI Handles the Reply", desc: "Attach a Protocol and AI handles the inbound reply. No other campaign tool does this natively.", icon: GitBranch },
    { title: "Built-In Compliance", desc: "Opt-out detection, frequency caps, quiet hours, WhatsApp template approval \u2014 all native.", icon: Shield },
    { title: "No-Code for Ops Teams", desc: "5-step wizard. Operators build and activate campaigns without engineering involvement.", icon: Zap },
    { title: "A/B Testing Included", desc: "Split variants with weighted traffic. Compare sent, delivered, read, and replied per variant.", icon: Eye },
    { title: "Zero Spam Tolerance", desc: "Frequency caps, quiet hours, and opt-out gating run before every single send. Not optional.", icon: Ban },
]

export function Campaigns() {
    usePageTitle({
        title: "Proactive Campaigns \u2014 WhatsApp & Instagram Outbound",
        description: "Send targeted messages to customer segments on WhatsApp and Instagram. A/B test variants, respect quiet hours, and let AI handle replies with Protocol Engine."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.25),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <Send className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-400">Proactive Campaigns</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Reach customers where<br />
                            they actually are.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Send targeted messages to customer segments on WhatsApp and Instagram.
                            Not website popups. Not email blasts. Direct messages on the apps they
                            check 80 times a day.
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

                    {/* Campaign Builder Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-emerald-500/25 blur-[120px] -z-10" />

                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2 font-mono">New Campaign</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Draft</span>
                                    </div>
                                </div>

                                {/* Wizard Steps */}
                                <div className="px-5 py-3 border-b border-white/5 flex items-center gap-1">
                                    {["Basics", "Audience", "Message", "Rules", "Review"].map((s, i) => (
                                        <div key={s} className="flex items-center gap-1 flex-1">
                                            <div className={`flex items-center gap-1.5 px-2 py-1 text-[10px] font-medium rounded-md w-full justify-center ${
                                                i === 0 ? "bg-emerald-500/20 text-emerald-400" :
                                                i < 3 ? "bg-white/5 text-gray-500" : "bg-white/[0.02] text-gray-600"
                                            }`}>
                                                {i < 1 ? <CheckCircle className="w-3 h-3" /> : <span className="w-3 text-center">{i + 1}</span>}
                                                {s}
                                            </div>
                                            {i < 4 && <div className="w-2 h-px bg-white/10 shrink-0" />}
                                        </div>
                                    ))}
                                </div>

                                {/* Content */}
                                <div className="p-5 space-y-4">
                                    {/* Channel Cards */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center gap-2 p-3 rounded-lg border-2 border-emerald-500/40 bg-emerald-500/5">
                                            <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center">
                                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-white">WhatsApp</div>
                                                <div className="text-[9px] text-gray-500">2.4B active users</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                                            <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center">
                                                <Smartphone className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-gray-400">Instagram</div>
                                                <div className="text-[9px] text-gray-500">DM outreach</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Segment Preview */}
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                                        <Users className="w-3.5 h-3.5 text-gray-500" />
                                        <span className="text-[11px] text-gray-400"><span className="text-white font-medium">247</span> customers match this segment</span>
                                    </div>

                                    {/* WhatsApp Preview */}
                                    <div className="max-w-[200px] mx-auto">
                                        <div className="bg-[#DCF8C6]/10 border border-[#DCF8C6]/20 rounded-lg rounded-tr-none px-3 py-2 text-[11px] text-gray-300 leading-relaxed">
                                            Hi Sarah, your order #1042 has shipped! Track it here: track.enorve.com/1042
                                            <div className="text-[8px] text-right text-gray-600 mt-1">10:30 AM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Stat Strip */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: "Multi", label: "Channels in one flow", sub: "WhatsApp, Instagram, email" },
                        { value: "No-code", label: "Campaign builder", sub: "Drag, edit, publish" },
                        { value: "5", label: "A/B variants", sub: "Per campaign" },
                        { value: "0", label: "Messages during quiet hours", sub: "Timezone-aware" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
                        >
                            <div className="text-3xl font-semibold tracking-tight text-white">{stat.value}</div>
                            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            <div className="text-xs text-gray-600 mt-0.5">{stat.sub}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Phases: Target → Compose → Send → Measure */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        Four steps. No engineering.
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Build, target, send, and measure — all from a visual wizard that any ops team member can use.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {phases.map((phase, phaseIdx) => {
                        const colors = phaseColors[phase.color]
                        const Icon = phase.icon
                        const isReversed = phaseIdx % 2 === 1
                        return (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`grid lg:grid-cols-2 gap-12 items-start ${isReversed ? "" : ""}`}
                            >
                                <div className={isReversed ? "lg:order-2" : ""}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.iconBg} border ${colors.iconBorder} mb-4`}>
                                        <Icon className={`w-4 h-4 ${colors.text}`} />
                                        <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>{phase.title}</span>
                                    </div>
                                    <h3 className="text-3xl font-medium tracking-tight text-white mb-3">{phase.subtitle}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">{phase.description}</p>
                                </div>
                                <div className={isReversed ? "lg:order-1" : ""}>
                                    <div className="space-y-3">
                                        {phase.features.map((f, i) => (
                                            <motion.div
                                                key={f.name}
                                                initial={{ opacity: 0, x: isReversed ? -10 : 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                            >
                                                <CheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                                                <div>
                                                    <div className="text-sm font-medium text-white">{f.name}</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">{f.desc}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Differentiators */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        Why Enorve Campaigns
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {differentiators.map((d, i) => {
                        const Icon = d.icon
                        return (
                            <motion.div
                                key={d.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{d.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
                        <span className="text-gray-500">Stop waiting for customers to</span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">come to you.</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                        Reach your customers where they already are — WhatsApp, Instagram DMs,
                        or right inside the chat widget on your site. No downloads, no ads, no waiting.
                    </p>
                    <div className="flex justify-center gap-4">
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
            </section>
        </div>
    )
}
