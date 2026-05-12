import { useMemo, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Loader2, Search, Webhook, Zap, Code2 } from "lucide-react"
import { Button } from "../components/ui/Button"
import { usePageTitle } from "../hooks/usePageTitle"
import { IntegrationCard } from "../components/IntegrationCard"
import { integrations, integrationCategories } from "../content/integrations"
import type { IntegrationCategory } from "../content/integrations"

// Public-by-design (RLS gates server side). Both vars are required at build time.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const fade = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4 },
}

type CategoryFilter = "all" | IntegrationCategory

export function Integrations() {
    usePageTitle({
        title: "Integrations — Enorve",
        description:
            "Plug Enorve into the stack you already use. Twelve native integrations plus webhooks, Zapier, and a custom API for anything else.",
    })

    const [params, setParams] = useSearchParams()
    const initialCategory = (params.get("category") as CategoryFilter) || "all"
    const initialQuery = params.get("q") || ""

    const [category, setCategory] = useState<CategoryFilter>(initialCategory)
    const [query, setQuery] = useState(initialQuery)

    const handleCategory = (next: CategoryFilter) => {
        setCategory(next)
        const np = new URLSearchParams(params)
        if (next === "all") np.delete("category")
        else np.set("category", next)
        setParams(np, { replace: true })
    }

    const handleQuery = (next: string) => {
        setQuery(next)
        const np = new URLSearchParams(params)
        if (!next) np.delete("q")
        else np.set("q", next)
        setParams(np, { replace: true })
    }

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return integrations.filter((i) => {
            const matchesCategory = category === "all" || i.category === category
            const matchesQuery =
                !q ||
                i.name.toLowerCase().includes(q) ||
                i.shortDescription.toLowerCase().includes(q) ||
                i.longDescription.toLowerCase().includes(q)
            return matchesCategory && matchesQuery
        })
    }, [category, query])

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient hero glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(31,168,111,0.18),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero */}
            <section className="max-w-5xl mx-auto px-6 mb-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                        Integrations
                    </p>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Plug Enorve into the stack you already use.
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Twelve native integrations. Plus webhooks, Zapier, and a custom API for
                        anything else.
                    </p>
                </motion.div>
            </section>

            {/* Filter + search */}
            <section className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        <FilterPill
                            label="All"
                            active={category === "all"}
                            onClick={() => handleCategory("all")}
                        />
                        {integrationCategories.map((cat) => (
                            <FilterPill
                                key={cat}
                                label={cat}
                                active={category === cat}
                                onClick={() => handleCategory(cat)}
                            />
                        ))}
                    </div>
                    <label className="relative w-full md:w-72">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => handleQuery(e.target.value)}
                            placeholder="Search integrations"
                            className="w-full bg-white/[0.04] border border-white/10 rounded-full text-sm text-white placeholder-gray-500 pl-9 pr-3 py-2 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-colors"
                        />
                    </label>
                </div>
            </section>

            {/* Card grid */}
            <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
                {filtered.length === 0 ? (
                    <div className="text-center py-16 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <p className="text-sm text-gray-400 mb-3">
                            No integrations match that filter.
                        </p>
                        <a
                            href="#request"
                            className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300"
                        >
                            Don&rsquo;t see your tool? Request it
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                ) : (
                    <motion.div
                        {...fade}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {filtered.map((integration) => (
                            <IntegrationCard key={integration.slug} integration={integration} />
                        ))}
                    </motion.div>
                )}
            </section>

            {/* Build your own */}
            <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
                <motion.div {...fade} className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                        Build your own
                    </p>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                        Three escape hatches when the directory isn&rsquo;t enough.
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <BuildBlock
                        icon={<Webhook className="w-5 h-5 text-teal-300" />}
                        title="Webhooks"
                        body="Subscribe to conversation, message, and ticket events. HMAC-signed payloads. Failed deliveries retried and logged."
                        href="https://app.enorve.com/docs/webhooks"
                    />
                    <BuildBlock
                        icon={<Zap className="w-5 h-5 text-orange-400" />}
                        title="Zapier"
                        body="Connect Enorve triggers and actions to any Zapier-supported app. No code; lives entirely in your Zapier account."
                        href="https://app.enorve.com/docs/integrations/zapier"
                    />
                    <BuildBlock
                        icon={<Code2 className="w-5 h-5 text-violet-300" />}
                        title="Public API"
                        body="REST endpoints, OAuth-secured, scoped tokens. Read conversations, post messages, manage protocols."
                        href="https://app.enorve.com/docs"
                    />
                </div>
            </section>

            {/* Request an integration */}
            <RequestIntegrationForm />
        </div>
    )
}

