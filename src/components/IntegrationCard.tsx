import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import type { Integration } from "../content/integrations"
import { IntegrationLogo } from "./IntegrationLogos"

/**
 * Card for the /integrations directory.
 *
 * Behaviour:
 *  - One-line `shortDescription` shown by default
 *  - On hover (and focus-within for keyboard a11y), expand to the
 *    longer `longDescription`
 *  - Whole card is a link to the docs page on the app domain
 */
export function IntegrationCard({ integration }: { integration: Integration }) {
    const [hover, setHover] = useState(false)

    return (
        <a
            href={integration.docsHref}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-colors duration-200 p-5 min-h-[160px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
        >
            <div className="flex items-start justify-between mb-4">
                <IntegrationLogo
                    slug={integration.slug}
                    brandColor={integration.brandColor}
                    size={22}
                />
                <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </div>

            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base font-medium text-white">{integration.name}</h3>
                </div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-2">
                    {integration.category}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {hover ? integration.longDescription : integration.shortDescription}
                </p>
            </div>
        </a>
    )
}
