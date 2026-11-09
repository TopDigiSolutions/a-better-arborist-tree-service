"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions, site, urgencyOptions } from "@/lib/site";

type Props = {
  source?: string;
  compact?: boolean;
  heading?: string;
  subheading?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({
  source = "landing-page",
  compact = false,
  heading = "Get Your Free Estimate",
  subheading = "Todd personally responds — usually within the hour.",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrors({});
    setServerError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerError(json.error ?? "Please check the highlighted fields.");
      setStatus("error");
    } catch {
      setServerError("Network error. Please call us at " + site.phoneDisplay + ".");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-emerald-950">Request received!</h3>
        <p className="mt-2 text-slate-600">
          Thanks — Todd will reach out shortly to schedule your free on-site estimate.
          Need it faster?
        </p>
        <a
          href={`tel:${site.phone}`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
        >
          <PhoneIcon /> Call {site.phoneDisplay}
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-3 block w-full text-sm text-slate-500 underline-offset-2 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 transition";
  const labelCls = "mb-1.5 block text-sm font-semibold text-slate-700";
  const errCls = "mt-1 text-xs font-medium text-red-600";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      id="quote-form"
    >
      <div className="mb-5">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
          Free · No Obligation
        </span>
        <h3 className="mt-3 text-2xl font-extrabold text-emerald-950">{heading}</h3>
        <p className="mt-1 text-sm text-slate-600">{subheading}</p>
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`${source}-name`} className={labelCls}>
            Full name *
          </label>
          <input
            id={`${source}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jane Smith"
            className={inputCls}
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className={labelCls}>
            Phone *
          </label>
          <input
            id={`${source}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(214) 555-0123"
            className={inputCls}
          />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-email`} className={labelCls}>
            Email
          </label>
          <input
            id={`${source}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputCls}
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-zip`} className={labelCls}>
            ZIP code
          </label>
          <input
            id={`${source}-zip`}
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="75225"
            className={inputCls}
          />
          {errors.zip && <p className={errCls}>{errors.zip}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-service`} className={labelCls}>
            Service needed *
          </label>
          <select
            id={`${source}-service`}
            name="service"
            required
            defaultValue=""
            className={inputCls}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className={errCls}>{errors.service}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-urgency`} className={labelCls}>
            How soon?
          </label>
          <select
            id={`${source}-urgency`}
            name="urgency"
            defaultValue="flexible"
            className={inputCls}
          >
            {urgencyOptions.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
          {errors.urgency && <p className={errCls}>{errors.urgency}</p>}
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={`${source}-message`} className={labelCls}>
            Tell us about the job
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            rows={compact ? 2 : 3}
            placeholder="e.g. Large oak over the garage with a dead limb, back yard access through a 6-ft gate…"
            className={inputCls}
          />
        </div>
      </div>

      {serverError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-4 text-base font-extrabold text-emerald-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            Request My Free Estimate
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-slate-500">
        Prefer to talk?{" "}
        <a href={`tel:${site.phone}`} className="font-semibold text-emerald-700 hover:underline">
          Call {site.phoneDisplay}
        </a>
        . We never share your information.
      </p>
    </form>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
