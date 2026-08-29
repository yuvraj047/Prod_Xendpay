import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { SOLUTIONS, FAQS } from "../data/content";
import { SOLUTION_ICONS } from "../data/solutionIcons";

export default function Solutions() {
  return (
    <div>
      <PageHero
        eyebrow="Our Solutions"
        title="One Platform. Multiple Payment Capabilities."
      />

      <section className="border-b border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => {
            const Icon = SOLUTION_ICONS[s.slug];
            const accent = s.line === "amber" ? "#D9A441" : "#2F9C82";
            return (
              <div
                key={s.slug}
                className="group flex flex-col bg-surface border border-subtle rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-transparent"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${accent}1A` }}
                >
                  <Icon size={22} strokeWidth={1.8} style={{ color: accent }} />
                </div>
                <p className="font-display font-semibold text-xl text-basetext">{s.name}</p>
                <p className="text-sm font-body mt-1" style={{ color: accent }}>
                  {s.tag}
                </p>
                <p className="text-sm text-muted font-body mt-3 leading-relaxed flex-1">
                  {s.summary}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-body font-medium text-basetext transition-all group-hover:gap-2.5"
                >
                  Talk to our team
                  <ArrowRight size={15} style={{ color: accent }} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="faq" className="bg-surfacemuted/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-basetext mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-subtle border-t border-b border-subtle">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-body font-medium text-basetext">
                  {f.q}
                  <span className="font-mono text-muted group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted font-body leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
