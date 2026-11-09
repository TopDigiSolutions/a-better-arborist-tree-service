import { db } from "@/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

function authorized(req: NextRequest) {
  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) return true;
  const provided =
    req.headers.get("x-admin-key") ?? req.nextUrl.searchParams.get("key");
  return provided === adminKey;
}

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  if (!authorized(req)) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await ctx.params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId)) {
    return Response.json({ ok: false, error: "Invalid id" }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as { contacted?: boolean };
  const [updated] = await db
    .update(leads)
    .set({ contacted: Boolean(body.contacted) })
    .where(eq(leads.id, leadId))
    .returning();

  if (!updated) {
    return Response.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return Response.json({ ok: true, lead: updated });
}
