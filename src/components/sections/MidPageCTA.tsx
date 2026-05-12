import { ArrowRight } from "lucide-react"
import { goToSignup } from "../../lib/constants"

export function MidPageCTA() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative p-8 md:p-10 rounded-[24px] bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent border border-violet-500/20 text-center overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31, 168, 111,0.15),transparent_70%)]" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                            Let AI run your support. Stay in control.
                        </h2>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                            See how AI resolves conversations end-to-end, without human intervention.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button
                                onClick={goToSignup}
                                className="bg-white text-black font-medium text-sm h-11 px-6 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Start free trial
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
