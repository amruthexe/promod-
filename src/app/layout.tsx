import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import { profile } from "@/data/portfolio";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Premium Video Editor Portfolio`,
  description: `${profile.name} is a ${profile.role} specializing in high-retention short-form video editing, color grading, cinematic sound design, and creative motion graphics.`,
  keywords: [
    "Video Editor",
    "Motion Graphics",
    "High Retention Edits",
    "Short Form Video Editor",
    "YouTube Shorts Editor",
    "TikTok Editor",
    "DaVinci Resolve Colorist",
    "After Effects Editor",
    "Premiere Pro Editor",
    "Promod Santhosh",
  ],
  authors: [{ name: profile.name }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} antialiased bg-[#050505] text-white min-h-screen relative font-sans`}
        style={{
          // Set body font-family to Inter
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {/* Interactive canvas particles and red glows backdrop */}
        <Background />

        {/* Custom interactive cursor tracking */}
        <CustomCursor />

        {/* Content injection */}
        {children}
      </body>
    </html>
  );
}
