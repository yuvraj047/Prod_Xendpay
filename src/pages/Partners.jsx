import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { PARTNER_TYPES, PARTNER_REASONS } from "../data/content";

export default function Partners() {
  return (
    <div>
      <PageHero
        eyebrow="Partners"
        title="Join Xendpay as a Partner to Grow. Give More. Expand."
        subtitle="Xendpay can assist you in gaining access to supported payment capabilities for your firm, regardless of whether you are an enterprise, retailer, distributor, fintech company, or digital platform."
      />

      <section className="border-b border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16">
          <p className="eyebrow text-amber mb-6">Who Can Partner?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNER_TYPES.map((p) => (
              <div key={p.title} className="bg-surface border border-subtle rounded-2xl p-6">
                <p className="font-display font-semibold text-lg text-basetext">{p.title}</p>
                <p className="mt-2 text-sm text-muted font-body leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surfacemuted/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <p className="eyebrow text-teal mb-6">Why Partner With Xendpay?</p>
          <div className="flex flex-col divide-y divide-subtle border-t border-b border-subtle">
            {PARTNER_REASONS.map((r) => (
              <div key={r.title} className="py-5 grid md:grid-cols-[240px_1fr] gap-2 md:gap-8">
                <p className="font-display font-semibold text-basetext">{r.title}</p>
                <p className="text-sm text-muted font-body leading-relaxed">{r.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber text-ink font-body text-sm font-medium px-6 py-3.5 rounded-full hover:brightness-110 transition-all"
            >
              Apply to Partner →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
