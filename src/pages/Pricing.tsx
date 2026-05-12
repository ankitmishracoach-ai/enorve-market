import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
    ArrowRight, Check, Zap, Users, MessageSquare, Bot, Shield,
    Building2, Sparkles, HelpCircle, ChevronDown, Crown, Clock,
    Lock, BarChart3, Palette, Headphones, Globe, FileText
} from "lucide-react"
import { Button } from "../components/ui/Button"
import { useState } from "react"
import { usePageTitle } from "../hooks/usePageTitle"
import { goToSignup } from "../lib/constants"
import { useStructuredData, createProductSchema, createFAQPageSchema } from "../hooks/useStructuredData"
import { ROIWidget } from "../components/roi/ROIWidget"

const plans = [
    {
        name: "Starter",
        price: 39,
        tagline: "Up to 500 autonomously resolved conversations/mo",
        description: "AI-first support for small teams",
        color: "#3B82F6",
        icon: Zap,
        popular: false,
        features: [
            { text: "Up to 5 team members", included: true },
            { text: "500 autonomous resolutions / month", included: true, highlight: true },
            { text: "1,000 total conversations / month", included: true },
            { text: "Email & Chat channels", included: true },
            { text: "Multi-channel inbox", included: true },
            { text: "AI Auto-Resolution", included: true },
            { text: "Basic analytics", included: true },
            { text: "Email support", included: true }
        ],
        bestFor: ["Small teams starting with autonomous operations"],
        cta: "Start free trial"
    },
    {
        name: "Professional",
        price: 199,
        tagline: "Up to 2,500 autonomously resolved conversations/mo",
        description: "Autonomous operations for growing teams",
        color: "#1FA86F",
        icon: Sparkles,
        popular: true,
        features: [
            { text: "Up to 25 team members", included: true },
            { text: "2,500 autonomous resolutions / month", included: true, highlight: true },
            { text: "10,000 total conversations / month", included: true },
            { text: "Email, Chat & Social channels", included: true },
            { text: "AI Copilot for agents", included: true, highlight: true },
            { text: "Multilingual AI responses", included: true, highlight: true },
            { text: "Workflow automation", included: true },
            { text: "Advanced analytics", included: true },
            { text: "AI action execution", included: true },
            { text: "Agent macros", included: true },
            { text: "Conversation memory", included: true },
            { text: "Proactive campaigns", included: true },
            { text: "Priority email support", included: true }
        ],
        bestFor: ["Growing teams replacing manual support with AI"],
        cta: "Start free trial"
    },
    {
        name: "Business",
        price: 499,
        tagline: "Up to 10,000 autonomously resolved conversations/mo",
        description: "Governed autonomous operations at scale",
        color: "#10B981",
        icon: Building2,
        popular: false,
        features: [
            { text: "Up to 100 team members", included: true },
            { text: "10,000 autonomous resolutions / month", included: true, highlight: true },
            { text: "50,000 total conversations / month", included: true },
            { text: "Omnichannel support", included: true },
            { text: "Multilingual AI responses", included: true, highlight: true },
            { text: "Ticketing with SLAs", included: true, highlight: true },
            { text: "AI decision explainability", included: true, highlight: true },
            { text: "Protocol Engine (visual AI workflows)", included: true, highlight: true },
            { text: "Auto-QA grading", included: true },
            { text: "Volume forecasting", included: true },
            { text: "Developer API", included: true },
            { text: "Audit log retention", included: true },
            { text: "Custom branding", included: true },
            { text: "Priority phone & email support", included: true }
        ],
        bestFor: ["High-volume teams with governance requirements"],
        cta: "Start free trial"
    },
    {
        name: "Enterprise",
        price: "Custom",
        tagline: "50,000+ autonomously resolved conversations/mo",
        description: "Full autonomous operations with contractual guarantees",
        color: "#D4C08A",
        icon: Crown,
        popular: false,
        features: [
            { text: "Unlimited team members", included: true },
            { text: "50,000+ autonomous resolutions / month", included: true, highlight: true },
            { text: "200,000+ total conversations / month", included: true },
            { text: "Full omnichannel", included: true },
            { text: "Multilingual AI responses", included: true, highlight: true },
            { text: "Custom SLAs", included: true, highlight: true },
            { text: "SSO / SAML (Coming soon)", included: true, highlight: true },
            { text: "API access", included: true },
            { text: "White-label (Coming soon)", included: true },
            { text: "Dedicated account manager", included: true },
            { text: "Sales-assisted contracts", included: true }
        ],
        bestFor: ["Large orgs requiring enterprise-grade autonomous operations"],
        cta: "Contact Sales"
    }
]

