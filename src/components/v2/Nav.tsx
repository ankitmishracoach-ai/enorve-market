import { Link } from "react-router-dom"
import { homeV2 } from "../../content/home.v2"

/**
 * v2 sticky nav — transparent over the hero, solid on scroll.
 * Simple implementation; can absorb dropdowns later.
 */
export function V2Nav() {
    const { brand, links, talkToSales, login, cta } = homeV2.nav

    return (
        <header
            className="sticky top-0 z-40 w-full"
            style={{
                background: "rgba(11, 24, 18, 0.72)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--brand-line-on-dark)",
            }}
        >
            <div
                className="v2-container flex items-center justify-between"
                style={{ height: 64 }}
            >
                {/* Left: brand */}
                <Link
                    to="/v2"
                    className="flex items-center gap-2"
                    style={{ color: "var(--brand-text-on-dark)", textDecoration: "none" }}
                >
                    <BrandMark />
                    <span
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 20,
                            fontWeight: 600,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {brand}
                    </span>
                </Link>

                {/* Center: primary nav links */}
                <nav className="hidden md:flex items-center" style={{ gap: 28 }}>
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            style={{
                                color: "var(--brand-text-on-dark-muted)",
                                fontSize: 14,
                                fontWeight: 500,
                                textDecoration: "none",
                                transition: "color 160ms ease",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--brand-text-on-dark)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--brand-text-on-dark-muted)")
                            }
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* Right: talk-to-sales, login, primary CTA */}
                <div className="hidden md:flex items-center" style={{ gap: 20 }}>
                    <a
                        href={talkToSales.href}
                        style={{
                            color: "var(--brand-text-on-dark-muted)",
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: "none",
                        }}
                    >
                        {talkToSales.label}
                    </a>
                    <a
                        href={login.href}
                        style={{
                            color: "var(--brand-text-on-dark-muted)",
                            fontSize: 14,
                            fontWeight: 500,
                            textDecoration: "none",
                        }}
                    >
                        {login.label}
                    </a>
                    <a href={cta.href} className="v2-btn v2-btn-light">
                        {cta.label}
                    </a>
                </div>
            </div>
        </header>
    )
}

function BrandMark() {
    // Stylized "e" mark — lightweight SVG version of the auth-page logo.
    // Real mark gets swapped in when we lift the production SVG.
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle
                cx="14"
                cy="14"
                r="12"
                stroke="var(--brand-primary-soft)"
                strokeWidth="2"
            />
            <path
                d="M8 14h12M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6"
                stroke="var(--brand-primary-soft)"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    )
}
