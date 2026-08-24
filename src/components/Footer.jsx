import { Link } from "react-router-dom";
import { COMPANY_EMAIL } from "../data/content";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/why-us", label: "Why Xendpay" },
      { to: "/partners", label: "Partners" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/solutions#faq", label: "FAQ" },
      { to: "/disclaimer", label: "Disclaimer" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { to: "/solutions/aeps", label: "AEPS" },
      { to: "/solutions/bbps", label: "BBPS" },
      { to: "/solutions/dmt", label: "DMT" },
      { to: "/solutions/payouts", label: "Payout" },
      { to: "/solutions/payment-apis", label: "Payment APIs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-content mx-auto px-5 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg text-paper">
              <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="6" fill="#ECEAE1" />
                <path d="M4 20 L12 20 L16 12 L28 12" stroke="#D9A441" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="20" r="2" fill="#2F7A6B" />
                <circle cx="28" cy="12" r="2" fill="#D9A441" />
              </svg>
              Xendpay
            </Link>
            <p className="mt-4 text-sm text-paper/60 font-body max-w-xs leading-relaxed">
              Technology-enabled payment infrastructure for businesses, fintechs, merchants and service providers.
            </p>
            <p className="mt-4 text-sm font-mono text-paper/70">
              <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-amber transition-colors">
                {COMPANY_EMAIL}
              </a>
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow text-paper/50 mb-4">{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-paper/75 hover:text-amber transition-colors font-body">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-paper/15 flex flex-col md:flex-row gap-3 justify-between text-xs text-paper/45 font-mono">
          <p>© {new Date().getFullYear()} Xendpay Solutions Private Limited. All rights reserved.</p>
          <p>Services subject to applicable KYC, partner terms and regulatory conditions.</p>
        </div>
      </div>
    </footer>
  );
}
