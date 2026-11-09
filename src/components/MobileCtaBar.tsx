import { site } from "@/lib/site";
import { PhoneIcon } from "./Header";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-900/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={`tel:${site.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3.5 text-sm font-extrabold text-white"
        >
          <PhoneIcon /> Call Now
        </a>
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center rounded-xl bg-amber-500 px-4 py-3.5 text-sm font-extrabold text-emerald-950"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
