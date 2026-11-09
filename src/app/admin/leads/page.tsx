import { db } from "@/db";
import { leads } from "@/db/schema";
import { desc } from "drizzle-orm";
import { urgencyOptions, site } from "@/lib/site";
import ContactedToggle from "./ContactedToggle";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Leads · A Better Arborist",
  robots: { index: false, follow: false },
};

export default async function LeadsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const adminKey = process.env.ADMIN_KEY;

  if (adminKey && key !== adminKey) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
        <form className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="text-xl font-extrabold text-emerald-950">Leads dashboard</h1>
          <p className="mt-1 text-sm text-slate-600">Enter the admin key to continue.</p>
          <input
            name="key"
            type="password"
            placeholder="Admin key"
            className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
          <button className="mt-4 w-full rounded-xl bg-emerald-800 py-3 font-bold text-white hover:bg-emerald-900">
            View leads
          </button>
        </form>
      </main>
    );
  }

  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(500);
  const newCount = rows.filter((r) => !r.contacted).length;
  const urgencyLabel = (v: string) =>
    urgencyOptions.find((u) => u.value === v)?.label ?? v;

  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-extrabold text-emerald-950">Lead Inbox</h1>
            <p className="text-sm text-slate-600">
              {rows.length} total · <span className="font-bold text-amber-700">{newCount} awaiting contact</span>
            </p>
          </div>
          <a href="/" className="text-sm font-semibold text-emerald-700 hover:underline">
            ← Back to site
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {rows.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center text-slate-500">
            No leads yet. Share the landing page and they&apos;ll show up here.
          </div>
        ) : (
          <div className="space-y-4">
            {rows.map((l) => (
              <article
                key={l.id}
                className={`rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${
                  l.contacted ? "border-slate-200 opacity-70" : "border-amber-300 ring-1 ring-amber-200"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-extrabold text-emerald-950">{l.name}</h2>
                      {l.urgency === "emergency" && (
                        <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-700">
                          EMERGENCY
                        </span>
                      )}
                      {!l.contacted && (
                        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      #{l.id} · {fmt.format(l.createdAt)} CT · via {l.source}
                    </div>
                  </div>
                  <ContactedToggle id={l.id} contacted={l.contacted} adminKey={key} />
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Phone</dt>
                    <dd>
                      <a href={`tel:${l.phone}`} className="font-bold text-emerald-700 hover:underline">
                        {l.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</dt>
                    <dd className="truncate">
                      {l.email ? (
                        <a href={`mailto:${l.email}`} className="text-emerald-700 hover:underline">
                          {l.email}
                        </a>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Service</dt>
                    <dd className="font-semibold text-slate-800">{l.service}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Timeframe</dt>
                    <dd className="text-slate-800">{urgencyLabel(l.urgency)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">ZIP</dt>
                    <dd className="text-slate-800">{l.zip ?? <span className="text-slate-400">—</span>}</dd>
                  </div>
                  {l.message && (
                    <div className="sm:col-span-2 lg:col-span-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Details</dt>
                      <dd className="whitespace-pre-line text-slate-700">{l.message}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-xs text-slate-400">
          Leads also reachable at {site.email}. Set <code>ADMIN_KEY</code> in .env to protect this page.
        </p>
      </div>
    </main>
  );
}
