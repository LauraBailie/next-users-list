"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading API message...");

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage("API unavailable"));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Title */}

        {/* API Message Card – Glassmorphism */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-16 py-10 mb-12 shadow-2xl">
          <p className="text-white text-lg font-mono tracking-wider">
            {message}
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
          A modern full-stack app built with Next.js App Router, TypeScript, Tailwind CSS, and deployed on Vercel.
        </p>

        {/* CTA Button */}
        <Link
          href="/users"
          className="flex items-center justify-center px-4 py-4 bg-black text-purple-800 text-2xl font-bold rounded-full border-radius: 5px shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group"
        >
          <span>Explore Users</span>
          <svg className="w-16 h-16 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {/* footer */}
        <p className="text-white/50 text-sm mt-16 gap-y-16">
          Built by Laura • November 2025
        </p>
      </div>
    </main>
  );
}