import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EuroStream Setup | Premium Streaming Setup for Europe",
  description:
    "Premium streaming setup support for Smart TV, Fire TV, Android TV, mobile and desktop users across France, Germany and the Netherlands.",
  keywords: [
    "streaming setup Europe",
    "Smart TV setup",
    "Fire TV setup",
    "Android TV setup",
    "streaming support France",
    "streaming support Germany",
    "streaming support Netherlands",
    "reseller streaming setup",
  ],
  authors: [{ name: "EuroStream Setup" }],
  creator: "EuroStream Setup",
  publisher: "EuroStream Setup",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EuroStream Setup | Premium Streaming Setup for Europe",
    description:
      "Fast setup guidance and multilingual support for Smart TV, Fire TV, Android TV and mobile users in Europe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}