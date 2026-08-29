import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import RailHero from "../components/RailHero";
import RailDivider from "../components/RailDivider";
import { SOLUTIONS, FEATURES } from "../data/content";
import { SOLUTION_ICONS } from "../data/solutionIcons";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-subtle overflow-hidden">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-teal mb-5">Xendpay Solutions Private Limited</p>
            <h1 className="font-display font-semibold text-4xl md:text-[3.4rem] leading-[1.05] text-basetext">
              Powering the Next Generation of Digital Payments
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted font-body max-w-lg leading-relaxed">
              Technology-enabled payment solutions that help businesses connect, automate and grow —
              from bill payments and collections to money transfers and business payouts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber text-ink font-body text-sm font-medium px-6 py-3.5 rounded-full hover:brightness-110 transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 border border-basetext text-basetext font-body text-sm font-medium px-6 py-3.5 rounded-full hover:border-teal hover:text-teal transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <RailHero />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-subtle bg-surfacemuted/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <RailDivider className="mb-8 max-w-md" />
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-basetext max-w-2xl">
            Payments, Built Around Your Business
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-muted font-body leading-relaxed">
              A payment gateway is not enough for modern enterprises. To transfer money, receive
              payments, oversee disbursements, and link various financial services with their
              current technology, they require dependable infrastructure.
            </p>
            <p className="text-muted font-body leading-relaxed">
              Through a technology-focused platform created for companies, fintechs, merchants and
              service providers, Xendpay unifies crucial digital payment capabilities — from AEPS
              and BBPS to Domestic Money Transfer, Payouts, and API interfaces — in a single,
              interconnected technology environment.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="border-b border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-basetext">
            Your Business. Our Payment Infrastructure.
          </h2>
          <p className="mt-4 text-muted font-body max-w-2xl leading-relaxed">
            Managing multiple payment services shouldn't mean managing multiple technology stacks.
            Xendpay brings supported payment capabilities together through a streamlined technology
            environment, helping businesses reduce operational complexity and build better payment
            experiences.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-subtle rounded-2xl overflow-hidden border border-subtle">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-base p-6">
                <p className="font-display font-semibold text-lg text-basetext">{f.title}</p>
                <p className="mt-2 text-sm text-muted font-body leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="border-b border-subtle bg-surfacemuted/40">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-basetext">
              One Platform. Multiple Payment Capabilities.
            </h2>
            <Link to="/solutions" className="text-sm font-mono text-teal hover:text-basetext transition-colors">
              View all solutions →
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s) => {
              const Icon = SOLUTION_ICONS[s.slug];
              const accent = s.line === "amber" ? "#D9A441" : "#2F9C82";
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="group relative block bg-surface border border-subtle rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-transparent"
                  style={{ "--tw-shadow-color": `${accent}22` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: `${accent}1A` }}
                  >
                    <Icon size={20} strokeWidth={1.8} style={{ color: accent }} />
                  </div>
                  <p className="font-display font-semibold text-lg text-basetext">{s.name}</p>
                  <p className="mt-1.5 text-sm text-muted font-body leading-relaxed">{s.tag}</p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono font-medium transition-all group-hover:gap-2.5"
                    style={{ color: accent }}
                  >
                    Explore {s.name}
                    <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surfacemuted border-t border-subtle">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-basetext">
              Let's build better payment experiences.
            </h2>
            <p className="mt-3 text-muted font-body max-w-lg leading-relaxed">
              Tell us what you're building and our team will guide you through onboarding and
              integration.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber text-ink font-body text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
