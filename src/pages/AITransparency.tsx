import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Brain, Shield, Eye, Ban, FileText, Settings, GitBranch, Mail, ArrowRight } from "lucide-react"
import { usePageTitle } from "../hooks/usePageTitle"

const fade = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export function AITransparency() {
    usePageTitle({
        title: "AI Transparency — How Enorve Uses AI Responsibly",
        description: "What AI models we use, what data flows where, what the AI cannot do, and how every decision is logged. Explainable by design."
    })

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* ── Hero ─────────────────────────────────────────────────── */}
                <motion.section className="mb-24 text-center" {...fade}>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                        AI that's explainable by design —<br />not as an afterthought.
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        This page documents exactly what our AI does, what data it touches, what it's prevented from doing, and how every decision is logged.
                    </p>
                </motion.section>

                {/* ── 1. What AI models we use ─────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.05 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Brain className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">What AI models we use and why</h2>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Component</th>
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Class</th>
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Purpose</th>
                                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500">Data Retention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/[0.04]">
                                    <td className="px-6 py-4 text-sm font-medium text-white">Reasoning Engine</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">Enterprise-grade</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">Conversation handling, protocol execution, auto-QA grading, knowledge retrieval</td>
                                    <td className="px-6 py-4 text-sm text-emerald-400 font-medium">Zero retention</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-white">Classification Engine</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">Lightweight</td>
                                    <td className="px-6 py-4 text-sm text-gray-400">Intent detection, sentiment classification, CSAT inference</td>
                                    <td className="px-6 py-4 text-sm text-emerald-400 font-medium">Zero retention</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        We select models based on task suitability, not brand. Conversation handling requires high reasoning capability.
                        Classification tasks that need speed over depth use lightweight, purpose-built models.
                        All AI providers operate under zero data retention agreements — your data is processed and discarded, never stored or used for training.
                        Specific providers are listed on our <a href="/subprocessors" className="text-violet-400 hover:underline">subprocessors page</a>.
                    </p>
                </motion.section>

                {/* ── 2. What data flows to the AI ─────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.1 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <GitBranch className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">What data flows to the AI</h2>
                    </div>
                    <div className="space-y-3">
                        {[
                            { label: "Conversation messages", desc: "The current conversation thread — customer messages, agent replies, and system notes. Sent per-request to generate a response or grade quality." },
                            { label: "Knowledge base context", desc: "Relevant articles and FAQs retrieved via hybrid search (keyword + vector). Only the matched excerpts are sent, not your entire knowledge base." },
                            { label: "Protocol instructions", desc: "The active protocol's objective, steps, guardrails, and blocked keywords. This governs what the AI can and cannot say." },
                            { label: "Conversation metadata", desc: "Channel type, customer name, conversation status, and tags. Used for context — the AI adapts tone and routing based on channel and priority." },
                        ].map(item => (
                            <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                                <h3 className="text-sm font-semibold text-white mb-1">{item.label}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── 3. What is explicitly excluded ───────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.15 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Eye className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">What is explicitly excluded</h2>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] divide-y divide-white/[0.04]">
                        {[
                            { title: "No training on your data", desc: "Your conversations, knowledge base, and customer data are never used to train any AI model — ours or third-party." },
                            { title: "Zero retention with AI providers", desc: "Both OpenAI and Groq process your data per-request and discard it immediately. No data is stored, cached, or logged on their side." },
                            { title: "PII auto-redaction", desc: "Before any data reaches the AI, our PII detection engine scans for and masks email addresses, phone numbers, credit card numbers, SSNs, and other sensitive patterns. This is configurable per workspace." },
                            { title: "No cross-tenant data access", desc: "Row-level security ensures the AI can only access data belonging to your tenant. There is no shared context between organizations." },
                        ].map(item => (
                            <div key={item.title} className="px-5 py-4">
                                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── 4. What the AI cannot do ─────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.2 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Ban className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">What the AI cannot do</h2>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        Most AI transparency pages explain what the AI does. This section documents what it is <span className="text-white font-medium">prevented</span> from doing.
                    </p>
                    <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] divide-y divide-red-500/[0.06]">
                        {[
                            "Make promises not defined in your active Protocol",
                            "Offer refunds above the threshold you set",
                            "Respond outside the channels you've enabled",
                            "Deviate from blocked keywords or guardrail definitions",
                            "Access customer data from other tenants (row-level security enforced)",
                            "Store conversation content after processing (zero retention)",
                            "Override a human escalation decision",
                            "Act on a conversation without a matching protocol (falls back to human)",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                                <span className="text-red-400/60 text-sm mt-0.5">&#x2715;</span>
                                <p className="text-sm text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-xs text-gray-600 font-mono">
                        These constraints are enforced at the protocol engine layer, not by prompt engineering. They cannot be bypassed by prompt injection or adversarial input.
                    </p>
                </motion.section>

                {/* ── 5. How AI decisions are logged ───────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.25 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">How AI decisions are logged and audited</h2>
                    </div>
                    <div className="space-y-3">
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2">Every AI action is recorded</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                When the AI responds to a customer, the system logs: the protocol that governed the response, the confidence score,
                                the detected intent and emotion, whether a tool was called, and whether the response was auto-sent or held for human review.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2">Quality scoring</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Every AI-resolved conversation is automatically graded on four dimensions: tone, policy compliance, resolution quality, and speed.
                                Managers can review and override scores. Low-scoring responses surface in the AI Learning panel for protocol improvement.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                            <h3 className="text-sm font-semibold text-white mb-2">Immutable audit trail</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Audit logs are append-only — no updates, no deletions. Every user action, API call, and AI decision is logged with a timestamp,
                                actor ID, and full metadata. Logs are retained per your data retention policy and available for export.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ── 6. How to disable AI ─────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.3 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Settings className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">How to disable AI processing</h2>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                        <p className="text-sm text-gray-400 leading-relaxed mb-3">
                            AI features can be controlled at multiple levels:
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Workspace-level: Disable all AI processing for your entire organization",
                                "Protocol-level: Publish or unpublish individual protocols to control which conversations get AI handling",
                                "Channel-level: Enable or disable AI on specific channels (e.g., AI on webchat but not email)",
                                "Confidence threshold: Set the minimum confidence score for auto-sending — below this, responses are held for human review",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                    <span className="text-gray-600 mt-1">&#x2022;</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 mt-3">
                            To request a complete disable of AI processing for your workspace, contact{" "}
                            <a href="mailto:support@enorve.com" className="text-violet-400 hover:underline">support@enorve.com</a>.
                        </p>
                    </div>
                </motion.section>

                {/* ── 7. Data flow diagram ─────────────────────────────────── */}
                <motion.section className="mb-16" {...fade} transition={{ delay: 0.35 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Data flow</h2>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-[#0C0E12] p-6 font-mono text-xs text-slate-300 leading-loose">
                        <pre className="overflow-x-auto whitespace-pre">{`Customer message
    │
    ▼
┌─────────────────────┐
│  PII Redaction       │  ← Masks sensitive data before AI processing
│  (emails, phones,    │
│   SSNs, card #s)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐     ┌──────────────────┐
│  Protocol Engine     │────▶│  Guardrail Check  │
│  (match active       │     │  (blocked keywords,│
│   protocol by rules) │     │   thresholds)      │
└──────────┬──────────┘     └──────────────────┘
           │
           ▼
┌─────────────────────┐
│  Reasoning Engine    │  ← Zero retention. Data discarded after response.
│  Input: conversation │
│  + protocol + KB     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐     ┌──────────────────┐
│  Confidence Check    │────▶│  Below threshold?  │──▶ Hold for human review
│  (score vs threshold)│     │  Auto-send?        │──▶ Send to customer
└──────────┬──────────┘     └──────────────────┘
           │
           ▼
┌─────────────────────┐
│  Audit Log           │  ← Immutable. Protocol ID, confidence, intent,
│  (append-only)       │    emotion, tool calls, decision outcome.
└─────────────────────┘`}</pre>
                    </div>
                </motion.section>

                {/* ── 8. Contact ───────────────────────────────────────────── */}
                <motion.section {...fade} transition={{ delay: 0.4 }}>
                    <div className="flex items-center gap-2 mb-4">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Contact for security reviews</h2>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                        <p className="text-sm text-gray-400">
                            For security reviews, DPA requests, or questions about AI data handling, contact{" "}
                            <a href="mailto:security@enorve.com" className="text-white font-medium hover:underline">security@enorve.com</a>.
                            We respond within 48 hours.
                        </p>
                    </div>
                </motion.section>

            </div>
        </div>
    )
}
