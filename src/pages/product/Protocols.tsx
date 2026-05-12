import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    ArrowRight, GitBranch, Shield, Eye, Play, Wrench,
    BarChart3, AlertTriangle, CheckCircle, Bot, Target,
    Workflow, Lock, Sparkles, Zap, RefreshCw
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const phaseColors = {
    cyan: {
        iconBg: "bg-cyan-500/10",
        iconBorder: "border-cyan-500/20",
        text: "text-cyan-400",
        checkText: "text-cyan-400",
        dotBg: "bg-cyan-400",
    },
    amber: {
        iconBg: "bg-amber-500/10",
        iconBorder: "border-amber-500/20",
        text: "text-amber-400",
        checkText: "text-amber-400",
        dotBg: "bg-amber-400",
    },
    emerald: {
        iconBg: "bg-emerald-500/10",
        iconBorder: "border-emerald-500/20",
        text: "text-emerald-400",
        checkText: "text-emerald-400",
        dotBg: "bg-emerald-400",
    },
    violet: {
        iconBg: "bg-violet-500/10",
        iconBorder: "border-violet-500/20",
        text: "text-violet-400",
        checkText: "text-violet-400",
        dotBg: "bg-violet-400",
    },
} as const

type PhaseColor = keyof typeof phaseColors

const phases: {
    title: string
    subtitle: string
    description: string
    icon: typeof GitBranch
    color: PhaseColor
    features: { name: string; desc: string }[]
}[] = [
    {
        title: "Design",
        subtitle: "Visual Protocol Builder",
        description: "Build AI conversation flows the way you'd draw them on a whiteboard. Define what happens at every step — greet, classify, branch, call an API, escalate — without writing a single line of code.",
        icon: GitBranch,
        color: "cyan",
        features: [
            { name: "Drag-and-drop steps", desc: "Build multi-step conversation flows with conditions, branches, and tool calls" },
            { name: "Goal & guardrail definition", desc: "Define what success looks like and what the AI must never do" },
            { name: "Confidence thresholds", desc: "Set per-step escalation rules based on AI confidence scores" },
            { name: "Template variables", desc: "Dynamic content with {{customer.name}}, {{order.id}}, and custom fields" },
            { name: "Draft & publish workflow", desc: "Edit safely in draft mode, publish when ready — zero downtime" }
        ]
    },
    {
        title: "Test",
        subtitle: "Adversarial Simulator",
        description: "Before your protocol goes live, three AI personas try to break it. They demand refunds outside policy, go off-topic, and push for exceptions — so you can fix problems before real customers find them.",
        icon: Shield,
        color: "amber",
        features: [
            { name: "3 built-in adversarial personas", desc: "Angry Refunder, Off-Topic Wanderer, Policy Pusher — stress-test before launch" },
            { name: "Safety audit report", desc: "Guardrail breaches, tool hallucinations, and goal completion scored automatically" },
            { name: "Batch simulation", desc: "Run all personas in parallel, get a composite health score (green/amber/red)" },
            { name: "Session replay", desc: "Click into any simulation turn to see exactly what the AI decided and why" },
            { name: "100-second wall clock guard", desc: "Circuit breaker prevents runaway conversations during testing" }
        ]
    },
    {
        title: "Deploy",
        subtitle: "Production Runtime",
        description: "Publish your protocol and it starts handling matching conversations immediately. Routing rules decide which protocol fires based on intent, channel, or tags — with human-in-the-loop for sensitive actions.",
        icon: Play,
        color: "emerald",
        features: [
            { name: "Live protocol activation", desc: "One-click publish routes matching conversations through your protocol" },
            { name: "Human-in-the-loop branching", desc: "Protocol tools can require agent confirmation before executing actions" },
            { name: "Routing engine integration", desc: "Protocols fire based on intent, channel, tags, and custom conditions" },
            { name: "Cross-conversation memory", desc: "AI remembers customer facts and preferences across sessions" },
            { name: "Graceful fallback", desc: "If a protocol step fails, the AI falls back to knowledge-base mode — never hallucinates" }
        ]
    },
    {
        title: "Observe",
        subtitle: "Protocol Analytics",
        description: "Track how every protocol performs in production. Health scores, turn distributions, termination breakdowns — everything you need to know whether your AI is doing its job.",
        icon: BarChart3,
        color: "violet",
        features: [
            { name: "Health score dashboard", desc: "No-breach rate, goal completion, hallucination rate — weighted composite" },
            { name: "Turn histogram", desc: "See how many turns conversations take, colored by goal completion" },
            { name: "Termination breakdown", desc: "How protocols end: resolved, escalated, timed out, abandoned" },
            { name: "Live vs simulation split", desc: "Compare test performance against real production conversations" },
            { name: "Progress event stream", desc: "Every protocol decision logged for compliance and debugging" }
        ]
    }
]

