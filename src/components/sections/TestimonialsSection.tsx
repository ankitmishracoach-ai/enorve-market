import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react"
import { goToSignup } from "../../lib/constants"

const capabilities = [
    {
        icon: Sparkles,
        title: "AI resolves common questions instantly",
        description: "Refund status, shipping info, product questions — handled automatically, 24/7.",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },
    {
        icon: Users,
        title: "Your team handles the complex stuff",
        description: "AI knows when to step back. Sensitive issues get routed to the right person, with full context.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        icon: Zap,
        title: "Set up in minutes, not weeks",
        description: "Connect your channels, upload your knowledge base, and let AI start learning your business.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-gradient">Built for teams</span>
                        <br />
                        <span className="text-white">who put customers first.</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Join support teams using Enorve to deliver faster, more consistent customer experiences.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className={`w-12 h-12 rounded-xl ${cap.bg} border ${cap.border} flex items-center justify-center mb-5`}>
                                <cap.icon className={`w-6 h-6 ${cap.color}`} />
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button
                        onClick={goToSignup}
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer"
                    >
                        Start free trial
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
