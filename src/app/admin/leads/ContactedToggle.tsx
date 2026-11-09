"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function ContactedToggle({
  id,
  contacted,
  adminKey,
}: {
  id: number;
  contacted: boolean;
  adminKey?: string;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [busy, setBusy] = useState(false);

  async function toggle() {
    setBusy(true);
    try {
      await fetch(`/api/leads/${id}${adminKey ? `?key=${encodeURIComponent(adminKey)}` : ""}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contacted: !contacted }),
      });
      start(() => router.refresh());
    } finally {
      setBusy(false);
    }
  }

  const loading = busy || pending;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      className={`rounded-xl px-4 py-2 text-sm font-bold transition disabled:opacity-60 ${
        contacted
          ? "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
          : "bg-emerald-800 text-white hover:bg-emerald-900"
      }`}
    >
      {loading ? "Saving…" : contacted ? "↩ Mark as new" : "✓ Mark contacted"}
    </button>
  );
}