const toolTypes = [
    { name: "Webhook Tools", desc: "Call any external API — Shopify refunds, CRM updates, inventory checks", icon: Wrench, color: "#3B82F6" },
    { name: "SSRF Protection", desc: "Built-in safeguards block internal network calls and validate endpoints", icon: Lock, color: "#EF4444" },
    { name: "Auth Injection", desc: "API keys and bearer tokens injected securely — never exposed to AI", icon: Shield, color: "#10B981" },
    { name: "HITL Gating", desc: "Mark any tool as requiring human approval before execution", icon: Eye, color: "#D4C08A" },
    { name: "Timeout & Retry", desc: "Configurable timeouts with automatic retry on transient failures", icon: RefreshCw, color: "#1FA86F" },
    { name: "Audit Trail", desc: "Every tool call logged with input, output, latency, and approval chain", icon: BarChart3, color: "#EC4899" }
]

const differentiators = [
    { title: "Visual, Not YAML", desc: "Design protocols in a drag-and-drop builder — no configuration files", icon: GitBranch },
    { title: "Test Before You Ship", desc: "Adversarial personas find edge cases before your customers do", icon: Shield },
    { title: "Protocol Tools", desc: "Connect real APIs with built-in SSRF protection and auth injection", icon: Wrench },
    { title: "Observable by Default", desc: "Every decision logged, scored, and queryable — not a black box", icon: Eye },
    { title: "Governed Autonomy", desc: "AI acts within your guardrails — escalates when it should, not when it panics", icon: Target },
    { title: "Memory-Aware", desc: "Protocols access cross-conversation customer memory for context-rich responses", icon: Sparkles }
]

