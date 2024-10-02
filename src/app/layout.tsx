import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/components/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leadiculous - Realtime lead generation for your business",
  description:
    "Monitor social media posts in realtime and get notified of leads ready to purchase your product or service.",
};

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
