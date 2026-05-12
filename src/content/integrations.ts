/**
 * Integrations directory — source of truth for the /integrations page.
 *
 * RULES (per founder + MARKETING_SITE_BRIEF 2026-05-04):
 *   - Only list integrations actually WIRED in ai-dm-assist
 *     (edge function + callback page or equivalent)
 *   - Never list "Coming Soon" — wait until shipped
 *   - No "Best for…", no fake usage numbers, no exclusivity claims
 *   - One-line description shown on card; full 2-line on hover
 *
 * Currently OFF this list (do not add without re-verifying scope):
 *   Freshdesk, Zendesk, Klaviyo, Intercom, FB Messenger, Telegram,
 *   HubSpot, BigCommerce, Stripe.
 */

export type IntegrationCategory =
    | "Commerce"
    | "CRM"
    | "Productivity"
    | "Engineering"
    | "Communication"
    | "Workflow"

export type Integration = {
    slug: string
    name: string
    category: IntegrationCategory
    shortDescription: string // one line, shown on card
    longDescription: string  // 2 lines, shown on hover
    /** Brand color used as the logo tint. */
    brandColor: string
    /** Marketing page or app docs deep-link. */
    docsHref: string
}

export const integrationCategories: IntegrationCategory[] = [
    "Commerce",
    "CRM",
    "Productivity",
    "Engineering",
    "Communication",
    "Workflow",
]

export const integrations: Integration[] = [
    {
        slug: "shopify",
        name: "Shopify",
        category: "Commerce",
        shortDescription: "Order context inside every conversation.",
        longDescription:
            "Sync orders, customer lifetime value, and fulfillment status. The AI cites order data when answering refund and shipping questions.",
        brandColor: "#96BF48",
        docsHref: "https://app.enorve.com/docs/integrations/shopify",
    },
    {
        slug: "woocommerce",
        name: "WooCommerce",
        category: "Commerce",
        shortDescription: "Pull order and product context from Woo.",
        longDescription:
            "Connect a WooCommerce store, sync orders and products, and let the AI answer order-status questions with real data.",
        brandColor: "#7F54B3",
        docsHref: "https://app.enorve.com/docs/integrations/woocommerce",
    },
    {
        slug: "salesforce",
        name: "Salesforce",
        category: "CRM",
        shortDescription: "Two-way sync of contacts, accounts, and opportunities.",
        longDescription:
            "Read account context into conversations and write activity back into Salesforce records. OAuth secured, field mapping configurable.",
        brandColor: "#00A1E0",
        docsHref: "https://app.enorve.com/docs/integrations/salesforce",
    },
    {
        slug: "attio",
        name: "Attio",
        category: "CRM",
        shortDescription: "Modern CRM sync — notes, tasks, and deals.",
        longDescription:
            "Write conversation notes, tasks, and deal updates from any thread. Attio companies and people show up inline beside the conversation.",
        brandColor: "#FFD24E",
        docsHref: "https://app.enorve.com/docs/integrations/attio",
    },
    {
        slug: "notion",
        name: "Notion",
        category: "Productivity",
        shortDescription: "Import knowledge base articles from your workspace.",
        longDescription:
            "Connect a Notion workspace, pick the databases the AI is allowed to read, and watch your KB stay in sync with your team's docs.",
        brandColor: "#FFFFFF",
        docsHref: "https://app.enorve.com/docs/integrations/notion",
    },
    {
        slug: "google-workspace",
        name: "Google Workspace",
        category: "Productivity",
        shortDescription: "Gmail sync and Drive-based KB import.",
        longDescription:
            "Connect Gmail to handle email tickets, and pull Drive docs into the knowledge base. OAuth-scoped to the mailboxes you choose.",
        brandColor: "#4285F4",
        docsHref: "https://app.enorve.com/docs/integrations/google-workspace",
    },
    {
        slug: "jira",
        name: "Jira",
        category: "Engineering",
        shortDescription: "Create issues from conversations; sync status both ways.",
        longDescription:
            "Escalate a conversation into a Jira issue, link the issue back, and have the conversation update automatically when the issue moves.",
        brandColor: "#2684FF",
        docsHref: "https://app.enorve.com/docs/integrations/jira",
    },
    {
        slug: "github",
        name: "GitHub",
        category: "Engineering",
        shortDescription: "Create issues and link PRs to bug reports.",
        longDescription:
            "Turn customer bug reports into GitHub issues with conversation context attached. Status changes flow back to the customer thread.",
        brandColor: "#FFFFFF",
        docsHref: "https://app.enorve.com/docs/integrations/github",
    },
    {
        slug: "slack",
        name: "Slack",
        category: "Communication",
        shortDescription: "Alerts, agent replies, and daily digests.",
        longDescription:
            "Route conversation alerts to the right channel, let agents reply from Slack, and get daily team digests pinned where you already work.",
        brandColor: "#4A154B",
        docsHref: "https://app.enorve.com/docs/integrations/slack",
    },
    {
        slug: "zapier",
        name: "Zapier",
        category: "Workflow",
        shortDescription: "5,000+ apps via Zapier triggers and actions.",
        longDescription:
            "Connect Enorve events (conversation created, resolved, escalated) to anything Zapier supports — no code required.",
        brandColor: "#FF4A00",
        docsHref: "https://app.enorve.com/docs/integrations/zapier",
    },
    {
        slug: "webhooks",
        name: "Webhooks",
        category: "Workflow",
        shortDescription: "Signed event payloads with delivery logs.",
        longDescription:
            "Subscribe to conversation, message, and ticket events. Payloads are HMAC-signed; failed deliveries are retried and logged in the dashboard.",
        brandColor: "#00C7BE",
        docsHref: "https://app.enorve.com/docs/integrations/webhooks",
    },
    {
        slug: "custom-api",
        name: "Custom API",
        category: "Workflow",
        shortDescription: "Post conversations from anywhere to a single endpoint.",
        longDescription:
            "POST messages to a single endpoint and they appear in your inbox like any other channel. Use it for proprietary tools or in-app chat.",
        brandColor: "#9CA3AF",
        docsHref: "https://app.enorve.com/docs/integrations/custom-api",
    },
]
