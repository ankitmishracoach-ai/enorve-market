import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    Rocket, ArrowRight, Bot, AlertTriangle, Zap, BarChart3,
    MessageSquare, CheckCircle, TrendingUp, Clock, Bell, Users,
    Sparkles, Target, Brain, Settings, HelpCircle, Lightbulb,
    Coffee, Heart, DollarSign, Play
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const painPoints = [
    { icon: Bell, text: "Constant interruptions from customers", color: "#EF4444" },
    { icon: MessageSquare, text: "No time to answer repetitive questions", color: "#D4C08A" },
    { icon: DollarSign, text: "Expensive or complex tools", color: "#1FA86F" },
    { icon: AlertTriangle, text: "Fear of missing important issues", color: "#3B82F6" }
]

const solutions = [
    {
        number: "01",
        title: "AI answers routine questions automatically",
        feature: "AI Chat + AI Auto-Resolution",
        color: "#10B981",
        icon: Bot,
        capabilities: [
            "FAQs answered instantly",
            "Pricing questions handled automatically",
            "Basic troubleshooting with KB guidance"
        ],
        impact: "Fewer interruptions, faster replies"
    },
    {
        number: "02",
        title: "Humans step in only when needed",
        feature: "AI Auto-Escalation",
        color: "#D4C08A",
        icon: AlertTriangle,
        capabilities: [
            "Confidence thresholds trigger handoff",
            "Keyword and sentiment triggers",
            "Important issues never get missed"
        ],
        impact: "Focus only on high-impact conversations"
    },
    {
        number: "03",
        title: "Simple automation without setup overhead",
        feature: "Workflow Automation (Templates)",
        color: "#1FA86F",
        icon: Zap,
        capabilities: [
            "Pre-built auto-reply templates",
            "Smart routing by topic",
            "Automatic tagging by intent"
        ],
        impact: "Automation without complexity"
    },
    {
        number: "04",
        title: "See what customers actually ask",
        feature: "Analytics Dashboard + Knowledge Gaps",
        color: "#3B82F6",
        icon: BarChart3,
        capabilities: [
            "Top questions visualized",
            "Unanswered queries highlighted",
            "AI vs human split breakdown"
        ],
        impact: "Better product and docs decisions"
    }
]

const outcomes = [
    { icon: Coffee, title: "Fewer interruptions, more focus", value: "—", desc: "AI handles support while you build" },
    { icon: Clock, title: "Faster customer replies", value: "—", desc: "instant AI responses, 24/7" },
    { icon: Users, title: "No early support hires", value: "—", desc: "scale without headcount" }
]

