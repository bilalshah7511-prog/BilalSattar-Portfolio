import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bilal — Full Stack Developer",
    template: "%s | Bilal",
  },
  description:
    "Portfolio — light & dark themes, React, Next.js, and interfaces crafted for recruiters.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bilal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bilal",
    title: "Bilal — Portfolio",
    description: "Designed & built with Next.js — dual theme, motion, and glass UI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal — Portfolio",
    description: "Full stack developer portfolio.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8faff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='portfolio-theme',t=localStorage.getItem(k),d=document.documentElement;if(t==='light'||t==='dark')d.setAttribute('data-theme',t);else d.setAttribute('data-theme','dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
