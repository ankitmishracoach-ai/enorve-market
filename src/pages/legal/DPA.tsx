import { motion } from "framer-motion"
import { usePageTitle } from "../../hooks/usePageTitle"

const fade = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4 },
}

export function DPA() {
    usePageTitle({
        title: "Data Processing Agreement — Enorve",
        description: "Enorve's standard Data Processing Agreement (DPA) for customers processing personal data through the Enorve service.",
    })

    return (
        <div className="min-h-screen bg-[#0C0E12] pt-32 pb-24 text-gray-200">
            <div className="max-w-3xl mx-auto px-6">
                <motion.header {...fade} className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">
                        Data Processing Agreement
                    </h1>
                    <p className="text-sm text-gray-500">Last updated: 12 May 2026</p>
                </motion.header>

                <motion.section {...fade} className="space-y-6 text-sm leading-relaxed text-gray-300">
                    <p>
                        This Data Processing Agreement (&ldquo;DPA&rdquo;) supplements the Enorve Terms of Service and
                        governs the processing of Customer Personal Data by Enorve as a Processor under applicable data
                        protection law, including the EU/UK GDPR and California Consumer Privacy Act (CCPA/CPRA).
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">1. Roles</h2>
                    <p>
                        Customer is the Controller of Customer Personal Data. Enorve processes that data on the
                        Customer&rsquo;s documented instructions, as a Processor.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">2. Scope of processing</h2>
                    <p>
                        Categories of data, categories of data subjects, and processing operations are described in
                        Annex 1 of the executable DPA. The subject matter is the provision of the Enorve service:
                        customer conversation handling, AI-assisted responses, knowledge-base retrieval, analytics,
                        and related features.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">3. Subprocessors</h2>
                    <p>
                        Enorve&rsquo;s current list of subprocessors is published at{" "}
                        <a href="/subprocessors" className="text-white underline">/subprocessors</a> and updated on
                        material change with reasonable advance notice.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">4. Security</h2>
                    <p>
                        Enorve implements the technical and organisational measures described on the{" "}
                        <a href="/security" className="text-white underline">Security</a> page, including encryption
                        in transit and at rest, role-based access controls, and PII redaction on AI inputs.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">5. International transfers</h2>
                    <p>
                        Where Customer Personal Data is transferred outside the EEA/UK, Enorve relies on the EU
                        Standard Contractual Clauses (2021/914) and the UK Addendum, supplemented by additional
                        safeguards as required.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">6. Data subject rights</h2>
                    <p>
                        Enorve assists Customer in responding to data subject requests (access, rectification,
                        erasure, restriction, portability, objection) within the timelines required by law.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">7. Incident notification</h2>
                    <p>
                        Enorve notifies Customer without undue delay (and in any case within 72 hours) of becoming
                        aware of a Personal Data Breach affecting Customer Personal Data.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">8. Audit</h2>
                    <p>
                        On reasonable written request, Enorve will provide information necessary to demonstrate
                        compliance with this DPA, including SOC 2 reports when available (target Q3 2026) and the
                        results of internal assessments.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">9. Return or deletion</h2>
                    <p>
                        On termination, Customer Personal Data is deleted within 30 days, except where retention is
                        required by law.
                    </p>

                    <h2 className="text-xl font-medium text-white pt-6">10. Executing the DPA</h2>
                    <p>
                        Customers requiring a counter-signed DPA can request one by emailing{" "}
                        <a href="mailto:privacy@enorve.com" className="text-white underline">privacy@enorve.com</a>{" "}
                        with their legal entity name, address, and signatory contact. Standard turnaround is two
                        business days.
                    </p>

                    <p className="pt-6 text-xs text-gray-500">
                        This page is a summary of Enorve&rsquo;s standard DPA. The executable agreement, with annexes
                        and the SCC modules, is provided on request.
                    </p>
                </motion.section>
            </div>
        </div>
    )
}