const aiUsage = {
    counts: [
        "Autonomously resolves a conversation",
        "Generates a reply without human involvement",
        "Detects intent and takes autonomous action",
        "Summarizes a conversation for handoff"
    ],
    doesNotCount: [
        "Human-written messages",
        "Internal notes",
        "System notifications"
    ]
}

const faqs = [
    {
        question: "Can I change my plan at any time?",
        answer: "You can request plan upgrades or downgrades at any time. Upgrades can take effect immediately with proration applied. Downgrades typically take effect at the next billing cycle. Our team is always available to help ensure a smooth transition. Proration details are shared at the time of plan change confirmation."
    },
    {
        question: "What happens when I reach my message limit?",
        answer: "You'll receive notifications as you approach your limits. If you exceed your monthly allocation, you can purchase additional capacity or upgrade to a higher plan. We never cut off active conversations."
    },
    {
        question: "How does signup work?",
        answer: "Sign up and start your 14-day free trial — no credit card required. You can switch plans, upgrade, or cancel any time. No long-term contracts."
    },
    {
        question: "How does billing work?",
        answer: "Monthly billing by default. Annual plans are available via sales-assisted contracts. All prices are in USD."
    },
    {
        question: "Can I cancel anytime?",
        answer: "Absolutely. You can cancel your subscription at any time. You'll retain access until the end of your current billing period."
    },
    {
        question: "What about data security?",
        answer: "We take security seriously. All data is encrypted in transit and at rest. Higher plans include additional governance features like audit logs and compliance controls."
    }
]

const securityFeatures = [
    { icon: Lock, text: "Role-based access control" },
    { icon: Shield, text: "Data encryption at rest and in transit" },
    { icon: FileText, text: "Audit logging (Enterprise)" },
    { icon: Clock, text: "High availability infrastructure" },
    { icon: Globe, text: "Multi-factor authentication" }
]