export function Protocols() {
    usePageTitle({
        title: "Protocol Engine - Visual AI Workflow Builder",
        description: "Design, test, and deploy AI conversation protocols with a visual builder. Adversarial simulation, protocol tools, and real-time observability built in."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <Workflow className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Protocol Engine</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Design how your AI<br />
                            handles every scenario.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Visual conversation protocols. Adversarial stress-testing. Real API integrations.
                            Define exactly how AI handles refunds, complaints, and edge cases — then prove it works before going live.
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

                    {/* Protocol Builder Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-cyan-500/25 blur-[120px] -z-10" />

                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2 font-mono">Refund Protocol v3</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Published</span>
                                    </div>
                                </div>

                                {/* Flow */}
                                <div className="p-6 space-y-4">
                                    {/* Step 1 */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                            <Bot className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
                                            <span className="text-xs text-white font-medium">Greet & classify intent</span>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex items-center gap-2 ml-4">
                                        <div className="w-px h-6 bg-white/10" />
                                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    </div>

                                    {/* Step 2 - Branch */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                                        </div>
                                        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2">
                                            <span className="text-xs text-white font-medium">Check: Order within return window?</span>
                                        </div>
                                    </div>

                                    {/* Branch outputs */}
                                    <div className="flex flex-wrap gap-3 ml-8">
                                        <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/10 rounded-lg px-3 py-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                            <span className="text-[11px] text-emerald-400 font-medium whitespace-nowrap">Yes: Call refund API</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
                                            <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                                            <span className="text-[11px] text-red-400 font-medium whitespace-nowrap">No: Escalate to agent</span>
                                        </div>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex items-center gap-2 ml-4">
                                        <div className="w-px h-4 bg-white/10" />
                                    </div>

                                    {/* Step 3 - Tool call */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                            <Wrench className="w-4 h-4 text-violet-400" />
                                        </div>
                                        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
                                            <span className="text-xs text-white font-medium">Execute: shopify_refund_order</span>
                                            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">HITL</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Health Score */}
                                <div className="border-t border-white/5 px-5 py-3 flex items-center justify-between bg-white/[0.01]">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] text-gray-400">Health: 92/100</span>
                                        </div>
                                        <span className="text-[10px] text-gray-600">3 personas passed</span>
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-mono">Last tested 2h ago</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design → Test → Deploy → Observe */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Design. Test. Deploy. Observe.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Four phases. One workflow. Zero guesswork about how your AI behaves.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {phases.map((phase, phaseIdx) => {
                        const colors = phaseColors[phase.color]
                        return (
                            <motion.div
                                key={phase.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-white/[0.06] bg-[#0C0E12] p-8 md:p-10"
                            >
                                {/* Phase header */}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} ${colors.iconBorder} border flex items-center justify-center`}>
                                        <phase.icon className={`w-5 h-5 ${colors.text}`} />
                                    </div>
                                    <div>
                                        <div className={`text-xs ${colors.text} uppercase tracking-wider font-medium`}>Phase {phaseIdx + 1}</div>
                                        <h3 className="text-2xl font-medium text-white tracking-tight">{phase.title}</h3>
                                    </div>
                                </div>
                                <p className={`text-sm ${colors.text} font-medium mb-2`}>{phase.subtitle}</p>
                                <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">{phase.description}</p>

                                {/* Features grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {phase.features.map((feature) => (
                                        <div key={feature.name} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                            <CheckCircle className={`w-5 h-5 ${colors.checkText} mt-0.5 flex-shrink-0`} />
                                            <div>
                                                <div className="text-sm font-medium text-white mb-0.5">{feature.name}</div>
                                                <div className="text-xs text-gray-500">{feature.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Protocol Tools */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Protocol Tools
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Give your AI real capabilities — refund orders, update CRMs, check inventory — with enterprise-grade security built in.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolTypes.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                                style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                            >
                                <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">{tool.name}</h3>
                            <p className="text-sm text-gray-500">{tool.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Adversarial Simulator Deep Dive */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <Shield className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-xs text-amber-400 font-medium">Adversarial Testing</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Break your protocols<br />before customers do.
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Three adversarial personas probe your protocol for guardrail breaches, hallucinations, and goal failures.
                            Every simulation generates an audit report with actionable findings.
                        </p>

                        <div className="space-y-4">
                            {[
                                { name: "Angry Refunder", desc: "Demands escalation, threatens chargeback, tests policy boundaries", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
                                { name: "Off-Topic Wanderer", desc: "Tries to derail conversation into unrelated topics", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
                                { name: "Policy Pusher", desc: "Probes for exceptions, asks AI to bend rules, tests guardrails", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" }
                            ].map((persona) => (
                                <div key={persona.name} className={`flex items-start gap-3 p-4 rounded-xl border ${persona.bg}`}>
                                    <Bot className={`w-5 h-5 ${persona.color} mt-0.5`} />
                                    <div>
                                        <div className={`text-sm font-medium ${persona.color}`}>{persona.name}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{persona.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Audit Report Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0C0E12] shadow-2xl">
                            <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                                <span className="text-xs text-gray-400 font-mono">Audit Report — Refund Protocol v3</span>
                                <span className="text-[10px] text-gray-600">3 personas / 47 turns</span>
                            </div>
                            <div className="p-6 space-y-4">
                                {/* Health Score */}
                                <div className="text-center p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                    <div className="text-4xl font-bold text-emerald-400 mb-1">92</div>
                                    <div className="text-xs text-gray-500">Health Score</div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                                        <div className="text-lg font-semibold text-emerald-400">0</div>
                                        <div className="text-[10px] text-gray-500">Guardrail Breaches</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                                        <div className="text-lg font-semibold text-emerald-400">3/3</div>
                                        <div className="text-[10px] text-gray-500">Goals Met</div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                                        <div className="text-lg font-semibold text-emerald-400">0</div>
                                        <div className="text-[10px] text-gray-500">Hallucinations</div>
                                    </div>
                                </div>

                                {/* Findings */}
                                <div className="space-y-2">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Findings</div>
                                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                        <span className="text-xs text-gray-300">Angry Refunder: Correctly escalated after 2nd refusal</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                        <span className="text-xs text-gray-300">Off-Topic Wanderer: Successfully redirected 4/4 derails</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                                        <span className="text-xs text-gray-300">Policy Pusher: No policy exceptions granted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Protocols */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Why Protocol Engine
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The difference between AI that sometimes works and AI you can trust in production.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                                <item.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Stop hoping your AI behaves.<br />Start proving it.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Protocol Engine gives you the confidence to let AI handle real customer conversations — because you've already tested every edge case.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
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
