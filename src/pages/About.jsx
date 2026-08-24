import PageHero from "../components/PageHero";
import RailDivider from "../components/RailDivider";
import { VALUES } from "../data/content";

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Building Technology for a More Connected Payment Ecosystem"
        subtitle="A technology-focused corporation, Xendpay Solutions Private Limited offers digital payment and financial service solutions to companies, retailers, fintech platforms, and service providers."
      />

      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-2 gap-10">
          <p className="text-inkgrey font-body leading-relaxed">
            Through scalable digital infrastructure, we assist organisations in connecting with
            supported payment services at the nexus of technology, payments, and business
            processes.
          </p>
          <p className="text-inkgrey font-body leading-relaxed">
            Subject to relevant onboarding, KYC, partner, and service criteria, our solutions
            include AEPS, BBPS, Domestic Money Transfer, Payouts, and API-based payment services.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-panel/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-2 gap-10">
          <div className="bg-paper border border-line rounded-2xl p-8">
            <p className="eyebrow text-amber mb-3">Our Mission</p>
            <p className="font-body text-ink leading-relaxed">
              Simplify the development, management, and expansion of digital payments. Through
              dependable integrations, workable solutions, and attentive assistance, we hope to
              assist businesses in gaining access to the payment technologies they require.
            </p>
          </div>
          <div className="bg-paper border border-line rounded-2xl p-8">
            <p className="eyebrow text-teal mb-3">Our Vision</p>
            <p className="font-body text-ink leading-relaxed">
              An increasingly interconnected digital payment system. In our ideal future,
              accessible, scalable, and simple-to-integrate technology will enable businesses to
              access vital financial services.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <RailDivider className="mb-8 max-w-md" />
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">Our Values</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.name}>
                <p className="font-display font-semibold text-lg text-ink">{v.name}</p>
                <p className="mt-2 text-sm text-inkgrey font-body leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
