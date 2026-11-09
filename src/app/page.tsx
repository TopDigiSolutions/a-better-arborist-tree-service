import Image from "next/image";
import Header, { PhoneIcon, TreeIcon } from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import MobileCtaBar from "@/components/MobileCtaBar";
import Faq, { faqJsonLd } from "@/components/Faq";
import { serviceAreas, site } from "@/lib/site";

const services = [
  {
    title: "Tree Removal",
    desc: "Safe, controlled removal of dead, diseased, or unwanted trees — including the big ones others won't touch.",
    icon: "🪓",
  },
  {
    title: "Trimming & Pruning",
    desc: "Species-specific pruning for health, structure, and curb appeal. Never topping. Free deep-root feed included.",
    icon: "✂️",
  },
  {
    title: "Stump Grinding",
    desc: "Grind stumps below grade so you can replant, resod, or reclaim your yard.",
    icon: "🌳",
  },
  {
    title: "Storm Damage",
    desc: "24/7 emergency response for fallen trees, split limbs, and trees on structures.",
    icon: "⛈️",
  },
  {
    title: "Crane-Assisted Removal",
    desc: "Multi-ton crane work for hazardous trees over homes, pools, and tight access lots.",
    icon: "🏗️",
  },
  {
    title: "Sick Tree Diagnosis",
    desc: "Oak wilt, hypoxylon canker, borers, root rot — we diagnose and treat before it's too late.",
    icon: "🩺",
  },
  {
    title: "Deep Root Fertilization",
    desc: "Injected nutrients right where roots need them. Stronger trees, better drought resistance.",
    icon: "💧",
  },
  {
    title: "Cabling & Bolting",
    desc: "Structural support for split trunks and heavy limbs so you can keep the tree you love.",
    icon: "🔩",
  },
  {
    title: "Tree Planting",
    desc: "Right tree, right place. We select and plant species that thrive in North Texas soil.",
    icon: "🌱",
  },
];

const reviews = [
  {
    name: "Melissa R.",
    area: "University Park",
    text: "Todd came out the same day, gave us an honest quote, and his crew removed a huge dead red oak over our garage without a scratch. Cleanup was immaculate.",
  },
  {
    name: "James K.",
    area: "Preston Hollow",
    text: "We've used A Better Arborist for years for our pecans and live oaks. They actually know trees — they explained exactly what to cut and why. Fair prices too.",
  },
  {
    name: "Dana W.",
    area: "Southlake",
    text: "After the storm we had a tree on the roof. They were there within hours with a crane and had it off safely. Can't recommend them enough.",
  },
];

