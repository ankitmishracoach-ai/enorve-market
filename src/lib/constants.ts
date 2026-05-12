/**
 * Site-wide constants.
 *
 * SIGNUP_URL — canonical signup entry on the app. Used by every "Start free
 * trial" / "Get early access" CTA across the marketing site. Trial product
 * spec: 14 days, 25 AI resolutions, no credit card required.
 */
export const SIGNUP_URL = "https://app.enorve.com/auth"
export const LOGIN_URL = "https://app.enorve.com/"

/**
 * Navigate to the signup page. Used as an onClick handler in place of the
 * legacy waitlist modal. Assigns rather than replaces so the marketing page
 * stays in browser history (back button works).
 */
export function goToSignup(): void {
    window.location.assign(SIGNUP_URL)
}
