import { useState } from "react";
import emailjs from "@emailjs/browser";
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

// Reads from Vite env vars — see .env.example / EMAIL-SETUP.md.
// If these aren't configured yet, the form falls back to opening the
// visitor's email client instead of silently failing.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    businessType: BUSINESS_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const sendViaMailto = () => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_CONFIGURED) {
      // No EmailJS account wired up yet — fall back to the visitor's own
      // email client so the enquiry still reaches the inbox.
      sendViaMailto();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          company: form.company,
          business_email: form.email,
          mobile: form.mobile,
          business_type: form.businessType,
          message: form.message,
          to_email: COMPANY_EMAIL,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({
        name: "",
        company: "",
        email: "",
        mobile: "",
        businessType: BUSINESS_TYPES[0],
        message: "",
      });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full Name" required>
        <input required value={form.name} onChange={update("name")} type="text" className="input" placeholder="Your name" />
      </Field>
      <Field label="Company Name" required>
        <input required value={form.company} onChange={update("company")} type="text" className="input" placeholder="Your company" />
      </Field>
      <Field label="Business Email" required>
        <input required value={form.email} onChange={update("email")} type="email" className="input" placeholder="you@company.com" />
      </Field>
      <Field label="Mobile Number" required>
        <input required value={form.mobile} onChange={update("mobile")} type="tel" className="input" placeholder="+91" />
      </Field>
      <Field label="Business Type" required className="md:col-span-2">
        <select value={form.businessType} onChange={update("businessType")} className="input">
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Tell us about your requirement" className="md:col-span-2">
        <textarea value={form.message} onChange={update("message")} rows={4} className="input resize-none" placeholder="What are you looking to build or integrate?" />
      </Field>

      <div className="md:col-span-2 flex items-center gap-4 pt-2 flex-wrap">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-amber text-ink font-body text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Submit Enquiry"}
        </button>

        {status === "sent" && EMAILJS_CONFIGURED && (
          <span className="text-sm text-teal font-body">
            Thanks — your enquiry has been sent. We'll be in touch shortly.
          </span>
        )}
        {status === "sent" && !EMAILJS_CONFIGURED && (
          <span className="text-sm text-teal font-body">
            Opening your email client to send this enquiry to us.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-amber font-body">
            Something went wrong sending that.{" "}
            <button type="button" onClick={sendViaMailto} className="underline hover:text-basetext">
              Send via email instead
            </button>
          </span>
        )}
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgb(var(--surfacemuted));
          border: 1px solid rgb(var(--subtle));
          border-radius: 10px;
          padding: 0.7rem 0.9rem;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.9rem;
          color: rgb(var(--basetext));
        }
        .input::placeholder {
          color: rgb(var(--muted));
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
      <span className="text-xs font-mono text-muted">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      {children}
    </label>
  );
}
