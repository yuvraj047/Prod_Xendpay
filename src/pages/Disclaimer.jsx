import PageHero from "../components/PageHero";
import { COMPANY_EMAIL } from "../data/content";

const PARAGRAPHS = [
  "Xendpay Solutions Private Limited provides technology-enabled digital payment and financial service solutions, including AEPS, BBPS, Domestic Money Transfer (DMT), payout and API-based services.",
  "Services may be provided through or in association with eligible banking, payment, technology and service partners, as applicable. Availability of services is subject to applicable laws, KYC requirements, partner policies, eligibility criteria and technical availability.",
  "Nothing on this website should be interpreted as representing that Xendpay is a bank, RBI-licensed entity, NPCI-authorized entity or holder of any regulatory license unless expressly stated and legally applicable.",
  "Information provided on this website is for general information purposes and does not constitute financial, legal or professional advice.",
  "Service availability, transaction limits, processing times and applicable charges may vary depending on the service and applicable partner terms.",
  "Xendpay reserves the right to update, modify or discontinue services and website content where required.",
];

export default function Disclaimer() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section>
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 max-w-3xl flex flex-col gap-5">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-muted font-body leading-relaxed">
              {p}
            </p>
          ))}
          <div className="mt-4">
            <p className="font-display font-semibold text-basetext mb-2">For Queries</p>
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
