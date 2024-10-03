import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/components/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_URL;
const title = "Leadiculous - Realtime lead generation for your business";
const description =
  "Gather leads from social media with ease. Leadiculous monitors the web and notifies you when someone is looking for your product or service.";
const siteName = "Leadiculous";

export const metadata: Metadata = {
  title,
  description,
  generator: "Next.js",
  category: "technology",
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: SITE_URL,
    title,
    description,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: description,
      },
    ],
  },
  manifest: `${SITE_URL}/manifest.json`,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@sleeyax",
    images: [`${SITE_URL}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
