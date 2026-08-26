import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { COMPANY_EMAIL } from "../data/content";

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Better Payment Experiences"
        subtitle="Whether you're launching a fintech platform, expanding an existing business or looking to integrate payment capabilities into your application, our team would like to understand your requirements."
      />

      <section>
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 md:py-16 grid lg:grid-cols-[1fr_320px] gap-12">
          <div className="bg-surface border border-subtle rounded-2xl p-6 md:p-10">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-surfacemuted/50 border border-subtle rounded-2xl p-6">
              <p className="eyebrow text-muted mb-3">Xendpay Solutions Private Limited</p>
              <p className="text-sm text-basetext font-mono">
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-teal">
                  {COMPANY_EMAIL}
                </a>
              </p>
            </div>
            <div className="bg-surfacemuted/50 border border-subtle rounded-2xl p-6">
              <p className="eyebrow text-muted mb-3">What Happens Next</p>
              <ul className="flex flex-col gap-2.5 text-sm text-muted font-body leading-relaxed">
                <li>1. We review your requirement.</li>
                <li>2. Our team reaches out to understand eligibility and scope.</li>
                <li>3. We guide you through onboarding, KYC and integration.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
