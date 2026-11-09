const faqs = [
  {
    q: "Are estimates really free?",
    a: "Yes. Todd or a senior arborist will come out, look at the tree(s), and give you a written, no-obligation quote. No pressure, no hidden fees.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We carry full general liability and workers' compensation coverage. We're happy to send a certificate of insurance before any work begins.",
  },
  {
    q: "Can you remove a large or dangerous tree close to my house?",
    a: "This is our specialty. We handle the large, difficult, and hazardous removals that many companies turn down — including crane-assisted removals over homes, pools, and power lines.",
  },
  {
    q: "Do you clean up when you're done?",
    a: "Every job includes full cleanup. Debris is chipped on site and hauled away, and we rake and blow the area so your yard looks better than when we arrived.",
  },
  {
    q: "What's included with pruning?",
    a: "Proper ISA-style pruning for health and structure — never topping. Sign a pruning proposal and we include a free deep root fertilization treatment for every tree we prune.",
  },
  {
    q: "Do you offer emergency storm service?",
    a: "Yes. If a tree is on your roof, blocking your driveway, or threatening a structure, call us any time. We prioritize emergency storm damage calls across our Dallas service area.",
  },
];

export default function Faq() {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-5 open:bg-emerald-50/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-emerald-950 marker:content-none">
            {f.q}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-800/20 text-emerald-800 transition group-open:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
