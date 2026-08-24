import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Stop from "../components/Stop";
import { API_STEPS, INTEGRATION_SUPPORT } from "../data/content";

export default function ApiTechnology() {
  return (
    <div>
      <PageHero
        eyebrow="API & Technology"
        title="APIs That Advance Business — Connect Your Platform to Payment Infrastructure"
        subtitle="Your clients anticipate financial services to be an integral element of the experience rather than a stand-alone procedure. Businesses can include approved payment features straight into their websites, apps, and internal systems with Xendpay's API-driven solutions."
      />

      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {API_STEPS.map((s, i) => (
              <div key={s.title} className="bg-paper border border-line rounded-2xl p-6">
                <Stop index={i + 1} color={i % 2 === 0 ? "amber" : "teal"} />
                <p className="mt-4 font-display font-semibold text-lg text-ink">{s.title}</p>
                <p className="mt-1.5 text-sm text-inkgrey font-body leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow text-teal mb-4">Developer Experience</p>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
              Designed with developers in mind. Built with business in mind.
            </h2>
            <p className="mt-5 text-inkgrey font-body leading-relaxed">
              We are aware that an API endpoint alone is not sufficient for a successful
              integration. From testing and documentation to production deployment, our technical
              support can help with the integration process.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-paper font-body text-sm font-medium px-6 py-3.5 rounded-full hover:bg-teal transition-colors"
            >
              Request API Access →
            </Link>
          </div>

          <div className="bg-paper border border-line rounded-2xl p-8">
            <p className="eyebrow text-inkgrey mb-5">Integration Support</p>
            <ul className="flex flex-col gap-3">
              {INTEGRATION_SUPPORT.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-body text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
