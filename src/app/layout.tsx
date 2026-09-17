import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hadid Rayyan Nandana — Web Developer",
    template: "%s | Hadid Rayyan Nandana",
  },
  description: "Portfolio of Hadid Rayyan Nandana, a Web Developer and RPL Student exploring frontend development and systems.",
  metadataBase: new URL("https://hadidportofolio.netlify.app"),
  openGraph: {
    title: "Hadid Rayyan Nandana — Web Developer",
    description: "Building ideas, exploring systems, and growing through every line of code.",
    url: "https://hadidportofolio.netlify.app",
    siteName: "Hadid Rayyan Nandana Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollRevealObserver } from "@/components/ui/ScrollRevealObserver";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-pattern-dots min-h-screen text-obsidian bg-canvas flex flex-col`}
      >
        <ScrollRevealObserver />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
