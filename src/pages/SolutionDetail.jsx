import { Link, useParams, Navigate } from "react-router-dom";
import { SOLUTIONS } from "../data/content";
import { SOLUTION_ICONS } from "../data/solutionIcons";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) return <Navigate to="/solutions" replace />;

  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== slug);
  const lineColor = solution.line === "amber" ? "#D9A441" : "#2F9C82";
  const Icon = SOLUTION_ICONS[solution.slug];

  return (
    <div>
      <section className="border-b border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${lineColor}1A` }}
          >
            <Icon size={26} strokeWidth={1.8} style={{ color: lineColor }} />
          </div>
          <p className="eyebrow text-teal mb-4">Solutions / {solution.name}</p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl text-basetext leading-[1.08] max-w-3xl">
            {solution.tag}
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted font-body max-w-2xl leading-relaxed">
            {solution.summary}
          </p>
        </div>
      </section>

      <section className="border-b border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-muted font-body leading-relaxed">{solution.detail}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3.5 rounded-full text-basetext transition-colors hover:text-paper"
              style={{ backgroundColor: "transparent", border: `1px solid ${lineColor}` }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = lineColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Talk to Our Team About {solution.name} →
            </Link>
          </div>
          <div className="bg-surfacemuted/50 border border-subtle rounded-2xl p-6 h-fit">
            <p className="eyebrow text-muted mb-3">Good to Know</p>
            <p className="text-sm text-muted font-body leading-relaxed">
              Availability of this service depends on applicable KYC, onboarding, partner and
              regulatory requirements. Our team will confirm eligibility for your business during
              the enquiry process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surfacemuted/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16">
          <p className="eyebrow text-teal mb-6">Other Solutions</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherSolutions.map((s) => {
              const OtherIcon = SOLUTION_ICONS[s.slug];
              const otherAccent = s.line === "amber" ? "#D9A441" : "#2F9C82";
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="block bg-surface border border-subtle rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:shadow-md"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${otherAccent}1A` }}
                  >
                    <OtherIcon size={16} strokeWidth={1.8} style={{ color: otherAccent }} />
                  </div>
                  <p className="font-display font-semibold text-basetext">{s.name}</p>
                  <p className="mt-1 text-xs text-muted font-body">{s.tag}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
