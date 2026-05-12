import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
    ArrowRight, Shield, Plug, Play, DollarSign,
    CheckCircle, MessageSquare, Clock, Globe, Mail, Loader2, Send
} from "lucide-react"
import { Button } from "../../components/ui/Button"
import { usePageTitle } from "../../hooks/usePageTitle"
import { goToSignup } from "../../lib/constants"

// Supabase URL + anon key are public-by-design (RLS gates access), but live in
// env vars so the values can be rotated without a code change. Build will warn
// loudly if VITE_SUPABASE_URL is missing.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    // eslint-disable-next-line no-console
    console.warn("[Contact] Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — contact form will fail.")
}

const helpTopics = [
    {
        title: "Product walkthrough",
        icon: Play,
        items: [
            "Live demo of the AI Copilot, automation, and analytics",
            "See how Enorve fits into your current support workflow",
            "Answers to technical or operational questions"
        ]
    },
    {
        title: "Pricing & plan guidance",
        icon: DollarSign,
        items: [
            "Help choosing between Professional, Business, or Enterprise",
            "AI message usage planning",
            "Annual billing and volume discussions"
        ]
    },
    {
        title: "Enterprise & security",
        icon: Shield,
        items: [
            "Industry-standard security controls",
            "Audit logs, SSO / SAML",
            "Data access, permissions, and governance"
        ]
    },
    {
        title: "Integrations & customization",
        icon: Plug,
        items: [
            "Shopify (Early Access)",
            "CRM or internal tool integrations",
            "API or webhook requirements"
        ]
    }
]

const teamSizeOptions = ["1-5", "6-20", "21-50", "51-200", "200+"]
const volumeOptions = ["< 1,000", "1,000 - 10,000", "10,000 - 50,000", "50,000+"]
const lookingForOptions = ["Product Demo", "Pricing Discussion", "Enterprise Requirements", "Other"]

