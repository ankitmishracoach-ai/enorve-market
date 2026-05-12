import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    BookOpen, ArrowRight, Upload, Globe, FileText, Sparkles,
    Search, Shield, AlertTriangle, BarChart3, Clock, CheckCircle,
    TrendingUp, TrendingDown, Eye, History, Lightbulb, Database,
    Brain, Target, RefreshCw, Users, Lock, Zap, FileCheck
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

const ingestionSources = [
    {
        icon: Upload,
        title: "Document Upload",
        desc: "PDF, TXT, DOC, DOCX files up to 10MB with drag-and-drop",
        color: "#3B82F6"
    },
    {
        icon: Globe,
        title: "Website Crawler",
        desc: "Auto-crawl help centers with depth control and SSRF protection",
        color: "#10B981"
    },
    {
        icon: FileText,
        title: "Paste Content",
        desc: "Manually paste text directly into the knowledge base",
        color: "#1FA86F"
    }
]

const lifecycleStages = [
    { stage: "Draft", desc: "Created but not yet published", color: "#6B7280" },
    { stage: "Published", desc: "Live and available to AI", color: "#10B981" },
    { stage: "Version History", desc: "Immutable with parent_id linking", color: "#3B82F6" }
]

const qualityFeatures = [
    { icon: AlertTriangle, title: "Contradiction Detection", desc: "Find conflicting statements across articles", color: "#EF4444" },
    { icon: FileCheck, title: "Numeric Conflict Detection", desc: "Spot different values for same policy", color: "#D4C08A" },
    { icon: Database, title: "Duplicate Detection", desc: "Jaccard similarity for overlapping content", color: "#1FA86F" },
    { icon: Clock, title: "Staleness Warnings", desc: "Flags articles not updated in 180+ days", color: "#6B7280" }
]

const differentiators = [
    { title: "Governance-First", desc: "Retrieval-only mode with verified-source responses", icon: Shield },
    { title: "Knowledge Gap Auto-Fill", desc: "AI drafts articles from resolved conversations — operators publish in one click", icon: Sparkles },
    { title: "Impact Measurement", desc: "Before/after metrics for each published article", icon: TrendingUp },
    { title: "Conflict Detection", desc: "Automatically find contradictory information", icon: AlertTriangle },
    { title: "Website Crawler", desc: "One-click import with SSRF protection", icon: Globe },
    { title: "Version Control", desc: "Full audit trail with immutable history", icon: History }
]

