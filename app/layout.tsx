import type React from "react";
import type { Metadata } from "next";
import { Inter, Jim_Nightshade } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jimNightshade = Jim_Nightshade({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jim-nightshade",
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smart Resource - AI-Powered Precision for Every Task",
  description:
    "From studying smarter to managing complex workflows, Smart Resource adapts to your needs — just upload your files, ask a question, and get context-aware guidance in seconds.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${jimNightshade.variable} ${inter.variable} ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
