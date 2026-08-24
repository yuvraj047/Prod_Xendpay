import { Link, useParams, Navigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { SOLUTIONS } from "../data/content";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) return <Navigate to="/solutions" replace />;

  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== slug);
  const lineColor = solution.line === "amber" ? "#D9A441" : "#2F7A6B";

  return (
    <div>
      <PageHero eyebrow={`Solutions / ${solution.name}`} title={solution.tag} subtitle={solution.summary} />

      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-inkgrey font-body leading-relaxed">{solution.detail}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3.5 rounded-full text-ink transition-colors hover:text-paper"
              style={{ backgroundColor: "transparent", border: `1px solid ${lineColor}` }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = lineColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Talk to Our Team About {solution.name} →
            </Link>
          </div>
          <div className="bg-panel/50 border border-line rounded-2xl p-6 h-fit">
            <p className="eyebrow text-inkgrey mb-3">Good to Know</p>
            <p className="text-sm text-inkgrey font-body leading-relaxed">
              Availability of this service depends on applicable KYC, onboarding, partner and
              regulatory requirements. Our team will confirm eligibility for your business during
              the enquiry process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-panel/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16">
          <p className="eyebrow text-teal mb-6">Other Solutions</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherSolutions.map((s) => (
              <Link
                key={s.slug}
                to={`/solutions/${s.slug}`}
                className="block bg-paper border border-line rounded-2xl p-5 hover:border-amber transition-colors"
              >
                <span
                  className="inline-block w-2 h-2 rounded-full mb-3"
                  style={{ backgroundColor: s.line === "amber" ? "#D9A441" : "#2F7A6B" }}
                />
                <p className="font-display font-semibold text-ink">{s.name}</p>
                <p className="mt-1 text-xs text-inkgrey font-body">{s.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
