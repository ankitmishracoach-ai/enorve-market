import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Zap, ArrowRight, Tag, AlertTriangle, CheckCircle, DollarSign,
    Shield, GitBranch, LayoutTemplate, BarChart3, Clock, Users,
    MessageSquare, TrendingUp, Play, Pause, Settings, Sparkles,
    ArrowUpRight, Workflow, Target, Bot, Bell, Route
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const capabilities = [
    {
        icon: Tag,
        title: "Auto-Tag Rules",
        subtitle: "Intelligent Categorization",
        color: "#1FA86F",
        features: [
            "Multi-condition matching on channels, intent, sentiment, keywords",
            "Add, remove, or replace tags automatically",
            "Performance tracking with trigger counts",
            "Visual condition builder interface"
        ]
    },
    {
        icon: AlertTriangle,
        title: "Auto-Escalation",
        subtitle: "Smart Human Handoff",
        color: "#D4C08A",
        features: [
            "Configurable confidence thresholds (50-90%)",
            "Real-time AI confidence evaluation",
            "Automatic routing to appropriate teams",
            "Prevents poor AI responses reaching customers"
        ]
    },
    {
        icon: CheckCircle,
        title: "AI Auto-Resolution",
        subtitle: "Automated Closure",
        color: "#10B981",
        features: [
            "Confidence threshold for auto-resolution",
            "Max AI attempts before human escalation",
            "Per-tenant configuration",
            "Inline configuration from hub"
        ]
    },
    {
        icon: DollarSign,
        title: "Revenue Attribution",
        subtitle: "Conversation-to-Order Tracking",
        color: "#3B82F6",
        features: [
            "Auto-link Shopify orders to conversations",
            "Revenue breakdown by agent and channel",
            "Daily revenue trends visualization",
            "Manual override when needed"
        ]
    },
    {
        icon: Shield,
        title: "Governance Policies",
        subtitle: "AI Safety Guardrails",
        color: "#EF4444",
        features: [
            "Three outcomes: Allow, Block, Require Approval",
            "Priority-based policy evaluation",
            "Complex condition builder on signals",
            "Visual indicators for policy outcomes"
        ]
    },
    {
        icon: GitBranch,
        title: "Visual Workflow Builder",
        subtitle: "No-Code Automation",
        color: "#EC4899",
        features: [
            "Drag-and-drop If-Then sequences",
            "Multiple triggers and condition steps",
            "Action library with 6+ action types",
            "Workflow duplication and history"
        ]
    }
]

const triggers = [
    { name: "New Conversation", desc: "When a new conversation starts", icon: MessageSquare },
    { name: "New Message", desc: "When a message is received", icon: Bell },
    { name: "SLA Breach", desc: "When SLA is about to or has breached", icon: Clock },
    { name: "Status Change", desc: "When conversation status changes", icon: ArrowUpRight }
]

const actions = [
    { name: "Auto-Reply", desc: "Send templated response with variables" },
    { name: "Route", desc: "Route to Sales, Support, Billing, or Technical" },
    { name: "Tag", desc: "Add multiple tags to conversation" },
    { name: "Priority", desc: "Set Low, Medium, High, or Urgent" },
    { name: "Escalate", desc: "Escalate with reason to team leads" },
    { name: "Notify", desc: "Send internal notification" }
]

const templates = [
    {
        name: "VIP Customer Routing",
        trigger: "New message from customer",
        condition: "Customer LTV > $1000",
        outcome: "→ Reduce VIP wait time by 40%",
        riskLevel: "Low",
        setupTime: "5 min"
    },
    {
        name: "SLA Escalation",
        trigger: "SLA breach (first response)",
        condition: "SLA breached",
        outcome: "→ Built to hit your SLA targets",
        riskLevel: "Low",
        setupTime: "3 min"
    },
    {
        name: "Sentiment-Based Escalation",
        trigger: "New customer message",
        condition: "Negative sentiment detected",
        outcome: "→ 60% reduction in escalated complaints",
        riskLevel: "Medium",
        setupTime: "5 min"
    }
]

const differentiators = [
    { title: "No-Code Visual Builder", desc: "Create complex automations without writing code", icon: GitBranch },
    { title: "Autonomous Signals", desc: "Leverage intent, sentiment, and confidence in rules", icon: Sparkles },
    { title: "Governance-First", desc: "Built-in safety guardrails for AI actions", icon: Shield },
    { title: "Template Library", desc: "Pre-built patterns with expected outcomes", icon: LayoutTemplate },
    { title: "Revenue Attribution", desc: "Tie conversations directly to revenue", icon: DollarSign },
    { title: "Human-in-Loop", desc: "Choose full automation or supervised automation", icon: Users }
]

