import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { GlowButton, Button } from "../ui/Button"
import { goToSignup } from "../../lib/constants"

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/20 to-transparent blur-3xl" />

            <div className="max-w-4xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="text-gray-400">Your competitors are already adding AI to support.</span>
                        <br />
                        <span className="text-white">The difference is whether it follows your rules.</span>
                    </h2>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                        <GlowButton onClick={goToSignup}>
                            Start free trial
                        </GlowButton>
                        <Link to="/contact-sales">
                            <Button variant="outline" size="lg">
                                Talk to Sales
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

