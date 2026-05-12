import { motion } from "framer-motion"
import { usePageTitle } from "../../hooks/usePageTitle"

const fade = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4 },
}

export function CookiePolicy() {
    usePageTitle({
        title: "Cookie Policy — Enorve",
        description: "How Enorve uses cookies and similar technologies on enorve.com and app.enorve.com.",
    })

    return (
        <div className="min-h-screen bg-[#0C0E12] pt-32 pb-24 text-gray-200">
            <div className="max-w-3xl mx-auto px-6">
                <motion.header {...fade} className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Cookie Policy</h1>
                    <p className="text-sm text-gray-500">Last updated: 12 May 2026</p>
                </motion.header>

                <motion.section {...fade} className="space-y-6 text-sm leading-relaxed text-gray-300">
                    <p>
                        This Cookie Policy explains how Enorve (&ldquo;we&rdquo;, &ldquo;us&rdquo;) uses cookies and
                        similar tracking technologies on <a href="https://enorve.com" className="text-white underline">enorve.com</a>{" "}
                        and the Enorve product at <a href="https://app.enorve.com" className="text-white underline">app.enorve.com</a>.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">1. What cookies are</h2>
                    <p>
                        Cookies are small text files stored on your device when you visit a website. They allow the
                        site to recognise your browser on subsequent visits and to remember preferences or actions.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">2. Categories we use</h2>
                    <div className="space-y-4">
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="font-medium text-white mb-1">Strictly necessary</p>
                            <p className="text-gray-400">
                                Required for the site to function. Includes session cookies for authentication on
                                app.enorve.com and CSRF tokens. Cannot be disabled.
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="font-medium text-white mb-1">Analytics (opt-in)</p>
                            <p className="text-gray-400">
                                Google Analytics 4 (GA4) measures aggregate traffic patterns. IP addresses are
                                anonymised. Fires only after explicit consent via the banner. You can withdraw consent
                                at any time by clearing this site&rsquo;s storage.
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="font-medium text-white mb-1">Marketing</p>
                            <p className="text-gray-400">None at this time. We do not run remarketing pixels.</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-medium text-white pt-6">3. Managing consent</h2>
                    <p>
                        On your first visit, a banner asks for consent to analytics cookies. Until you accept, no
                        analytics scripts load. To change your choice later, clear cookies and site data for
                        enorve.com in your browser settings; the banner will reappear on your next visit.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">4. Browser controls</h2>
                    <p>
                        Most browsers let you refuse cookies entirely or alert you when one is set. Doing so will not
                        affect site availability. See your browser&rsquo;s help pages for instructions.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">5. Contact</h2>
                    <p>
                        Questions: <a href="mailto:privacy@enorve.com" className="text-white underline">privacy@enorve.com</a>.
                    </p>
                </motion.section>
            </div>
        </div>
    )
}
