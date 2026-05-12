import { motion } from "framer-motion"
import { Download, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/Button"
import { useROICalculator } from "../hooks/useROICalculator"
import { InputPanel } from "../components/roi/InputPanel"
import { ExecutiveSummary } from "../components/roi/ExecutiveSummary"
import { HeadcountChart } from "../components/roi/HeadcountChart"
import { CostBreakdownChart } from "../components/roi/CostBreakdownChart"
import { ProjectionChart } from "../components/roi/ProjectionChart"
import { generateROIPdf } from "../utils/roiPdfExport"
import { usePageTitle } from "../hooks/usePageTitle"
import { goToSignup } from "../lib/constants"

export function ROICalculator() {
    const { inputs, setInput, results } = useROICalculator()
    usePageTitle({
        title: "AI Support ROI Calculator — Estimate Your Savings",
        description: "Calculate how much you can save by automating customer support. Enter your team size, salary, and volume to see projected ROI."
    })

    return (
        <div className="pt-32 pb-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.3),rgba(255,255,255,0))] pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-emerald-400 font-medium">Labor Economics</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Labor Replacement Calculator
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                            How many support FTEs can Enorve replace? Input your team, cost, and volume — see the economics in real-time.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                        <Button
                            variant="outline"
                            size="md"
                            onClick={() => generateROIPdf(inputs, results)}
                            icon={<Download className="w-4 h-4" />}
                            iconPosition="left"
                        >
                            Download Report
                        </Button>
                        <button
                            onClick={goToSignup}
                            className="group flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            Start free trial
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Calculator Grid */}
            <section className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[320px,1fr] gap-8">
                    {/* Inputs */}
                    <InputPanel inputs={inputs} onInputChange={setInput} />

                    {/* Results */}
                    <div className="space-y-8">
                        {/* Warnings */}
                        {results.warnings.length > 0 && (
                            <div className="space-y-3">
                                {results.warnings.map((w, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30"
                                    >
                                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-amber-400/80">{w}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Executive Summary */}
                        <ExecutiveSummary results={results} />

                        {/* Charts Grid */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            <HeadcountChart results={results} />
                            <CostBreakdownChart results={results} />
                        </div>

                        {/* Projection */}
                        <ProjectionChart results={results} />

                        {/* Enorve plan info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="p-6 rounded-2xl bg-[#0C0E12] border border-white/5"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Enorve Plan Used</h3>
                                    <p className="text-lg font-medium text-white">{results.enorveMonthlyPlan} Plan</p>
                                    <p className="text-sm text-gray-400">
                                        ${results.enorveMonthlyPlanCost}/mo • Based on {inputs.monthlyConversations.toLocaleString()} conversations/mo
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-emerald-400">${results.enorveAnnualCost.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">annual platform cost</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="max-w-7xl mx-auto px-6 mt-12 relative z-10">
                <p className="text-[11px] text-gray-600 leading-relaxed max-w-3xl">
                    This calculator provides estimates based on the inputs provided. Actual results may vary based on
                    conversation complexity, AI training, and operational factors. Enorve pricing is based on current list prices.
                    Consult your financial advisor for decisions involving significant capital allocation.
                </p>
            </section>
        </div>
    )
}