export function KnowledgeBase() {
    usePageTitle({
        title: "Knowledge Base - Self-Resolving Help Center",
        description: "Self-service knowledge base that reduces support volume. Governance-first articles, instant answers, and searchable documentation for AI-powered customer support."
    })
    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <BookOpen className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-400">Knowledge Base</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Power your AI.<br />
                            Grounded in your knowledge.
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Governance-first knowledge retrieval that grounds every AI response in verified content.
                            Multi-source ingestion, AI suggestions, and real-time impact measurement.
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

                    {/* Interactive KB Interface Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-emerald-500/25 blur-[120px] -z-10" />

                            {/* Main KB UI */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.85)] bg-[#0C0E12]">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                                        </div>
                                        <span className="text-xs text-gray-400 ml-3">Knowledge Base</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-gray-400">
                                            <Search className="w-3 h-3" />
                                            <span className="text-[10px]">Search articles...</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Knowledge Mode Panel */}
                                <div className="p-4 border-b border-white/5 bg-emerald-500/5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Brain className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs font-medium text-white">Knowledge Mode</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Retrieval-Only</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[#0C0E12] border border-white/10">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs text-white font-medium">Verified Answer</span>
                                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">High confidence</span>
                                                </div>
                                                <p className="text-xs text-gray-400 leading-relaxed mb-2">
                                                    "Our refund policy allows returns within 30 days of purchase. Refunds are processed within 5-7 business days."
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <FileText className="w-3 h-3 text-gray-400" />
                                                    <span className="text-[10px] text-gray-400">From: Refund Policy v2.3</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full mt-3 px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium hover:bg-emerald-600 transition-colors">
                                        Insert to reply
                                    </button>
                                </div>

                                {/* Article List Preview */}
                                <div className="p-4">
                                    <div className="text-xs text-gray-400 mb-3">Recent Articles</div>
                                    <div className="space-y-2">
                                        {[
                                            { title: "Refund Policy", category: "Policies", status: "Published", updated: "2h ago" },
                                            { title: "Shipping FAQ", category: "FAQ", status: "Published", updated: "1d ago" },
                                            { title: "Size Guide v3", category: "Product", status: "Draft", updated: "3d ago" }
                                        ].map((article) => (
                                            <div key={article.title} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <FileText className="w-4 h-4 text-gray-400" />
                                                    <div>
                                                        <div className="text-xs text-white">{article.title}</div>
                                                        <div className="text-[10px] text-gray-400">{article.category}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${article.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-gray-500/10 text-gray-400'}`}>
                                                        {article.status}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">{article.updated}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -right-4 top-8 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs text-white font-medium">Knowledge-Grounded</span>
                                </div>
                            </div>

                            <div className="absolute -left-4 bottom-12 bg-[#0C0E12] border border-white/10 rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <div>
                                        <div className="text-xs text-white">+23%</div>
                                        <div className="text-[10px] text-gray-400">Containment</div>
                                    </div>
                                </div>
                                <div className="text-[8px] uppercase tracking-wider text-white/30 mt-1.5">Example</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Multi-Source Ingestion */}
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
                            Import from<br />anywhere
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            Pull content from existing help centers, upload documents, or paste directly. All sources are chunked and embedded for semantic search.
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {ingestionSources.map((source, index) => (
                            <motion.div
                                key={source.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: `${source.color}20`, border: `1px solid ${source.color}40` }}
                                >
                                    <source.icon className="w-8 h-8" style={{ color: source.color }} />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-3">{source.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{source.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Crawler Config Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 rounded-[32px] bg-[#0C0E12] border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Website Crawler</h3>
                                <p className="text-xs text-gray-400">Advanced crawling with security built-in</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs text-gray-400 mb-2">Max Pages</div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 rounded-full bg-white/10">
                                        <div className="w-1/2 h-full rounded-full bg-emerald-500" />
                                    </div>
                                    <span className="text-sm text-white">50</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs text-gray-400 mb-2">Crawl Depth</div>
                                <div className="flex gap-2">
                                    {[1, 2, 3].map((d) => (
                                        <button key={d} className={`px-3 py-1 rounded text-xs ${d === 2 ? 'bg-emerald-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                                            {d} level{d > 1 ? 's' : ''}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="text-xs text-gray-400 mb-2">Security</div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs text-emerald-400">SSRF Protection Active</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Lifecycle */}
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
                                Article<br />
                                <span className="text-gray-400">Lifecycle</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Full version control with immutable history. Publish to AI with one click, rollback when needed, and track every change.
                            </p>

                            <div className="space-y-4">
                                {lifecycleStages.map((stage, i) => (
                                    <div key={stage.stage} className="flex items-center gap-4">
                                        <div className="relative">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${stage.color}20`, border: `1px solid ${stage.color}40` }}
                                            >
                                                <span className="text-lg font-bold" style={{ color: stage.color }}>{i + 1}</span>
                                            </div>
                                            {i < lifecycleStages.length - 1 && (
                                                <div className="absolute top-12 left-1/2 w-px h-8 bg-gradient-to-b from-white/20 to-transparent -translate-x-1/2" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">{stage.stage}</h4>
                                            <p className="text-sm text-gray-400">{stage.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Version History Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <History className="w-5 h-5 text-emerald-400" />
                                    <h3 className="text-white font-medium">Version History</h3>
                                </div>
                                <span className="text-xs text-gray-400">Refund Policy</span>
                            </div>

                            <div className="relative space-y-4 pl-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-emerald-500 before:via-blue-500 before:to-gray-500">
                                {[
                                    { version: "v2.3", action: "Published", by: "Sarah K.", time: "2 hours ago", status: "current" },
                                    { version: "v2.2", action: "Edited", by: "John D.", time: "1 day ago", status: "previous" },
                                    { version: "v2.1", action: "Rollback", by: "Admin", time: "3 days ago", status: "previous" },
                                    { version: "v2.0", action: "Published", by: "Sarah K.", time: "1 week ago", status: "previous" }
                                ].map((item, i) => (
                                    <div key={item.version} className="relative flex items-start gap-4">
                                        <div className={`w-4 h-4 rounded-full border-2 border-[#0C0E12] -ml-[5px] ${i === 0 ? 'bg-emerald-500' : 'bg-gray-500'}`} />
                                        <div className="flex-1 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-medium text-white">{item.version}</span>
                                                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.action === 'Published' ? 'bg-emerald-500/10 text-emerald-400' : item.action === 'Rollback' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                                        {item.action}
                                                    </span>
                                                </div>
                                                {i === 0 && <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Current</span>}
                                            </div>
                                            <div className="text-[10px] text-gray-400">{item.by} • {item.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 px-4 py-2 rounded-lg bg-white/5 text-gray-400 text-xs hover:bg-white/10 transition-colors border border-white/10">
                                    <RefreshCw className="w-3 h-3 inline mr-1" />
                                    Rollback
                                </button>
                                <button className="flex-1 px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-medium hover:bg-emerald-600 transition-colors">
                                    View diff
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Suggestions Engine */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span className="text-xs text-amber-400 font-medium">AI-Native</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            AI Suggestions Engine
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto"
                        >
                            Automatically detect knowledge gaps from escalation patterns. AI generates article suggestions based on real customer questions.
                        </motion.p>
                    </div>

                    {/* Suggestion Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-6"
                    >
                        <div className="p-6 rounded-[24px] bg-[#0C0E12] border border-amber-500/20">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Suggested Article</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">82% confidence</span>
                                            <span className="text-[10px] text-gray-400">12 escalations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                                <h4 className="text-sm text-white mb-2">International Shipping Times</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Customers have asked about shipping times to countries outside India. AI detected this pattern from 12 escalated conversations where no KB match was found.
                                </p>
                            </div>
                            <div className="text-xs text-gray-400 mb-4">
                                <span className="text-amber-400">Escalation reason:</span> no_kb_match
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 px-4 py-2 rounded-lg bg-amber-500 text-white text-xs font-medium hover:bg-amber-600 transition-colors">
                                    Accept as Draft
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 text-xs hover:bg-white/10 transition-colors border border-white/10">
                                    Dismiss
                                </button>
                            </div>
                        </div>

                        <div className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Suggested Article</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">67% confidence</span>
                                            <span className="text-[10px] text-gray-400">8 escalations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                                <h4 className="text-sm text-white mb-2">Gift Card Balance Check</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Multiple customers have asked how to check their gift card balance. Current KB articles don't cover this specific use case.
                                </p>
                            </div>
                            <div className="text-xs text-gray-400 mb-4">
                                <span className="text-blue-400">Escalation reason:</span> low_confidence
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 px-4 py-2 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition-colors">
                                    Accept as Draft
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-400 text-xs hover:bg-white/10 transition-colors border border-white/10">
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quality & Freshness Detection */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-[1.1]"
                        >
                            Conflict &<br />Freshness Detection
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            Automatically find contradictions, detect duplicates, and flag stale content before it causes problems.
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {qualityFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundColor: `${feature.color}20`, border: `1px solid ${feature.color}40` }}
                                >
                                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Measurement */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                                <BarChart3 className="w-3 h-3 text-emerald-400" />
                                <span className="text-xs text-emerald-400 font-medium">Impact Measurement</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                                Measure real<br />
                                <span className="text-gray-400">impact</span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                See before/after metrics for every published article. Track escalation rates, containment, and get a verdict on whether your changes helped.
                            </p>

                            <div className="relative grid grid-cols-2 gap-4">
                                <span className="absolute -top-3 right-0 text-[9px] font-semibold uppercase tracking-wider text-white/20 bg-white/5 px-2 py-0.5 rounded-full z-10">Sample data — illustrative only</span>
                                {[
                                    { label: "Containment Rate", value: "78%", trend: "+12%", up: true },
                                    { label: "Avg Confidence", value: "84%", trend: "+8%", up: true },
                                    { label: "Escalation Rate", value: "18%", trend: "-23%", up: false },
                                    { label: "Articles Published", value: "142", trend: "+15", up: true }
                                ].map((metric) => (
                                    <div key={metric.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                                        <div className="flex items-end gap-2">
                                            <span className="text-2xl font-bold text-white">{metric.value}</span>
                                            <span className={`text-xs mb-1 ${metric.up ? 'text-emerald-400' : 'text-red-400'}`}>
                                                {metric.trend}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Impact Card Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[32px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-medium">Article Impact</h3>
                                <span className="text-xs text-gray-400">Refund Policy v2.3</span>
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-medium text-emerald-400">Improved</span>
                                </div>
                                <p className="text-xs text-gray-400">Escalation rate decreased by 34% after publishing</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-gray-400">Before</span>
                                        <span className="text-red-400">42% escalation rate</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[42%] rounded-full bg-red-500/50" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-gray-400">After</span>
                                        <span className="text-emerald-400">8% escalation rate</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[8%] rounded-full bg-emerald-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/5 flex justify-between text-xs">
                                <div>
                                    <div className="text-gray-400">Sample Size</div>
                                    <div className="text-white font-medium">1,247 conversations</div>
                                </div>
                                <div>
                                    <div className="text-gray-400">Verdict</div>
                                    <div className="text-emerald-400 font-medium flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" />
                                        Statistically Significant
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Knowledge Gap Auto-Fill */}
            <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                            <Lightbulb className="w-4 h-4 text-violet-400" />
                            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Auto-Fill</span>
                        </div>
                        <h3 className="text-3xl font-medium tracking-tight text-white mb-3">
                            AI drafts articles from<br />resolved conversations.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            When the AI can't answer a question and an agent resolves it, Enorve automatically drafts a knowledge base article from the conversation. The agent's resolution becomes reusable knowledge — not buried in a ticket log.
                        </p>
                        <div className="space-y-3">
                            {[
                                { text: "Triggered on conversation resolution — no manual action required", icon: Zap },
                                { text: "GPT-4o drafts title, body, category, and tags from the transcript", icon: Sparkles },
                                { text: "One-click publish, or edit first — operator stays in control", icon: CheckCircle },
                                { text: "Only drafts from fully resolved conversations — no hallucinated articles", icon: Shield },
                            ].map((f, i) => (
                                <motion.div
                                    key={f.text}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <f.icon className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                                    <span className="text-sm text-gray-300">{f.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Auto-Fill Flow Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-2xl border border-white/10 bg-[#0C0E12] p-5 space-y-3">
                            {/* Step flow */}
                            {[
                                { step: "1", label: "Gap Detected", desc: "Customer asked about return policy — no article found", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
                                { step: "2", label: "Agent Resolves", desc: "Agent explains the 30-day return window and process", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                                { step: "3", label: "AI Drafts Article", desc: '"How to Return an Item" — 3 paragraphs, categorized, tagged', color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
                                { step: "4", label: "Operator Publishes", desc: "One click — article goes live, gap closed permanently", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.step}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center gap-3 p-3 rounded-xl border ${s.border} ${s.bg}`}
                                >
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${s.color} bg-white/5`}>
                                        {s.step}
                                    </div>
                                    <div>
                                        <div className={`text-xs font-medium ${s.color}`}>{s.label}</div>
                                        <div className="text-[11px] text-gray-500">{s.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                            Why Enorve Knowledge Base?
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
                                className="group p-8 rounded-[24px] bg-[#0C0E12] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-7 h-7 text-emerald-400" />
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
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Ready to power your AI?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Start free trial and build your knowledge base today.
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

