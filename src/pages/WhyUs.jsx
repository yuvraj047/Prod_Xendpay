import PageHero from "../components/PageHero";
import Stop from "../components/Stop";
import { WHY_US } from "../data/content";

export default function WhyUs() {
  return (
    <div>
      <PageHero
        eyebrow="Why Xendpay"
        title="Infrastructure for payments can be complicated. Our strategy is to make that complexity simpler."
        subtitle="We concentrate on developing relationships and technology that enable companies to seamlessly incorporate supported payment systems into their current operations."
      />

      <section>
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex flex-col gap-0">
            {WHY_US.map((item, i) => (
              <div key={item.title} className="flex gap-5 md:gap-8 py-6 border-b border-line last:border-b-0">
                <Stop index={i + 1} color={i % 2 === 0 ? "amber" : "teal"} />
                <div>
                  <p className="font-display font-semibold text-lg text-ink">{item.title}</p>
                  <p className="mt-1.5 text-sm md:text-base text-inkgrey font-body leading-relaxed max-w-xl">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