export function Pricing() {
    usePageTitle({
        title: "Pricing — AI Support Plans by Resolution Capacity",
        description: "Plans from 500 to 50,000+ AI-resolved conversations per month. Pay for resolution capacity, not feature access. Start with a free trial."
    })

    // Add product structured data for SEO
    useStructuredData([
        createProductSchema(
            "Enorve Starter Plan",
            "39",
            "Perfect for small teams starting with AI customer support. Includes unified inbox and basic AI features."
        ),
        createProductSchema(
            "Enorve Professional Plan",
            "199",
            "For growing teams. Advanced AI Copilot, workflow automation, and analytics included."
        ),
        createProductSchema(
            "Enorve Business Plan",
            "499",
            "Enterprise features with governance, audit logs, and AI decision explainability for controlled automation."
        ),
        createFAQPageSchema(faqs),
    ])

    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(31, 168, 111,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-20 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Pay for resolution capacity,<br />not feature access.
                    </h1>
                    <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
                        Each plan is defined by how many conversations AI resolves autonomously — not by how many features you unlock.
                    </p>
                    <p className="text-sm text-gray-400">Choose your autonomous resolution tier and start replacing manual support today</p>
                </motion.div>
            </section>

            {/* Plans Grid */}
            <section className="max-w-[1400px] mx-auto px-6 mb-32 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-6 rounded-[24px] bg-[#0C0E12] border ${plan.popular ? 'border-violet-500/50' : 'border-white/5'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-500 text-white text-xs font-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                                >
                                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                                </div>
                                <h3 className="text-xl font-medium text-white mb-1">{plan.name}</h3>
                                {plan.tagline && <p className="text-xs text-gray-400 italic mb-1">{plan.tagline}</p>}
                                <p className="text-sm text-gray-400">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    {plan.price === "Custom" ? (
                                        <span className="text-4xl font-bold text-white">Custom Pricing</span>
                                    ) : (
                                        <>
                                            <span className="text-4xl font-bold text-white">${plan.price}</span>
                                            <span className="text-gray-400">/ month</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex-1 mb-6">
                                <div className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <Check
                                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                style={{ color: feature.highlight ? plan.color : '#6B7280' }}
                                            />
                                            <span className={`text-sm ${feature.highlight ? 'text-white font-medium' : 'text-gray-400'}`}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Best for</div>
                                <div className="space-y-1">
                                    {plan.bestFor.map((item, i) => (
                                        <p key={i} className="text-xs text-gray-400">{item}</p>
                                    ))}
                                </div>
                            </div>

                            <Button
                                variant={plan.popular ? "primary" : "secondary"}
                                className={`w-full ${plan.popular ? "bg-gradient-to-r from-violet-500 to-purple-600 shadow-[0_0_25px_rgba(31, 168, 111,0.4)] hover:shadow-[0_0_35px_rgba(31, 168, 111,0.5)]" : ""}`}
                                onClick={goToSignup}
                            >
                                {plan.cta}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center text-sm text-gray-400 mt-8"
                >
                    All plans include the unified inbox, core analytics, and secure infrastructure.
                </motion.p>
            </section>

            {/* Feature Comparison Table */}
            <section className="max-w-[1400px] mx-auto px-6 mb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                        Compare Plans
                    </h2>
                    <p className="text-gray-400">Detailed feature breakdown across all tiers</p>
                </motion.div>

                {/* Desktop Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="hidden md:block overflow-x-auto"
                >
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-4 px-4 text-sm font-medium text-gray-400">Feature</th>
                                <th className="text-center py-4 px-4 text-sm font-medium text-white">Starter</th>
                                <th className="text-center py-4 px-4 text-sm font-medium text-white">Professional</th>
                                <th className="text-center py-4 px-4 text-sm font-medium text-white">Business</th>
                                <th className="text-center py-4 px-4 text-sm font-medium text-white">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Team members", "Up to 5", "Up to 25", "Up to 100", "Unlimited"],
                                ["Monthly messages", "1,000", "10,000", "50,000", "200,000+"],
                                ["AI-assisted messages", "500", "2,500", "10,000", "50,000+"],
                                ["Channels supported", "Email, Chat", "Email, Chat, Social", "Omnichannel", "Omnichannel"],
                                ["Multi-channel inbox", "✓", "✓", "✓", "✓"],
                                ["AI Auto-Resolution", "✓ (common queries)", "✓", "✓", "✓"],
                                ["AI Copilot for agents", "—", "✓", "✓", "✓"],
                                ["Multilingual AI responses", "—", "✓", "✓", "✓"],
                                ["Workflow automation", "—", "✓", "✓", "✓"],
                                ["Analytics & reporting", "Basic", "Advanced", "Advanced", "Custom"],
                                ["Ticketing system", "Basic", "✓", "✓ (with SLAs)", "✓ (custom SLAs)"],
                                ["AI action execution", "—", "✓", "✓", "✓"],
                                ["AI decision explainability", "—", "—", "✓", "✓"],
                                ["Protocol Engine", "—", "—", "✓", "✓"],
                                ["Audit logs", "—", "—", "90-day retention", "Extended / custom"],
                                ["SSO / SAML", "—", "—", "—", "Coming soon"],
                                ["API access", "—", "—", "✓", "✓"],
                                ["Custom integrations", "—", "Limited", "✓", "✓"],
                                ["Branding / white-label", "—", "—", "Custom branding", "Coming soon"],
                                ["Support level", "Email", "Priority email", "Priority phone & email", "Dedicated account manager"],
                                ["Billing", "Monthly", "Monthly", "Monthly", "Sales-assisted contracts"]
                            ].map(([feature, ...values], i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-4 text-sm text-gray-300">{feature}</td>
                                    {values.map((value, j) => (
                                        <td key={j} className="text-center py-4 px-4 text-sm text-gray-400">
                                            {value === "✓" ? (
                                                <Check className="w-4 h-4 mx-auto text-green-400" />
                                            ) : value === "—" ? (
                                                <span className="text-gray-600">—</span>
                                            ) : (
                                                value
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Mobile Stacked View */}
                <div className="md:hidden space-y-6">
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                        >
                            <h3 className="text-lg font-medium text-white mb-4">{plan.name}</h3>
                            <div className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-400">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How AI Usage Works */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                            <Bot className="w-3 h-3 text-violet-400" />
                            <span className="text-xs text-violet-400 font-medium">AI Usage</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4"
                        >
                            How AI usage works
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* What counts */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-violet-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white">What counts as an AI message?</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">An AI message is counted when Enorve:</p>
                            <div className="space-y-2">
                                {aiUsage.counts.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-violet-500/5 border border-violet-500/10">
                                        <Check className="w-4 h-4 text-violet-400" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* What doesn't count */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-[24px] bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <MessageSquare className="w-4 h-4 text-green-400" />
                                </div>
                                <h3 className="text-lg font-medium text-white">What does NOT count?</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-4">These are always free:</p>
                            <div className="space-y-2">
                                {aiUsage.doesNotCount.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Limit info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-[24px] bg-amber-500/5 border border-amber-500/20"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                <HelpCircle className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white mb-2">When you hit your limit</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-3 rounded-lg bg-white/[0.02]">
                                        <p className="text-sm text-gray-400">AI features pause gracefully</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/[0.02]">
                                        <p className="text-sm text-gray-400">Human support continues uninterrupted</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/[0.02]">
                                        <p className="text-sm text-gray-400">Usage alerts at 70%, 90%, and 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="py-24 relative z-10">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-medium text-white tracking-tighter mb-4"
                        >
                            Add-ons & Upgrades
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { icon: Bot, title: "AI Message Packs", desc: "Pay-as-you-go" },
                            { icon: BarChart3, title: "Extra Storage", desc: "For growing teams" },
                            { icon: Globe, title: "Custom Integrations", desc: "Connect anything" },
                            { icon: Headphones, title: "Dedicated Support", desc: "Priority onboarding" }
                        ].map((addon, i) => (
                            <motion.div
                                key={addon.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-[16px] bg-[#0C0E12] border border-white/5 text-center"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-3">
                                    <addon.icon className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-sm font-medium text-white mb-1">{addon.title}</h3>
                                <p className="text-xs text-gray-400">{addon.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="py-24 relative bg-black/50">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Shield className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium">Security & Reliability</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-medium text-white tracking-tighter mb-4"
                        >
                            Included on all plans
                        </motion.h2>
                        <p className="text-gray-400">Designed with industry-standard security practices.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {securityFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C0E12] border border-white/5"
                            >
                                <feature.icon className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-white">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator - Interactive Widget */}
            <section className="py-16 relative z-10">
                <div className="max-w-[1100px] mx-auto px-6">
                    <ROIWidget />
                </div>
            </section>

            {/* Voice Add-on */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-[10px] font-semibold uppercase tracking-[3px] text-emerald-400 mb-3 block">Add-on</span>
                        <h2 className="text-3xl font-medium text-white tracking-tighter mb-4">
                            Voice Channel
                        </h2>
                        <p className="text-gray-400 max-w-lg mx-auto">
                            AI that answers your phone calls — governed by the same Protocol Engine as your chat support.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-white/[0.06] overflow-hidden"
                    >
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Plan</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Add-on fee</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Included</th>
                                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Overage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { plan: "Starter", fee: "+$29/mo", included: "300 min", overage: "$0.15/min" },
                                    { plan: "Professional", fee: "+$79/mo", included: "2,000 min", overage: "$0.12/min" },
                                    { plan: "Business", fee: "+$149/mo", included: "3,000 min", overage: "$0.10/min" },
                                    { plan: "Enterprise", fee: "Custom", included: "Custom", overage: "Negotiated" },
                                ].map((row, i) => (
                                    <tr key={row.plan} className={`border-b border-white/[0.04] ${i % 2 === 1 ? "bg-white/[0.01]" : ""}`}>
                                        <td className="px-6 py-4 text-sm font-medium text-white">{row.plan}</td>
                                        <td className="px-6 py-4 text-sm text-emerald-400 font-medium">{row.fee}</td>
                                        <td className="px-6 py-4 text-sm text-gray-400">{row.included}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{row.overage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-6 text-center"
                    >
                        <p className="text-xs text-gray-500 leading-relaxed max-w-lg mx-auto">
                            Includes: AI voice agent, warm transfers, live transcription, call recording, auto-QA grading, immutable audit trail. No per-resolution fees. No surprise overages beyond the published rate.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 relative z-10">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-medium text-white tracking-tighter mb-4"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-[16px] bg-[#0C0E12] border border-white/5 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-4 text-left"
                                >
                                    <span className="font-medium text-white">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-4 pb-4">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative p-12 rounded-[32px] bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31, 168, 111,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                            Let AI run your support. Stay in control.
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            14-day free trial. No credit card required. Cancel any time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="primary" size="lg" onClick={goToSignup}>
                                Start free trial
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Link to="/contact-sales">
                                <Button variant="secondary" size="lg">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
