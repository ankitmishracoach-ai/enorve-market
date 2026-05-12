import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Code2, ArrowRight, Brain, BookOpen, AlertTriangle, Shield,
    MessageSquare, CheckCircle, TrendingUp, Users, Zap, Clock,
    Sparkles, FileText, Globe, Lock, History, Target, Layers,
    GitBranch, Server, Settings, UserCheck, BarChart3
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const painPoints = [
    { icon: MessageSquare, text: "Long, complex conversations", color: "#1FA86F" },
    { icon: Users, text: "Trial users asking the same questions", color: "#D4C08A" },
    { icon: FileText, text: "Knowledge scattered across docs", color: "#3B82F6" },
    { icon: GitBranch, text: "Escalations between support and engineering", color: "#EF4444" }
]

const solutions = [
    {
        number: "01",
        title: "AI understands long, technical conversations",
        feature: "AI Copilot (Context Mode)",
        color: "#1FA86F",
        icon: Brain,
        capabilities: [
            "Conversation summaries for quick context",
            "Intent detection across complex threads",
            "Sentiment tracking throughout the journey"
        ],
        impact: "Agents ramp faster, fewer handoffs"
    },
    {
        number: "02",
        title: "Knowledge-powered answers at scale",
        feature: "Knowledge Base + Website Crawler",
        color: "#3B82F6",
        icon: BookOpen,
        capabilities: [
            "Docs, FAQs, uploaded files in one place",
            "AI-powered semantic search",
            "Freshness tracking and conflict detection"
        ],
        impact: "Consistent answers, less tribal knowledge"
    },
    {
        number: "03",
        title: "Escalate only when it truly matters",
        feature: "AI Auto-Escalation",
        color: "#D4C08A",
        icon: AlertTriangle,
        capabilities: [
            "Low confidence detection triggers handoff",
            "Negative sentiment escalation rules",
            "Manual override for edge cases"
        ],
        impact: "Engineers are involved only when needed"
    },
    {
        number: "04",
        title: "Built for growing teams and compliance",
        feature: "Role-Based Access, Audit Logs, SLA Management",
        color: "#10B981",
        icon: Shield,
        capabilities: [
            "Granular permission control",
            "Complete action history and audit trail",
            "SLA tracking with breach alerts"
        ],
        impact: "Enterprise-ready without enterprise complexity"
    }
]

const outcomes = [
    { icon: Zap, title: "Faster onboarding support", value: "—", desc: "AI replies grounded in your docs" },
    { icon: TrendingUp, title: "Lower churn risk", value: "—", desc: "earlier intervention on at-risk accounts" },
    { icon: Layers, title: "Scalable operations", value: "—", desc: "AI handles routine tickets" }
]

const enterpriseFeatures = [
    { icon: Lock, title: "Role-Based Access", desc: "Control who sees and does what" },
    { icon: History, title: "Audit Logs", desc: "Complete action history for compliance" },
    { icon: Clock, title: "SLA Management", desc: "Track and alert on response times" },
    { icon: Shield, title: "Industry-Standard Security", desc: "Security practices you can trust" }
]

