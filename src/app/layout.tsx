import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Assessment",
  description: "Users directory with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        {/* Global hover styles applied to all interactive elements */}

        <div className="relative min-h-screen">
          {/* Subtle animated background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20 animate-pulse-glow pointer-events-none" />

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}