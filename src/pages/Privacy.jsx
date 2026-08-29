import PageHero from "../components/PageHero";
import { COMPANY_EMAIL } from "../data/content";

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "We may collect information such as your name, company name, email address, mobile number, business details, enquiry details and technical information such as IP address, browser and website usage data. Where required for onboarding or providing services, we may also collect business verification, KYC and related information.",
  },
  {
    heading: "How We Use Your Information",
    list: [
      "Respond to enquiries and requests",
      "Process business/partner applications",
      "Provide and improve our services",
      "Complete KYC and verification requirements",
      "Provide customer and technical support",
      "Maintain security and prevent fraud",
      "Comply with applicable legal and regulatory requirements",
    ],
  },
  {
    heading: "Sharing of Information",
    body: "We do not sell your personal information. Where necessary, information may be shared with our technology, banking, payment, verification and service partners, professional advisers or government/regulatory authorities as permitted or required by law.",
  },
  {
    heading: "Data Security",
    body: "We use reasonable technical and organisational measures to protect personal information. However, no online system can be guaranteed to be completely secure.",
  },
  {
    heading: "Cookies",
    body: "Our website may use cookies and similar technologies to improve functionality, analyse usage and enhance your experience.",
  },
  {
    heading: "Your Rights",
    body: "Subject to applicable law, you may request access, correction or deletion of your personal information or raise a privacy-related concern.",
  },
];

export default function Privacy() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Xendpay Solutions Private Limited respects your privacy and is committed to protecting your personal information." />
      <section>
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 max-w-3xl flex flex-col gap-10">
          {SECTIONS.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display font-semibold text-xl text-basetext mb-3">{s.heading}</h2>
              {s.body && <p className="text-muted font-body leading-relaxed">{s.body}</p>}
              {s.list && (
                <ul className="mt-2 flex flex-col gap-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div>
            <h2 className="font-display font-semibold text-xl text-basetext mb-3">Contact</h2>
            <p className="text-muted font-body">Xendpay Solutions Private Limited</p>
            <p className="text-muted font-body">
              Email:{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-teal hover:text-basetext">
                {COMPANY_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