function FilterPill({
    label,
    active,
    onClick,
}: {
    label: string
    active: boolean
    onClick: () => void
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={
                "px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors border " +
                (active
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.03] text-gray-300 border-white/10 hover:bg-white/[0.06] hover:text-white")
            }
        >
            {label}
        </button>
    )
}

function BuildBlock({
    icon,
    title,
    body,
    href,
}: {
    icon: React.ReactNode
    title: string
    body: string
    href: string
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-colors p-6"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10">
                    {icon}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
        </a>
    )
}

/**
 * Inline integration request form.
 *
 * Reuses the existing /functions/v1/contact-sales edge function with
 * `looking_for: "Integration Request"` so submissions route to the
 * integrations triage queue without standing up a new endpoint.
 */
function RequestIntegrationForm() {
    const [email, setEmail] = useState("")
    const [tool, setTool] = useState("")
    const [useCase, setUseCase] = useState("")
    const [state, setState] = useState<"idle" | "submitting" | "ok" | "error">("idle")
    const [error, setError] = useState("")

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        if (!email || !tool) {
            setError("Email and tool name are required.")
            return
        }
        setState("submitting")
        try {
            const res = await fetch(`${SUPABASE_URL}/functions/v1/contact-sales`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                    name: email.split("@")[0] || "Integration request",
                    email,
                    company: "",
                    team_size: "",
                    monthly_volume: "",
                    looking_for: "Integration Request",
                    message: `[Integration Request]\nTool: ${tool}\n\nUse case: ${useCase || "(not provided)"}`,
                }),
            })
            const data = await res.json().catch(() => ({}))
            if (!res.ok) throw new Error(data?.error || "Failed to submit")
            setState("ok")
        } catch (err) {
            setState("error")
            setError((err as Error).message)
        }
    }

    return (
        <section id="request" className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div
                {...fade}
                className="rounded-2xl border border-white/[0.06] bg-[#0C0E12]/80 backdrop-blur p-8 md:p-10"
            >
                {state === "ok" ? (
                    <div className="text-center py-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-1">
                            Got it &mdash; thanks
                        </h3>
                        <p className="text-sm text-gray-400">
                            We&rsquo;ll add this to the integration triage queue and email you when
                            it ships.
                        </p>
                    </div>
                ) : (
                    <>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                            Don&rsquo;t see your tool?
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-2 tracking-tight">
                            Tell us what to wire up next.
                        </h2>
                        <p className="text-sm text-gray-400 mb-6">
                            We prioritise integrations by signal. The more specific your use case,
                            the faster it climbs.
                        </p>

                        {error && (
                            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-gray-400 mb-1.5">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 px-3 py-2.5 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-400 mb-1.5">
                                        Tool name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={tool}
                                        onChange={(e) => setTool(e.target.value)}
                                        placeholder="e.g. Linear, Klaviyo"
                                        className="w-full bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 px-3 py-2.5 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-400 mb-1.5">
                                    Use case (optional)
                                </label>
                                <textarea
                                    value={useCase}
                                    onChange={(e) => setUseCase(e.target.value)}
                                    placeholder="What would you wire it up for?"
                                    rows={3}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 px-3 py-2.5 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-colors resize-none"
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4 pt-2">
                                <p className="text-xs text-gray-500">
                                    Or{" "}
                                    <Link
                                        to="/contact-sales"
                                        className="text-gray-300 hover:text-white underline"
                                    >
                                        talk to sales
                                    </Link>{" "}
                                    for a deeper conversation.
                                </p>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={state === "submitting"}
                                >
                                    {state === "submitting" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Submitting&hellip;
                                        </>
                                    ) : (
                                        <>
                                            Send request
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </>
                )}
            </motion.div>
        </section>
    )
}
