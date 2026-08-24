export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-line">
      <div className="max-w-content mx-auto px-5 md:px-8 pt-14 pb-12 md:pt-20 md:pb-16">
        {eyebrow && <p className="eyebrow text-teal mb-4">{eyebrow}</p>}
        <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.08] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-inkgrey font-body max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
