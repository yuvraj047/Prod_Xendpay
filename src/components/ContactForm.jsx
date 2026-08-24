import { useState } from "react";
import { COMPANY_EMAIL } from "../data/content";

const BUSINESS_TYPES = [
  "Fintech Company",
  "Retailer",
  "Distributor",
  "E-Commerce Business",
  "Travel Business",
  "Digital Platform",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    businessType: BUSINESS_TYPES[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static hosting on GoDaddy has no server, so the enquiry is routed
    // through the visitor's own email client. Swap this for a form
    // endpoint (e.g. Formspree, GoDaddy's built-in form handler, or a
    // small serverless function) once one is wired up, and this
    // component can POST to it instead.
    const body = [
      `Full Name: ${form.name}`,
      `Company Name: ${form.company}`,
      `Business Email: ${form.email}`,
      `Mobile Number: ${form.mobile}`,
      `Business Type: ${form.businessType}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
      "New Enquiry from Xendpay Website"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full Name" required>
        <input
          required
          value={form.name}
          onChange={update("name")}
          type="text"
          className="input"
          placeholder="Your name"
        />
      </Field>
      <Field label="Company Name" required>
        <input
          required
          value={form.company}
          onChange={update("company")}
          type="text"
          className="input"
          placeholder="Your company"
        />
      </Field>
      <Field label="Business Email" required>
        <input
          required
          value={form.email}
          onChange={update("email")}
          type="email"
          className="input"
          placeholder="you@company.com"
        />
      </Field>
      <Field label="Mobile Number" required>
        <input
          required
          value={form.mobile}
          onChange={update("mobile")}
          type="tel"
          className="input"
          placeholder="+91"
        />
      </Field>
      <Field label="Business Type" required className="md:col-span-2">
        <select value={form.businessType} onChange={update("businessType")} className="input">
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about your requirement" className="md:col-span-2">
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={4}
          className="input resize-none"
          placeholder="What are you looking to build or integrate?"
        />
      </Field>

      <div className="md:col-span-2 flex items-center gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-ink text-paper font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-teal transition-colors"
        >
          Submit Enquiry
        </button>
        {sent && (
          <span className="text-sm text-teal font-body">
            Opening your email client to send this enquiry to us.
          </span>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #F5F4EE;
          border: 1px solid #C9C6B8;
          border-radius: 10px;
          padding: 0.7rem 0.9rem;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.9rem;
          color: #10141F;
        }
        .input:focus {
          outline: 2px solid #D9A441;
          outline-offset: 1px;
          border-color: #D9A441;
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`flex flex-col gap-1.5 text-left ${className}`}>
      <span className="text-xs font-mono text-inkgrey">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      {children}
    </label>
  );
}
