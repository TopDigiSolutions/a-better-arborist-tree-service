import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abetterarborist.com"),
  title: "A Better Arborist® | Tree Service Dallas, TX — Free Estimates (972) 333-7444",
  description:
    "Trusted Dallas tree service: tree removal, trimming & pruning, stump grinding, crane removals, storm damage & sick tree diagnosis. 50+ years combined experience, fully insured. Serving Highland Park, University Park, Preston Hollow & Southlake. Call (972) 333-7444 for a free estimate.",
  keywords: [
    "tree service Dallas",
    "tree removal Dallas TX",
    "tree trimming Highland Park",
    "arborist University Park",
    "stump grinding Dallas",
    "crane tree removal Dallas",
    "storm damage tree service Dallas",
  ],
  openGraph: {
    title: "A Better Arborist® — Professional Tree Service in Dallas, TX",
    description:
      "Free estimates on tree removal, pruning, stump grinding and emergency storm work. Insured, owner-operated, 50+ years combined experience.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
