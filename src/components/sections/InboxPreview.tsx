/**
 * InboxPreview — replaces the SimulatorTeaser slot.
 *
 * Shows a real screenshot of the Enorve inbox in a macOS-style browser frame.
 * Honors capability-framing and the SAMPLE DATA disclaimer rule (Enorve has
 * zero paying customers — every dashboard mockup must be labeled illustrative).
 */
export function InboxPreview() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden" id="inbox-preview">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Eyebrow + headline */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                        The Inbox
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-white mb-4">
                        Every conversation, with the AI&rsquo;s reasoning beside it.
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        See what the AI cited, why it escalated, and where it stalled &mdash; beside every conversation, not buried in a log.
                    </p>
                </div>

                {/* Browser-framed screenshot — full-width so detail is readable */}
                <figure
                    className="relative mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-[#0a0a0a]"
                >
                    {/* macOS-style top bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#28c940]" />
                        <span className="ml-4 inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path
                                    d="M3.5 5.5V4a2.5 2.5 0 015 0v1.5M2.5 5.5h7v5h-7v-5z"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>app.enorve.com</span>
                            <span className="text-gray-600">/conversations</span>
                        </span>
                    </div>

                    {/* The screenshot */}
                    <img
                        src="/screenshots/inbox-overview.png"
                        alt="Enorve inbox — open conversation with AI Copilot rail showing context brief and confidence score"
                        className="block w-full h-auto"
                        loading="lazy"
                    />

                    {/* Sample-data badge — required by no-fake-metrics rule */}
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-300">
                        Sample data &mdash; illustrative only
                    </div>
                </figure>
            </div>
        </section>
    )
}
