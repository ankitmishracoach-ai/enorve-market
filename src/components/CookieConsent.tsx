import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

/**
 * CookieConsent — GDPR/CCPA-compliant analytics gate.
 *
 * Until the visitor explicitly accepts, no analytics scripts load.
 * On accept: stores a flag in localStorage and calls window.enorveLoadAnalytics()
 * (defined in index.html) to actually attach gtag. On reject: stores a "rejected"
 * flag and never loads analytics for this device.
 *
 * Choices are persisted in localStorage. To re-trigger the banner the visitor
 * clears site data — documented on the Cookie Policy page.
 */

const STORAGE_KEY = "enorve_cookie_consent"
type Consent = "accepted" | "rejected" | null

declare global {
    interface Window {
        enorveLoadAnalytics?: () => void
        enorveAnalyticsLoaded?: boolean
    }
}

function readConsent(): Consent {
    if (typeof window === "undefined") return null
    try {
        const v = window.localStorage.getItem(STORAGE_KEY)
        if (v === "accepted" || v === "rejected") return v
    } catch {
        // localStorage disabled — treat as no decision; banner shows, nothing persists
    }
    return null
}

function writeConsent(v: Exclude<Consent, null>): void {
    try {
        window.localStorage.setItem(STORAGE_KEY, v)
    } catch {
        // ignore — banner just shows again next visit
    }
}

export function CookieConsent() {
    const [visible, setVisible] = useState(false)

    // Mount: if previously accepted, attach analytics; otherwise show banner.
    useEffect(() => {
        const current = readConsent()
        if (current === "accepted") {
            if (typeof window.enorveLoadAnalytics === "function" && !window.enorveAnalyticsLoaded) {
                window.enorveLoadAnalytics()
            }
        } else if (current === null) {
            setVisible(true)
        }
    }, [])

    const accept = () => {
        writeConsent("accepted")
        setVisible(false)
        if (typeof window.enorveLoadAnalytics === "function" && !window.enorveAnalyticsLoaded) {
            window.enorveLoadAnalytics()
        }
    }

    const reject = () => {
        writeConsent("rejected")
        setVisible(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-describedby="cookie-consent-message"
                    className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 md:max-w-md z-[60]"
                >
                    <div className="rounded-2xl border border-white/10 bg-[#0C0E12]/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-5">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-white mb-1">We use cookies</p>
                                <p id="cookie-consent-message" className="text-xs text-gray-400 leading-relaxed">
                                    Strictly necessary cookies are always on. Analytics cookies (Google Analytics)
                                    only load if you accept &mdash; we use them to understand aggregate traffic, with
                                    IP anonymisation. See our{" "}
                                    <Link to="/cookie-policy" className="text-white underline hover:text-emerald-300">
                                        Cookie Policy
                                    </Link>
                                    .
                                </p>
                            </div>
                            <button
                                onClick={reject}
                                aria-label="Reject analytics cookies"
                                className="text-gray-500 hover:text-white transition-colors p-1 -m-1"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={reject}
                                className="flex-1 text-xs font-medium text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full px-4 py-2.5 transition-colors"
                            >
                                Reject analytics
                            </button>
                            <button
                                onClick={accept}
                                className="flex-1 text-xs font-medium text-black bg-white hover:bg-gray-200 rounded-full px-4 py-2.5 transition-colors"
                            >
                                Accept all
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
