import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { ScrollToTop } from "./components/ScrollToTop"
import { CookieConsent } from "./components/CookieConsent"
import { Home } from "./pages/Home"

// Product Pages
import { AICopilot } from "./pages/product/AICopilot"
import { Inbox } from "./pages/product/Inbox"
import { Automation } from "./pages/product/Automation"
import { KnowledgeBase } from "./pages/product/KnowledgeBase"
import { Analytics } from "./pages/product/Analytics"
import { Protocols } from "./pages/product/Protocols"
import { Campaigns } from "./pages/product/Campaigns"
import { Integrations } from "./pages/Integrations"

// Solutions Pages
import { CustomerSupport } from "./pages/solutions/CustomerSupport"
import { Ecommerce } from "./pages/solutions/Ecommerce"
import { SaaS } from "./pages/solutions/SaaS"
import { Founders } from "./pages/solutions/Founders"

// Trust & Security Pages
import { Pricing } from "./pages/Pricing"
import { ROICalculator } from "./pages/ROICalculator"
import { CostPerTicketCalculator } from "./pages/CostPerTicketCalculator"
import { Security } from "./pages/Security"
import { AISimulator } from "./pages/AISimulator"
import { AITransparency } from "./pages/AITransparency"
import { DemoVideo } from "./pages/DemoVideo"

// Company Pages
import { ContactSales } from "./pages/company/Contact"

// Legal Pages
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy"
import { TermsOfService } from "./pages/legal/TermsOfService"
import { Subprocessors } from "./pages/legal/Subprocessors"
import { CookiePolicy } from "./pages/legal/CookiePolicy"
import { DPA } from "./pages/legal/DPA"

// 404 Page
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Full-screen pages — no layout */}
        <Route path="/demo-video" element={<DemoVideo />} />

        <Route element={<MainLayout />}>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Product Routes */}
          <Route path="/product/ai-copilot" element={<AICopilot />} />
          <Route path="/product/inbox" element={<Inbox />} />
          <Route path="/product/automation" element={<Automation />} />
          <Route path="/product/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/product/analytics" element={<Analytics />} />
          <Route path="/product/protocols" element={<Protocols />} />
          <Route path="/product/campaigns" element={<Campaigns />} />
          <Route path="/integrations" element={<Integrations />} />

          {/* Solutions Routes */}
          <Route path="/solutions/customer-support" element={<CustomerSupport />} />
          <Route path="/solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/solutions/saas" element={<SaaS />} />
          <Route path="/solutions/founders" element={<Founders />} />

          {/* Trust & Security Routes */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/calculator" element={<CostPerTicketCalculator />} />
          <Route path="/labor-replacement-calculator" element={<ROICalculator />} />
          <Route path="/roi-calculator" element={<Navigate to="/labor-replacement-calculator" replace />} />
          <Route path="/security" element={<Security />} />
          <Route path="/ai-transparency" element={<AITransparency />} />
          <Route path="/ai-simulator" element={<AISimulator />} />

          {/* Company Routes */}
          <Route path="/contact-sales" element={<ContactSales />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/subprocessors" element={<Subprocessors />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/dpa" element={<DPA />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}

export default App
