import { db } from "@/db";
import { leads } from "@/db/schema";
import { desc } from "drizzle-orm";
import { NextRequest } from "next/server";
import { serviceOptions, urgencyOptions } from "@/lib/site";

export const dynamic = "force-dynamic";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  zip?: string;
  address?: string;
  service?: string;
  urgency?: string;
  message?: string;
  source?: string;
  website?: string; // honeypot
};

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; silently accept and drop.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const zip = clean(body.zip, 12);
  const address = clean(body.address, 255);
  const service = clean(body.service, 80);
  const urgency = clean(body.urgency, 40) || "flexible";
  const message = clean(body.message, 2000);
  const source = clean(body.source, 80) || "landing-page";

  const errors: Record<string, string> = {};

  if (name.length < 2) errors.name = "Please enter your name.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";

  if (zip && !/^\d{5}$/.test(zip)) errors.zip = "Enter a 5-digit ZIP code.";

  if (!(serviceOptions as readonly string[]).includes(service))
    errors.service = "Please select a service.";

  if (!urgencyOptions.some((u) => u.value === urgency))
    errors.urgency = "Please select a timeframe.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  try {
    const [created] = await db
      .insert(leads)
      .values({
        name,
        phone,
        email: email || null,
        zip: zip || null,
        address: address || null,
        service,
        urgency,
        message: message || null,
        source,
      })
      .returning({ id: leads.id });

    return Response.json({ ok: true, id: created.id });
  } catch (err) {
    console.error("Failed to save lead", err);
    return Response.json(
      { ok: false, error: "We couldn't save your request. Please call us directly." },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const adminKey = process.env.ADMIN_KEY;
  if (adminKey) {
    const provided =
      req.headers.get("x-admin-key") ?? req.nextUrl.searchParams.get("key");
    if (provided !== adminKey) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }
  }

  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(500);
  return Response.json({ ok: true, leads: rows });
}