export function SaaS() {
    usePageTitle({
        title: "SaaS Companies - Technical Support at Scale",
        description: "Technical support software for SaaS companies. Scale customer success with AI, knowledge bases, and integrations built for fast-growing products."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(31, 168, 111,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                            <Code2 className="w-4 h-4 text-violet-400" />
                            <span className="text-sm text-violet-400">For SaaS Companies</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Scale support.<br />
                            Not headcount.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Support users across trials, onboarding, and production. AI that understands technical conversations and knowledge that stays fresh.
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

                    {/* SaaS Support Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-violet-500/25 blur-[120px] -z-10" />

                            {/* Main UI Mockup */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">Technical Support</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-1 rounded bg-violet-500/10 border border-violet-500/20">
                                            <span className="text-[10px] text-violet-400">Context Mode Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Conversation with AI Summary */}
                                <div className="p-4">
                                    {/* AI Summary Panel */}
                                    <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20 mb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Sparkles className="w-4 h-4 text-violet-400" />
                                            <span className="text-xs font-medium text-violet-400">AI Conversation Summary</span>
                                            <span className="text-[10px] text-gray-400 ml-auto">12 messages • 2h 15m</span>
                                        </div>
                                        <p className="text-xs text-gray-300 leading-relaxed mb-3">
                                            Customer experiencing API rate limiting on the /v2/users endpoint. They're on the Pro plan (1000 req/min). Logs show 1247 requests in the last minute. Suggested implementing exponential backoff.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">api_issue</span>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">rate_limiting</span>
                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">Pro plan</span>
                                        </div>
                                    </div>

                                    {/* Recent Messages */}
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">DK</div>
                                            <div className="flex-1">
                                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <p className="text-xs text-gray-300">I've implemented the backoff but still hitting limits. Can we temporarily increase my rate limit?</p>
                                                </div>
                                                <div className="flex gap-2 mt-1">
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400">95% confidence</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Suggested Response */}
                                        <div className="p-3 rounded-lg bg-white/[0.02] border border-dashed border-violet-500/30">
                                            <div className="flex items-center gap-1.5 mb-2">
                                                <Brain className="w-3 h-3 text-violet-400" />
                                                <span className="text-[10px] text-violet-400 font-medium">Suggested Response</span>
                                            </div>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                "I can request a temporary rate limit increase for your account. For Pro plans, we can bump to 2000 req/min for 7 days. Want me to proceed?"
                                            </p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="px-3 py-1 rounded bg-violet-500 text-[10px] text-white font-medium">Use</button>
                                                <button className="px-3 py-1 rounded bg-white/5 text-[10px] text-gray-400">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* KB Match */}
                                <div className="px-4 pb-4">
                                    <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="w-3 h-3 text-blue-400" />
                                            <span className="text-[10px] text-blue-400">KB Match: Rate Limiting Guide v2.1</span>
                                            <CheckCircle className="w-3 h-3 text-green-400 ml-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <Brain className="w-4 h-4 text-violet-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">Context Mode</div>
                                        <div className="text-[10px] text-gray-400">12 msg summarized</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <Target className="w-4 h-4 text-green-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">95%</div>
                                        <div className="text-[10px] text-gray-400">Confidence</div>
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
                            SaaS support is different
                        </h2>
                        <p className="text-lg text-gray-400">Unique challenges that require specialized solutions</p>
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
                            Built for SaaS complexity
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            AI that understands technical context, knowledge that stays current, and controls you can trust
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
                                className="group p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-violet-500/30 transition-all duration-500"
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

            {/* Knowledge Base Deep Dive */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <BookOpen className="w-3 h-3 text-blue-400" />
                                <span className="text-xs text-blue-400 font-medium">Knowledge Base</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Docs that<br />
                                <span className="text-gray-400">power AI</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Import from your existing docs, help center, or upload directly. AI uses verified knowledge to answer questions accurately.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Globe, title: "Website Crawler", desc: "Import from existing docs and help centers automatically" },
                                    { icon: FileText, title: "File Uploads", desc: "PDF, DOC, TXT files with automatic chunking" },
                                    { icon: Sparkles, title: "AI Search", desc: "Semantic search finds relevant content, not just keywords" }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* KB Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Knowledge Sources</h3>
                                <span className="text-xs text-green-400">3 active sources</span>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: "API Documentation", type: "Website Crawler", articles: 47, status: "Synced", icon: Globe },
                                    { name: "Product Guide", type: "PDF Upload", articles: 12, status: "Synced", icon: FileText },
                                    { name: "FAQ Database", type: "Manual Entry", articles: 89, status: "Synced", icon: MessageSquare }
                                ].map((source) => (
                                    <div key={source.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                                <source.icon className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-white font-medium">{source.name}</span>
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">{source.status}</span>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[10px] text-gray-400">{source.type}</span>
                                                    <span className="text-[10px] text-gray-400">•</span>
                                                    <span className="text-[10px] text-gray-400">{source.articles} articles</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 p-4 rounded-xl bg-violet-500/5 border border-violet-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-4 h-4 text-violet-400" />
                                    <span className="text-xs text-violet-400 font-medium">AI-Native</span>
                                </div>
                                <p className="text-xs text-gray-400">148 articles indexed with semantic embeddings. Average retrieval confidence: 94%</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Enterprise Features */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Shield className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium">Enterprise Ready</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            Controls you can trust
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Role-based access, complete audit trails, and SLA management without the complexity
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {enterpriseFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                            <TrendingUp className="w-3 h-3 text-violet-400" />
                            <span className="text-xs text-violet-400 font-medium">Proven Results</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Outcomes that matter
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-violet-500/30 transition-all duration-500 text-center"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <outcome.icon className="w-10 h-10 text-violet-400" />
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{outcome.value}</div>
                                <div className="text-sm text-gray-400 mb-4">{outcome.desc}</div>
                                <h3 className="text-xl font-medium text-white">{outcome.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* User Journey */}
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
                            Support at every stage
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { stage: "Trial", icon: Users, desc: "AI answers common questions instantly, converts more trials to paid", color: "#1FA86F" },
                            { stage: "Onboarding", icon: Zap, desc: "Context Mode summarizes setup progress, accelerates time-to-value", color: "#3B82F6" },
                            { stage: "Production", icon: Server, desc: "Technical issues resolved faster with KB-powered AI assistance", color: "#10B981" }
                        ].map((item, i) => (
                            <div key={item.stage} className="relative">
                                <div className="p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 h-full">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                                    >
                                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.stage}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-gray-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
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
                            Build scalable SaaS support
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and see how AI can transform your technical support.
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