const steps = [
  { n: "1", title: "Request a quote", desc: "Fill out the form or call. Takes 60 seconds." },
  { n: "2", title: "Free on-site visit", desc: "Todd inspects your trees and gives a written estimate." },
  { n: "3", title: "We do the work", desc: "Insured crew, pro equipment, done right the first time." },
  { n: "4", title: "Spotless cleanup", desc: "Chipped, hauled, raked. Your yard looks better than before." },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": site.gmbUrl,
  name: "A Better Arborist Tree Service",
  image: "/images/hero.jpg",
  telephone: site.phone,
  email: site.email,
  url: site.gmbUrl,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2303 Royal Ln",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75229",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.8959218, longitude: -96.902133 },
  areaServed: serviceAreas.map((a) => a.name),
  openingHours: "Mo-Sa 07:00-19:00",
  founder: { "@type": "Person", name: "Todd Brown" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div id="top" />
      <Header />

      <main className="pb-24 lg:pb-0">
        {/* ============ HERO ============ */}
        <section className="relative isolate overflow-hidden bg-emerald-950">
          <Image
            src="/images/hero.jpg"
            alt="Arborist pruning a mature live oak in a Dallas neighborhood"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <span className="flex gap-0.5 text-amber-400" aria-hidden>
                  ★★★★★
                </span>
                Top-Rated on Google · Dallas, TX
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Dallas Tree Service You Can{" "}
                <span className="text-amber-400">Actually Trust.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50/90">
                Expert tree removal, pruning, and hazardous tree work across the Park Cities,
                Preston Hollow, and North Dallas. <strong className="text-white">50+ years combined
                experience</strong>, fully insured, and we specialize in the large, difficult jobs
                other companies won&apos;t attempt.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold sm:grid-cols-2">
                {[
                  "Free on-site estimates",
                  "Licensed & fully insured",
                  "Crane-assisted removals",
                  "Free deep-root feed w/ pruning",
                  "24/7 storm emergency response",
                  "Owner-operated — talk to Todd",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-emerald-950">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-lg font-extrabold text-emerald-950 shadow-xl transition hover:bg-emerald-50"
                >
                  <PhoneIcon /> {site.phoneDisplay}
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10 lg:hidden"
                >
                  Get a Free Estimate ↓
                </a>
                <p className="text-sm text-emerald-100/80 sm:ml-2">
                  Same-day callbacks · No pressure
                </p>
              </div>
            </div>

            <div id="quote" className="relative scroll-mt-24">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-amber-400/20 blur-2xl" />
              <LeadForm source="hero" />
            </div>
          </div>
        </section>

        {/* ============ TRUST BAR ============ */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-slate-200 px-4 py-8 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
            {[
              { k: "50+", v: "Years combined experience" },
              { k: "20+", v: "Years serving DFW" },
              { k: "100%", v: "Insured & background-checked" },
              { k: "5★", v: "Rated by Dallas homeowners" },
            ].map((s) => (
              <div key={s.v} className="px-4 py-3 text-center">
                <div className="text-3xl font-extrabold text-emerald-800 sm:text-4xl">{s.k}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="scroll-mt-20 bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Our Services
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Complete tree care for Dallas homes &amp; businesses
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From routine pruning to the removals that make other crews nervous — we have the
                equipment, insurance, and experience to handle it.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-emerald-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <a
                    href="#quote"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 opacity-0 transition group-hover:opacity-100"
                  >
                    Get a quote →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHY US ============ */}
        <section id="why-us" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/crane.jpg"
                  alt="Crane-assisted tree removal over a Dallas home"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/crew.jpg"
                    alt="A Better Arborist crew and bucket truck"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-4 top-8 rounded-2xl bg-emerald-800 px-5 py-4 text-white shadow-xl lg:-left-8">
                <div className="text-3xl font-extrabold">50+</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                  Years combined
                  <br />
                  experience
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Why Dallas Homeowners Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                We don&apos;t just cut limbs. We know trees.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                A Better Arborist® has dedicated more than 20 years to the health, longevity, and
                beauty of North Texas trees. Every species is different, and our crews treat them
                that way — so your property looks better and your trees live longer.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    t: "Specialists in difficult & dangerous removals",
                    d: "Trees over roofs, pools, power lines, and tight-access lots. Crane work when it's the safest option.",
                  },
                  {
                    t: "Owner-operated, personally accountable",
                    d: "Todd quotes the job and makes sure it's done right. No call centers, no subcontractors.",
                  },
                  {
                    t: "Fully insured & professional equipment",
                    d: "Bucket trucks, cranes, chippers, stump grinders — and the insurance to back it all up.",
                  },
                  {
                    t: "Honest pricing, free estimates",
                    d: "Written quotes, no surprises. Free deep root fertilization with every signed pruning proposal.",
                  },
                ].map((i) => (
                  <li key={i.t} className="flex gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-emerald-950">{i.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{i.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3.5 font-extrabold text-emerald-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
                >
                  Request Free Estimate
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-800/20 px-6 py-3.5 font-bold text-emerald-900 transition hover:bg-emerald-50"
                >
                  <PhoneIcon /> {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section className="bg-emerald-900 py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Simple, honest, done right
              </h2>
            </div>
            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-lg font-extrabold text-emerald-950">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-100/80">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ REVIEWS ============ */}
        <section id="reviews" className="scroll-mt-20 bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                What Customers Are Saying
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Trusted by your neighbors
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="text-amber-500" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 flex-1 text-slate-700 leading-relaxed">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 font-bold text-white">
                      {r.name[0]}
                    </span>
                    <div>
                      <div className="font-bold text-emerald-950">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.area}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={site.gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-800"
              >
                <GoogleG /> See all reviews on Google
              </a>
            </div>
          </div>
        </section>

        {/* ============ SERVICE AREAS ============ */}
        <section id="areas" className="scroll-mt-20 bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Service Areas
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Proudly serving Dallas &amp; the Park Cities
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Based on Royal Lane in North Dallas, we&apos;re minutes from Highland Park, University
                Park, Preston Hollow, and Bluffview — and we run crews out to Southlake and Trophy
                Club weekly.
              </p>
              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-bold text-emerald-950">{site.shortName} Tree Service</div>
                    <div className="text-sm text-slate-600">{site.address}</div>
                    <div className="mt-1 text-sm text-slate-600">{site.hours}</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Don&apos;t see your ZIP?{" "}
                <a href={`tel:${site.phone}`} className="font-bold text-emerald-700 hover:underline">
                  Call us
                </a>{" "}
                — we likely still cover you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((a) => (
                <div
                  key={a.zip + a.name}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div className="text-sm font-bold text-emerald-950">{a.name}</div>
                  <div className="text-xs font-semibold text-slate-500">
                    {/^\d{5}$/.test(a.zip) ? `ZIP ${a.zip}` : a.zip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="scroll-mt-20 bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
                Common questions
              </h2>
            </div>
            <div className="mt-12">
              <Faq />
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative isolate overflow-hidden bg-emerald-950 py-20 lg:py-28">
          <Image
            src="/images/crew.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-950/90 to-emerald-900/70" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                We climb high to make you happy.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-emerald-100/90">
                Tell us about your trees and Todd will personally follow up to schedule your free
                estimate. Storm emergency? Skip the form and call now.
              </p>
              <a
                href={`tel:${site.phone}`}
                className="mt-8 inline-flex items-center gap-3 text-2xl font-extrabold text-amber-400 hover:text-amber-300 sm:text-3xl"
              >
                <PhoneIcon className="h-7 w-7" /> {site.phoneDisplay}
              </a>
              <div className="mt-6 space-y-1 text-sm text-emerald-100/80">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span> {site.address}
                </p>
                <p>
                  <span className="font-semibold text-white">Hours:</span> {site.hours}
                </p>
              </div>
            </div>
            <LeadForm
              source="footer"
              compact
              heading="Schedule Your Free Estimate"
              subheading="No obligation. We'll call you back fast."
            />
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-emerald-900/10 bg-white pb-24 pt-10 lg:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-800 text-white">
              <TreeIcon />
            </span>
            <div className="leading-tight">
              <div className="font-extrabold text-emerald-950">{site.name} Tree Service</div>
              <div className="text-xs text-slate-500">
                Insured, Friendly &amp; Professional · Dallas, TX
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <a href={`tel:${site.phone}`} className="font-bold text-emerald-800 hover:underline">
              {site.phoneDisplay}
            </a>
            <span className="mx-2 text-slate-300">|</span>
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} A Better Arborist®. All rights reserved.
          </div>
        </div>
      </footer>

      <MobileCtaBar />
    </>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
