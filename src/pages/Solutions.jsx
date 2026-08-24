import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { SOLUTIONS, FAQS } from "../data/content";

export default function Solutions() {
  return (
    <div>
      <PageHero
        eyebrow="Our Solutions"
        title="One Platform. Multiple Payment Capabilities."
      />

      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 flex flex-col gap-5">
          {SOLUTIONS.map((s, i) => (
            <div
              key={s.slug}
              className="grid md:grid-cols-[auto_1fr_auto] items-center gap-6 bg-paper border border-line rounded-2xl p-6 md:p-8"
            >
              <span
                className="font-mono text-xs px-3 py-1 rounded-full border w-fit"
                style={{
                  color: s.line === "amber" ? "#D9A441" : "#2F7A6B",
                  borderColor: s.line === "amber" ? "#D9A441" : "#2F7A6B",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display font-semibold text-xl text-ink">{s.name}</p>
                <p className="text-sm text-inkgrey font-body mt-1">{s.tag}</p>
                <p className="text-sm text-inkgrey font-body mt-2 max-w-xl leading-relaxed">{s.summary}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-ink text-ink font-body text-sm px-5 py-2.5 rounded-full hover:bg-ink hover:text-paper transition-colors whitespace-nowrap w-fit"
              >
                Explore {s.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-panel/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-line border-t border-b border-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-body font-medium text-ink">
                  {f.q}
                  <span className="font-mono text-inkgrey group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-inkgrey font-body leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
