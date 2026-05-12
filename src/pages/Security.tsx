import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Shield, Lock, Users, Smartphone, Eye, FileText, Wifi, Check, ArrowRight } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"

const fade = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const certifications = [
    { cert: "SOC 2 Type II", status: "In Progress", timeline: "Q3 2026", color: "text-emerald-400" },
    { cert: "GDPR Compliance", status: "Implemented", timeline: "Active", color: "text-emerald-400" },
    { cert: "CCPA Compliance", status: "Implemented", timeline: "Active", color: "text-emerald-400" },
    { cert: "ISO 27001", status: "Evaluating", timeline: "2027", color: "text-yellow-400" },
    { cert: "HIPAA", status: "On Request", timeline: "Contact us", color: "text-gray-500" },
]

const architectureTiles = [
    { title: "Tenant Isolation", desc: "Every account is fully isolated. No shared data between organizations.", icon: Shield },
    { title: "Role-Based Access", desc: "Granular permission tiers. Every action is gated by role.", icon: Users },
    { title: "MFA Enforcement", desc: "Two-factor authentication available for all team members.", icon: Smartphone },
    { title: "PII Auto-Redaction", desc: "Sensitive data is automatically detected and masked in logs.", icon: Eye },
    { title: "Audit Logging", desc: "Every action is logged with full traceability.", icon: FileText },
    { title: "IP Whitelisting", desc: "Restrict platform access to approved networks.", icon: Wifi },
]

const shipped = [
    { title: "Incident Response Plan", desc: "Documented severity classification, response phases, breach notification procedures." },
    { title: "SLA Commitments", desc: "Uptime targets, recovery objectives, and security patch timelines defined." },
    { title: "Security Headers", desc: "Industry-standard HTTP security headers enforced on all endpoints." },
    { title: "Cookie Consent", desc: "Granular consent controls implemented." },
    { title: "Data Retention Policy", desc: "Retention and deletion schedules documented and enforced." },
    { title: "Account Lockout", desc: "Automated lockout after repeated failed authentication attempts." },
    { title: "Data Classification", desc: "Multi-level classification system with handling requirements per level." },
    { title: "Data Protection Policy", desc: "Documented and enforced across all data handling flows." },
]

export function Security() {
    usePageTitle({
        title: "Security — SOC 2, GDPR, Encryption | Enorve",
        description: "Tenant isolation, MFA, audit logging, PII redaction, and data classification. SOC 2 Type II in progress. GDPR and CCPA compliant."
    })

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* ── 1. Hero ──────────────────────────────────────────────── */}
                <motion.section className="mb-24 text-center" {...fade}>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                        Security isn't a feature.<br />It's the foundation.
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Every decision Enorve makes — infrastructure, data handling, access control — is built to protect your customers and your business.
                    </p>
                </motion.section>

                {/* ── 2. Certification Status ──────────────────────────────── */}
                <motion.section className="mb-24" {...fade} transition={{ delay: 0.1 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Certification Status</h2>
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Certification</th>
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Timeline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certifications.map((c, i) => (
                                    <tr key={c.cert} className={`border-b border-white/[0.04] ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                                        <td className="px-6 py-4 text-sm font-medium text-white">{c.cert}</td>
                                        <td className={`px-6 py-4 text-sm font-medium ${c.color}`}>{c.status}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{c.timeline}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* ── 3. Architecture Security ─────────────────────────────── */}
                <motion.section className="mb-24" {...fade} transition={{ delay: 0.15 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Architecture Security</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {architectureTiles.map((tile) => (
                            <div key={tile.title} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <tile.icon className="w-4 h-4 text-gray-500" />
                                    <h3 className="text-sm font-semibold text-white">{tile.title}</h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{tile.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── 4. What We've Shipped ────────────────────────────────── */}
                <motion.section className="mb-24" {...fade} transition={{ delay: 0.2 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">What We've Shipped</h2>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.04]">
                        {shipped.map((item) => (
                            <div key={item.title} className="flex items-start gap-3.5 px-5 py-4">
                                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-sm font-medium text-white">{item.title}</span>
                                    <span className="text-sm text-gray-500"> — {item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── 5. Data Handling ─────────────────────────────────────── */}
                <motion.section className="mb-24" {...fade} transition={{ delay: 0.25 }}>
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Data Handling</h2>
                    <div className="space-y-6">
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                <Lock className="w-3.5 h-3.5 text-gray-500" />
                                Where data lives
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                All data is encrypted at rest and in transit. Infrastructure is hosted in SOC 2-compliant data centers.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5 text-gray-500" />
                                How AI decisions are logged
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Every AI decision is stored with a full audit trail — what triggered it, what it decided, what it did.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                <Shield className="w-3.5 h-3.5 text-gray-500" />
                                Data deletion
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                GDPR-compliant export and deletion available on request for all tiers.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ── 6. AI Transparency link ───────────────────────────────── */}
                <motion.section className="mb-12" {...fade} transition={{ delay: 0.3 }}>
                    <Link
                        to="/ai-transparency"
                        className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors px-5 py-4"
                    >
                        <div>
                            <p className="text-sm font-medium text-white">AI Transparency</p>
                            <p className="text-xs text-gray-500 mt-0.5">What data flows to the AI, what it cannot do, and how every decision is logged.</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                </motion.section>

                {/* ── 7. Responsible Disclosure ────────────────────────────── */}
                <motion.section {...fade} transition={{ delay: 0.35 }}>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                        <p className="text-sm text-gray-400">
                            Found a vulnerability? Email{" "}
                            <a href="mailto:security@enorve.com" className="text-white font-medium hover:underline">
                                security@enorve.com
                            </a>
                            . We respond within 48 hours.
                        </p>
                    </div>
                </motion.section>

            </div>
        </div>
    )
}