export function Automation() {
    usePageTitle({
        title: "Automation - Workflows & Intelligent Routing",
        description: "Intelligent workflow automation for customer support. Route tickets, assign agents, and resolve common issues automatically with AI-powered workflows."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                            <Zap className="w-4 h-4 text-pink-400" />
                            <span className="text-sm text-pink-400">Automation Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Automate everything.<br />
                            Scale infinitely.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Visual workflow builder, AI-powered signals, governance guardrails, and revenue attribution.
                            Build sophisticated automations without writing a single line of code.
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

                    {/* Interactive Workflow Builder Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-pink-500/25 blur-[120px] -z-10" />

                            {/* Main Workflow Builder UI */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">Workflow Builder</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            <span className="text-[10px] text-green-400">Active</span>
                                        </div>
                                        <Settings className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>

                                {/* Workflow Canvas */}
                                <div className="p-6 relative min-h-[320px]">
                                    {/* Trigger Node */}
                                    <div className="absolute top-6 left-1/2 -translate-x-1/2">
                                        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 shadow-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                                    <Play className="w-5 h-5 text-pink-400" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-400">Trigger</div>
                                                    <div className="text-sm text-white font-medium">New Conversation</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Line */}
                                    <svg className="absolute left-1/2 top-[88px] -translate-x-1/2" width="2" height="40">
                                        <line x1="1" y1="0" x2="1" y2="40" stroke="#EC4899" strokeWidth="2" strokeDasharray="4 4" />
                                    </svg>

                                    {/* Condition Node */}
                                    <div className="absolute top-[130px] left-1/2 -translate-x-1/2">
                                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 shadow-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                                                    <Target className="w-5 h-5 text-amber-400" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-400">Condition</div>
                                                    <div className="text-sm text-white font-medium">LTV {">"} $1000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Branching Lines */}
                                    <svg className="absolute left-1/2 top-[208px] -translate-x-1/2" width="200" height="40" viewBox="0 0 200 40">
                                        <path d="M100 0 L100 20 L40 40" stroke="#EC4899" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                                        <path d="M100 0 L100 20 L160 40" stroke="#6B7280" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                                    </svg>

                                    {/* Action Nodes */}
                                    <div className="absolute bottom-6 left-[calc(50%-80px)] -translate-x-1/2">
                                        <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 shadow-lg">
                                            <div className="flex items-center gap-2">
                                                <Route className="w-4 h-4 text-green-400" />
                                                <div className="text-xs text-white">Route to VIP Team</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 right-[calc(50%-80px)] translate-x-1/2">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg opacity-50">
                                            <div className="flex items-center gap-2">
                                                <Bot className="w-4 h-4 text-gray-400" />
                                                <div className="text-xs text-gray-400">AI Handles</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* True/False Labels */}
                                    <div className="absolute bottom-[70px] left-[calc(50%-60px)] -translate-x-1/2">
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">True</span>
                                    </div>
                                    <div className="absolute bottom-[70px] right-[calc(50%-60px)] translate-x-1/2">
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">False</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">2,847</div>
                                        <div className="text-[10px] text-gray-400">Executions this week</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Template */}
                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <LayoutTemplate className="w-4 h-4 text-pink-400" />
                                    <span className="text-xs text-white">12 templates</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]"
                        >
                            Six powerful<br />automation engines
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 satisfies number }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            From auto-tagging to revenue attribution, each capability works together to eliminate manual work.
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-pink-500/30 transition-all duration-500"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: `${cap.color}20`, border: `1px solid ${cap.color}40` }}
                                >
                                    <cap.icon className="w-7 h-7" style={{ color: cap.color }} />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-medium text-white tracking-tight">{cap.title}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-4">{cap.subtitle}</p>
                                <ul className="space-y-2">
                                    {cap.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-xs text-gray-400">
                                            <CheckCircle className="w-3 h-3 text-pink-400 mt-0.5 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Workflow Builder Deep Dive */}
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
                            Visual Workflow Builder
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Build sophisticated If-Then automation sequences with a drag-and-drop interface. No code required.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Triggers */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                                    <Play className="w-5 h-5 text-pink-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white">Triggers</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Start your workflow when these events occur:</p>
                            <div className="space-y-3">
                                {triggers.map((trigger) => (
                                    <div key={trigger.name} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-pink-500/20 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
                                            <trigger.icon className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">{trigger.name}</h4>
                                            <p className="text-gray-400 text-xs">{trigger.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-xl font-medium text-white">Actions</h3>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">Execute these actions when conditions match:</p>
                            <div className="grid grid-cols-2 gap-3">
                                {actions.map((action) => (
                                    <div key={action.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/20 transition-colors">
                                        <h4 className="text-white font-medium text-sm mb-1">{action.name}</h4>
                                        <p className="text-gray-400 text-xs">{action.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workflow Templates */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                            >
                                Pre-built Templates
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-lg text-gray-400 max-w-xl"
                            >
                                Start with pre-built patterns and customize for your needs. Each template shows expected outcomes.
                            </motion.p>
                        </div>
                        <Button variant="secondary" size="lg">
                            View all templates
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {templates.map((template, index) => (
                            <motion.div
                                key={template.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-pink-500/30 transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center">
                                        <Workflow className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400">{template.setupTime}</span>
                                        <span className={`text-[10px] px-2 py-1 rounded ${template.riskLevel === 'Low' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                            {template.riskLevel} risk
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-4">{template.name}</h3>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <Play className="w-3 h-3 text-pink-400 mt-1" />
                                        <div>
                                            <div className="text-[10px] text-gray-400">Trigger</div>
                                            <div className="text-xs text-gray-300">{template.trigger}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Target className="w-3 h-3 text-amber-400 mt-1" />
                                        <div>
                                            <div className="text-[10px] text-gray-400">Condition</div>
                                            <div className="text-xs text-gray-300">{template.condition}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                                    <div className="text-sm text-green-400 font-medium">{template.outcome}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Policies Deep Dive */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                                <Shield className="w-3 h-3 text-red-400" />
                                <span className="text-xs text-red-400 font-medium">AI Safety Guardrails</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Governance<br />
                                <span className="text-gray-400">Policies</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Define rules that control when AI actions should be allowed, blocked, or require human approval. Built-in safety for enterprise deployments.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { color: "#10B981", title: "Allow", desc: "Action proceeds automatically when conditions are met" },
                                    { color: "#EF4444", title: "Block", desc: "Action prevented from executing, logged for review" },
                                    { color: "#D4C08A", title: "Require Approval", desc: "Human approval needed before action executes" }
                                ].map((policy) => (
                                    <div key={policy.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${policy.color}20` }}
                                        >
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: policy.color }} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{policy.title}</h4>
                                            <p className="text-gray-400 text-xs">{policy.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Policy Builder Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Policy Builder</h3>
                                <span className="text-[10px] px-2 py-1 rounded bg-green-500/10 text-green-400">Active</span>
                            </div>

                            <div className="space-y-4">
                                {/* Condition */}
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="text-xs text-gray-400 mb-2">Condition</div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400">signals.confidence</span>
                                        <span className="text-xs text-gray-400">{"<"}</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/10 text-white">0.6</span>
                                        <span className="text-xs text-gray-400">AND</span>
                                        <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400">context.customer_ltv</span>
                                        <span className="text-xs text-gray-400">{">"}</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/10 text-white">$1000</span>
                                    </div>
                                </div>

                                {/* Outcome */}
                                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                    <div className="text-xs text-gray-400 mb-2">Outcome</div>
                                    <div className="flex items-center gap-2">
                                        <Pause className="w-4 h-4 text-amber-400" />
                                        <span className="text-sm text-amber-400 font-medium">Require Approval</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">High-value customers with low AI confidence require human review</p>
                                </div>

                                {/* Priority */}
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div>
                                        <div className="text-xs text-gray-400">Priority</div>
                                        <div className="text-sm text-white">10 (High)</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Evaluations</div>
                                        <div className="text-sm text-white">1,247 this week</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Triggered</div>
                                        <div className="text-sm text-amber-400">89 approvals</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Analytics Dashboard Preview */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            Automation Analytics
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Measure the impact of your automations with detailed performance insights.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative grid md:grid-cols-4 gap-6"
                    >
                        <span className="absolute -top-3 right-0 text-[9px] font-semibold uppercase tracking-wider text-white/20 bg-white/5 px-2 py-0.5 rounded-full z-10">Sample data — illustrative only</span>
                        {[
                            { label: "Total Workflows", value: "24", trend: "+3 this week" },
                            { label: "Active Workflows", value: "18", trend: "75% active" },
                            { label: "Total Executions", value: "12.4K", trend: "+23% vs last week" },
                            { label: "Revenue Attributed", value: "$847K", trend: "This month" }
                        ].map((stat, i) => (
                            <div key={stat.label} className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5">
                                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-pink-400">{stat.trend}</div>
                            </div>
                        ))}
                    </motion.div>
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
                            Why Enorve Automation?
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-pink-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-7 h-7 text-pink-400" />
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
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Ready to automate your support?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and build your first workflow in minutes.
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

