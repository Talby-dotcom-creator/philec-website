import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function NetlifyContactForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(data as any).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      className="border border-slate-200 bg-soft p-5 shadow-sm sm:p-8"
      aria-label="Enquiry form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Netlify required hidden field */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field */}
      <div style={{ display: "none" }}>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy">
          Name
          <input className="field" name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Phone
          <input className="field" name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Email
          <input className="field" name="email" type="email" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Postcode
          <input className="field" name="postcode" autoComplete="postal-code" />
        </label>
        <label className="relative grid gap-2 text-sm font-bold text-navy sm:col-span-2">
          Type of work
          <select className="field appearance-none" name="workType" defaultValue="Domestic">
            <option>Domestic</option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Testing / Inspection</option>
            <option>Fault / Repair</option>
            <option>Other</option>
          </select>
          <ChevronDown className="pointer-events-none absolute bottom-3.5 right-4 text-slate-400" size={18} aria-hidden="true" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy sm:col-span-2">
          Message
          <textarea className="field min-h-36 resize-y" name="message" required />
        </label>
      </div>

      {status === "success" && (
        <p className="mt-5 text-green-700 font-bold text-sm" role="status">
          Thank you — your enquiry has been sent. Phil will be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-5 text-red-700 font-bold text-sm" role="alert">
          Sorry, something went wrong. Please call Phil directly on 07863 327300.
        </p>
      )}
      {status === null && null}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-blue-600 sm:w-auto"
        disabled={status === "success"}
      >
        Send Enquiry
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}