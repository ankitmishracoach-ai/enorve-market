import { ChannelStrip } from "../components/sections/ChannelStrip"
import { GovernedAutonomySection } from "../components/sections/GovernedAutonomySection"
import { PlatformSection } from "../components/sections/PlatformSection"
import { AIEngineSection } from "../components/sections/AIEngineSection"
import { LanguagesSection } from "../components/sections/LanguagesSection"
import { FeatureGridSection } from "../components/sections/FeatureGridSection"
import { EnterpriseSecuritySection } from "../components/sections/EnterpriseSecuritySection"
import { EnterpriseReadySection } from "../components/sections/EnterpriseReadySection"
import { ConnectStackSection } from "../components/sections/ConnectStackSection"
import { CTASection } from "../components/sections/CTASection"
import { MidPageCTA } from "../components/sections/MidPageCTA"
import { Hero } from "../components/Hero"
import { InboxPreview } from "../components/sections/InboxPreview"
import { usePageTitle } from "../hooks/usePageTitle"
import { useStructuredData, createOrganizationSchema, createSoftwareApplicationSchema } from "../hooks/useStructuredData"

export function Home() {
    usePageTitle({
        title: "Enorve — AI Customer Support That Follows Your Rules",
        description: "Define how your AI handles refunds, complaints, and escalations. Stress-test before customers see it. Built for e-commerce teams."
    })

    // Add structured data for SEO
    useStructuredData([
        createOrganizationSchema(),
        createSoftwareApplicationSchema()
    ])

    return (
        <>
            <Hero />
            <InboxPreview />
            <ChannelStrip />
            <PlatformSection />
            <FeatureGridSection />
            <AIEngineSection />
            <GovernedAutonomySection />
            <LanguagesSection />
            <MidPageCTA />
            <ConnectStackSection />
            <EnterpriseReadySection />
            <CTASection />
        </>
    )
}