export function ContactSales() {
    const [formData, setFormData] = useState({
        name: "", email: "", company: "",
        team_size: "", monthly_volume: "", looking_for: "", message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    usePageTitle({
        title: "Contact Sales — Talk to the Enorve Team",
        description: "Get in touch for sales inquiries, partnership opportunities, or technical questions. We respond within 24 hours."
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)

        try {
            const res = await fetch(`${SUPABASE_URL}/functions/v1/contact-sales`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Failed to submit")

            setSubmitted(true)
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setIsSubmitting(false)
        }
    }

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(31, 168, 111,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                        <MessageSquare className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-violet-400">Contact Sales</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Talk to our<br />sales team
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Get a tailored walkthrough of Enorve, discuss pricing, or explore enterprise-grade requirements.
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-3xl mx-auto px-6 mb-20 relative z-10">
                <div className="space-y-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-lg mx-auto"
                    >
                        <div className="p-8 rounded-[24px] bg-[#0C0E12] border border-white/5">
                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-2">We've got your message</h3>
                                    <p className="text-gray-400 text-sm">Our team will reach out within 1 business day. Check your inbox for a confirmation.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-lg font-medium text-white mb-1">Get in touch</h3>
                                    <p className="text-sm text-gray-400 mb-4">We typically respond within 24 hours.</p>

                                    {error && (
                                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                                            {error}
                                        </div>
                                    )}

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1.5">Full name *</label>
                                            <input
                                                type="text" required value={formData.name}
                                                onChange={e => updateField("name", e.target.value)}
                                                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                                                placeholder="Jane Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1.5">Work email *</label>
                                            <input
                                                type="email" required value={formData.email}
                                                onChange={e => updateField("email", e.target.value)}
                                                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                                                placeholder="jane@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1.5">Company *</label>
                                        <input
                                            type="text" required value={formData.company}
                                            onChange={e => updateField("company", e.target.value)}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1.5">Team size</label>
                                            <select
                                                value={formData.team_size}
                                                onChange={e => updateField("team_size", e.target.value)}
                                                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none"
                                            >
                                                <option value="" className="bg-[#0C0E12]">Select...</option>
                                                {teamSizeOptions.map(opt => (
                                                    <option key={opt} value={opt} className="bg-[#0C0E12]">{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1.5">Monthly support volume</label>
                                            <select
                                                value={formData.monthly_volume}
                                                onChange={e => updateField("monthly_volume", e.target.value)}
                                                className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none"
                                            >
                                                <option value="" className="bg-[#0C0E12]">Select...</option>
                                                {volumeOptions.map(opt => (
                                                    <option key={opt} value={opt} className="bg-[#0C0E12]">{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1.5">What are you looking for? *</label>
                                        <select
                                            required value={formData.looking_for}
                                            onChange={e => updateField("looking_for", e.target.value)}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none"
                                        >
                                            <option value="" className="bg-[#0C0E12]">Select a topic...</option>
                                            {lookingForOptions.map(opt => (
                                                <option key={opt} value={opt} className="bg-[#0C0E12]">{opt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1.5">Anything else?</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={e => updateField("message", e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                                            placeholder="Tell us about your use case, requirements, or questions..."
                                        />
                                    </div>

                                    <Button variant="primary" className="w-full group" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send to Sales
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>

                                    {/* Trust badges */}
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="flex flex-wrap gap-3 justify-center">
                                            {[
                                                { icon: Shield, text: "Enterprise security" },
                                                { icon: Clock, text: "24h response time" },
                                                { icon: Globe, text: "No spam, ever" }
                                            ].map((badge) => (
                                                <div key={badge.text} className="flex items-center gap-1.5 text-xs text-gray-400">
                                                    <badge.icon className="w-3 h-3" />
                                                    {badge.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Info Section */}
                    <div>
                        {/* Who should contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-xl font-medium text-white mb-4">Who should contact sales?</h2>
                            <p className="text-gray-400 mb-4">This page is for teams that:</p>
                            <div className="space-y-2 mb-6">
                                {[
                                    "Handle high support volumes",
                                    "Need custom integrations or workflows",
                                    "Require security, compliance, or governance controls",
                                    "Are evaluating Business or Enterprise plans"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-violet-400" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400">
                                Just getting started?{" "}
                                <button onClick={goToSignup} className="text-violet-400 hover:underline cursor-pointer">
                                    Start free trial
                                </button>{" "}
                                — no sales call required.
                            </p>
                        </motion.div>

                        {/* What we can help with */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl font-medium text-white mb-6">What we can help with</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {helpTopics.map((topic, i) => (
                                    <div key={topic.title} className="p-4 rounded-xl bg-[#0C0E12] border border-white/5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <topic.icon className="w-4 h-4 text-violet-400" />
                                            <h3 className="text-sm font-medium text-white">{topic.title}</h3>
                                        </div>
                                        <div className="space-y-1">
                                            {topic.items.map((item, j) => (
                                                <p key={j} className="text-xs text-gray-400">{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* What happens next */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <h2 className="text-xl font-medium text-white mb-4">What happens next?</h2>
                            <div className="flex flex-col gap-3">
                                {[
                                    "We review your request (usually within 1 business day)",
                                    "A sales or product specialist reaches out",
                                    "You get a focused call — no generic pitch"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs text-violet-400 font-medium">
                                            {i + 1}
                                        </div>
                                        <span className="text-gray-400">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Self-serve CTA */}
            <section className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[24px] bg-[#0C0E12] border border-white/5"
                >
                    <h3 className="text-lg font-medium text-white mb-2">Prefer to try it yourself?</h3>
                    <p className="text-gray-400 mb-6">Start free trial — no sales call required.</p>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" onClick={goToSignup}>
                            Start free trial
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Link to="/pricing">
                            <Button variant="secondary">
                                View pricing
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-6 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-3 text-center">Contact Sales — FAQ</h2>
                    <p className="text-gray-400 text-center mb-12">Common questions about talking to sales</p>

                    <div className="space-y-3">
                        {/* FAQ Items - Using details/summary for native accordion */}
                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Do I need to talk to sales to use Enorve?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-2">
                                <p><strong className="text-white">No.</strong></p>
                                <p>You can start a 14-day free trial without talking to sales. No credit card required.</p>
                                <p>Sales is helpful if you're evaluating Business or Enterprise plans, need custom workflows, or have security requirements.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Who is Contact Sales meant for?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-3">
                                <p>Teams that:</p>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Handle high conversation volumes</li>
                                    <li>Need AI automation at scale</li>
                                    <li>Require SSO, audit logs, or governance controls</li>
                                    <li>Want custom integrations or pricing guidance</li>
                                </ul>
                                <p>Smaller teams can start a free trial without a call.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Can you give a live product demo?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-3">
                                <p><strong className="text-white">Yes.</strong></p>
                                <p>We offer focused demos covering AI Copilot, automation, analytics, and security.</p>
                                <p>Demos are tailored to your use case, not generic walkthroughs.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Is Enorve suitable for enterprise use?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-2">
                                <p><strong className="text-white">Yes.</strong></p>
                                <p>Enorve supports RBAC, SSO/SAML, audit logs, SLA management, and industry-standard security controls on Enterprise plans.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">How does Enorve handle security?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-2">
                                <p>Enorve is built with security-first architecture including encryption at rest and in transit, role-based access control, MFA, and tenant isolation. We're happy to discuss our security posture during a sales call.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">How does AI usage and pricing work?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400 space-y-2">
                                <p>AI usage is measured by AI messages (AI-generated replies, summaries, intent detection, auto-resolved conversations). Human messages are never counted.</p>
                                <p>We'll help you estimate usage during the sales discussion.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">What happens if we exceed our limits?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p>You'll receive usage alerts, human support continues uninterrupted, and AI features pause unless upgraded. No surprise shutdowns.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Can we customize workflows or integrations?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p><strong className="text-white">Yes.</strong> Business and Enterprise plans support custom workflows, routing logic, and API/webhook integrations.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Do you support Shopify?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p><strong className="text-white">Yes.</strong> Native Shopify integration fetches order data and powers AI responses with real context. Available on Business plans and above.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Do you offer annual plans or volume discounts?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p><strong className="text-white">Yes.</strong> Annual billing and volume-based pricing available. Sales can help structure plans based on your usage.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">How long does onboarding take?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p>Self-serve: same day • Business: a few days • Enterprise: guided setup with configuration support</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">Will AI replace our support agents?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p><strong className="text-white">No.</strong> AI handles repetitive issues, escalates complex cases to humans, and gives agents better context. AI reduces workload — it doesn't remove human control.</p>
                            </div>
                        </details>

                        <details className="group p-6 rounded-xl bg-[#0C0E12] border border-white/5 hover:border-white/10 transition-colors">
                            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                                <span className="text-white font-medium">How quickly will someone respond after I contact sales?</span>
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-4 text-gray-400">
                                <p>Typically within 1 business day.</p>
                            </div>
                        </details>
                    </div>

                    {/* Still have questions CTA */}
                    <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center">
                        <p className="text-white font-medium mb-2">Still have questions?</p>
                        <p className="text-gray-400 text-sm">
                            <a href="mailto:sales@enorve.com?subject=Sales Question" className="text-violet-400 hover:text-violet-300 transition-colors">
                                Contact sales
                            </a> and tell us what you're trying to solve — we'll take it from there.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
