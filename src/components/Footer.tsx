import { Link } from "react-router-dom"
import { EnorveLogoFull } from "./ui/Logo"

const footerLinks = {
    product: {
        title: "Product",
        links: [
            { label: "AI Copilot", href: "/product/ai-copilot" },
            { label: "Inbox", href: "/product/inbox" },
            { label: "Automation", href: "/product/automation" },
            { label: "Knowledge Base", href: "/product/knowledge-base" },
            { label: "Analytics", href: "/product/analytics" },
            { label: "Protocol Engine", href: "/product/protocols" },
        ]
    },
    solutions: {
        title: "Solutions",
        links: [
            { label: "Customer Support", href: "/solutions/customer-support" },
            { label: "E-commerce", href: "/solutions/ecommerce" },
            { label: "SaaS", href: "/solutions/saas" },
            { label: "Founders", href: "/solutions/founders" },
        ]
    },
    resources: {
        title: "Resources",
        links: [
            { label: "API Docs", href: "https://app.enorve.com/docs", external: true },
            { label: "AI Simulator", href: "/ai-simulator" },
            { label: "Cost Calculator", href: "/calculator" },
            { label: "ROI Calculator", href: "/labor-replacement-calculator" },
            { label: "Help Center", href: "https://app.enorve.com/help-center", external: true },
            { label: "Blog", href: "https://blog.enorve.com", external: true },
            { label: "Status", href: "https://app.enorve.com/status", external: true },
        ]
    },
    company: {
        title: "Company",
        links: [
            { label: "Security", href: "/security" },
            { label: "AI Transparency", href: "/ai-transparency" },
            { label: "Contact Sales", href: "/contact-sales" },
        ]
    },
    legal: {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookie Policy", href: "/cookie-policy" },
            { label: "DPA", href: "/dpa" },
            { label: "Subprocessors", href: "/subprocessors" },
        ]
    }
}

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-12 justify-items-center lg:justify-items-start">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link to="/" className="flex items-center mb-4">
                            <EnorveLogoFull className="h-[26px] text-white" variant="dark" />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            AI that follows your rules. Not its own.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.product.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.solutions.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.resources.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.links.map((link) => (
                                <li key={link.href}>
                                    {'external' in link && link.external ? (
                                        <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.company.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4">{footerLinks.legal.title}</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.links.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Security Capabilities (Safe Language) */}
                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Secure by design</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Encrypted in transit & at rest</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>PII redaction on AI inputs</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a href="https://x.com/enorve_ai" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/enorve_ai/" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
