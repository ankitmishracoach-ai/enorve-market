/**
 * Integration logos — placeholder set using lucide-react icons tinted with
 * each integration's brand color. Clean, consistent, ships today.
 *
 * TODO before public launch: swap to official brand SVGs sourced from each
 * vendor's press kit (paths in plan doc). Lucide icons are placeholders that
 * convey shape + brand color without legal/branding risk.
 */
import {
    ShoppingBag,
    ShoppingCart,
    CloudCog,
    Database,
    BookOpen,
    Mail,
    GanttChart,
    Github,
    Slack,
    Zap,
    Webhook,
    Terminal,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
    "shopify": ShoppingBag,
    "woocommerce": ShoppingCart,
    "salesforce": CloudCog,
    "attio": Database,
    "notion": BookOpen,
    "google-workspace": Mail,
    "jira": GanttChart,
    "github": Github,
    "slack": Slack,
    "zapier": Zap,
    "webhooks": Webhook,
    "custom-api": Terminal,
}

export function IntegrationLogo({
    slug,
    brandColor,
    size = 28,
}: {
    slug: string
    brandColor: string
    size?: number
}) {
    const Icon = iconMap[slug] ?? Terminal
    return (
        <span
            aria-hidden
            className="inline-flex items-center justify-center rounded-xl"
            style={{
                width: size + 16,
                height: size + 16,
                background: `${brandColor}1A`, // ~10% alpha tint
                border: `1px solid ${brandColor}33`,
            }}
        >
            <Icon size={size} color={brandColor} strokeWidth={1.6} />
        </span>
    )
}