export function Founders() {
    usePageTitle({
        title: "For Founders - AI Support Without a Team",
        description: "AI-powered customer support for solo founders and small teams. Deliver enterprise-quality support without hiring, using intelligent automation."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                            <Rocket className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-orange-400">For Founders & Small Teams</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Support customers.<br />
                            Stay focused.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Professional customer support without hiring a team. AI handles the routine while you focus on building your product.
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

                    {/* Founder Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-orange-500/25 blur-[120px] -z-10" />

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
                                        <span className="text-xs text-gray-400 ml-3">Your Support Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20">
                                            <span className="text-[10px] text-green-400">AI Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-3 gap-3 p-4 border-b border-white/5">
                                    <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                                        <div className="text-2xl font-bold text-green-400">12</div>
                                        <div className="text-[10px] text-gray-400">AI Resolved</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                                        <div className="text-2xl font-bold text-amber-400">2</div>
                                        <div className="text-[10px] text-gray-400">Need You</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-white/[0.02]">
                                        <div className="text-2xl font-bold text-white">85%</div>
                                        <div className="text-[10px] text-gray-400">Auto-Resolved</div>
                                    </div>
                                </div>

                                {/* Activity Feed */}
                                <div className="p-4">
                                    <div className="text-xs text-gray-400 mb-3">Today's Activity</div>
                                    <div className="space-y-2">
                                        {[
                                            { icon: Bot, text: "AI resolved: 'How do I reset my password?'", time: "2m ago", color: "#10B981" },
                                            { icon: Bot, text: "AI resolved: 'What's your pricing?'", time: "15m ago", color: "#10B981" },
                                            { icon: AlertTriangle, text: "Escalated: 'Custom enterprise pricing'", time: "1h ago", color: "#D4C08A" },
                                            { icon: Bot, text: "AI resolved: 'How to integrate API?'", time: "2h ago", color: "#10B981" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                                <div
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                    style={{ backgroundColor: `${item.color}20` }}
                                                >
                                                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs text-gray-300">{item.text}</p>
                                                </div>
                                                <span className="text-[10px] text-gray-400">{item.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Required */}
                                <div className="px-4 pb-4">
                                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4 text-amber-400" />
                                                <span className="text-xs text-amber-400 font-medium">1 conversation needs you</span>
                                            </div>
                                            <button className="px-3 py-1 rounded bg-amber-500 text-[10px] text-white font-medium">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <Bot className="w-4 h-4 text-green-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">85%</div>
                                        <div className="text-[10px] text-gray-400">Handled by AI</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <Coffee className="w-4 h-4 text-orange-400" />
                                    <div>
                                        <div className="text-xs text-white font-medium">Focus time</div>
                                        <div className="text-[10px] text-gray-400">Protected</div>
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
                        <p className="text-lg text-gray-400">The founder's support dilemma</p>
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
                            AI-first, founder-friendly
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Get the power of a support team without the complexity or cost
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
                                className="group p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-orange-500/30 transition-all duration-500"
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

            {/* How It Works */}
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
                            Your day with Enorve
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400"
                        >
                            See how AI protects your focus time
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {/* Without Enorve */}
                        <div className="p-8 rounded-[32px] bg-[#0C0E12] border border-red-500/20">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white">Without Enorve</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { time: "9:00 AM", event: "Start coding", status: "interrupted" },
                                    { time: "9:15 AM", event: "Customer asks about pricing", status: "interrupted" },
                                    { time: "9:45 AM", event: "Back to coding...", status: "interrupted" },
                                    { time: "10:00 AM", event: "Another password reset request", status: "interrupted" },
                                    { time: "10:30 AM", event: "Still stuck answering FAQs", status: "interrupted" },
                                    { time: "12:00 PM", event: "0 features shipped", status: "failed" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-[10px] text-gray-400 w-16">{item.time}</span>
                                        <div className="flex-1 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                                            <p className="text-xs text-gray-400">{item.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* With Enorve */}
                        <div className="p-8 rounded-[32px] bg-[#0C0E12] border border-green-500/20">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white">With Enorve</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { time: "9:00 AM", event: "Start coding", status: "success" },
                                    { time: "9:15 AM", event: "AI answers pricing question", status: "auto" },
                                    { time: "10:00 AM", event: "AI resolves password reset", status: "auto" },
                                    { time: "11:00 AM", event: "1 notification: Enterprise inquiry (important)", status: "escalated" },
                                    { time: "11:15 AM", event: "Quick reply to enterprise lead", status: "success" },
                                    { time: "12:00 PM", event: "Feature shipped! 🚀", status: "success" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-[10px] text-gray-400 w-16">{item.time}</span>
                                        <div className={`flex-1 p-3 rounded-lg ${item.status === 'auto' ? 'bg-green-500/5 border border-green-500/10' : item.status === 'escalated' ? 'bg-amber-500/5 border border-amber-500/10' : 'bg-white/[0.02] border border-white/5'}`}>
                                            <div className="flex items-center gap-2">
                                                {item.status === 'auto' && <Bot className="w-3 h-3 text-green-400" />}
                                                {item.status === 'escalated' && <AlertTriangle className="w-3 h-3 text-amber-400" />}
                                                <p className="text-xs text-gray-300">{item.event}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Analytics Preview */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <BarChart3 className="w-3 h-3 text-blue-400" />
                                <span className="text-xs text-blue-400 font-medium">Analytics</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Know what<br />
                                <span className="text-gray-400">customers want</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                See what questions customers ask most. Find gaps in your docs. Make better product decisions with real data.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: HelpCircle, title: "Top Questions", desc: "See what customers ask most often" },
                                    { icon: Lightbulb, title: "Knowledge Gaps", desc: "Find what's missing from your docs" },
                                    { icon: TrendingUp, title: "AI Performance", desc: "Track auto-resolution rates over time" }
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

                        {/* Analytics Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Top Questions This Week</h3>
                                <span className="text-xs text-gray-400">47 total</span>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { question: "How do I reset my password?", count: 12, handled: "AI", percent: 100 },
                                    { question: "What's your pricing?", count: 8, handled: "AI", percent: 100 },
                                    { question: "How to integrate the API?", count: 6, handled: "AI", percent: 83 },
                                    { question: "Enterprise pricing?", count: 4, handled: "Human", percent: 0 },
                                    { question: "Custom features?", count: 3, handled: "Human", percent: 0 }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-white">"{item.question}"</span>
                                            <span className="text-xs text-gray-400">{item.count}x</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${item.handled === 'AI' ? 'bg-green-500' : 'bg-amber-500'}`}
                                                    style={{ width: `${item.percent}%` }}
                                                />
                                            </div>
                                            <span className={`text-[10px] ${item.handled === 'AI' ? 'text-green-400' : 'text-amber-400'}`}>
                                                {item.handled}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Lightbulb className="w-4 h-4 text-amber-400" />
                                    <span className="text-xs text-amber-400 font-medium">Knowledge Gap Detected</span>
                                </div>
                                <p className="text-xs text-gray-400">Add an article about "Enterprise pricing" to automate 4 questions/week</p>
                            </div>
                        </motion.div>
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                            <TrendingUp className="w-3 h-3 text-orange-400" />
                            <span className="text-xs text-orange-400 font-medium">Results</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">
                            Focus on building
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
                                className="group p-10 rounded-[32px] bg-[#0C0E12] border border-white/5 hover:border-orange-500/30 transition-all duration-500 text-center"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <outcome.icon className="w-10 h-10 text-orange-400" />
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{outcome.value}</div>
                                <div className="text-sm text-gray-400 mb-4">{outcome.desc}</div>
                                <h3 className="text-xl font-medium text-white">{outcome.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="py-24 relative z-10">
                <div className="max-w-[800px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[32px] bg-[#0C0E12] border border-white/5 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                            <DollarSign className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-green-400 font-medium">Startup Friendly</span>
                        </div>
                        <h2 className="text-3xl font-medium text-white mb-4">Built for early-stage teams</h2>
                        <p className="text-gray-400 mb-6">
                            Start a 14-day free trial. No credit card required.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/pricing">
                                <Button variant="secondary" size="lg">
                                    View pricing
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
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
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Start supporting customers with AI
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Free 14-day trial. No credit card required. Set up in 5 minutes.
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

