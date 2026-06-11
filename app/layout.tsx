import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://platinomstariptv.com"),

  title: {
    default: "Platinom Star IPTV",
    template: "%s | Platinom Star IPTV",
  },

  description:
    "Premium IPTV setup and support service for Smart TV, Android TV, Fire TV Stick, mobile devices and desktop users across Europe.",

  keywords: [
    "IPTV Europe",
    "IPTV Setup",
    "Premium IPTV",
    "Smart TV IPTV",
    "Android TV IPTV",
    "Fire TV IPTV",
    "IPTV Germany",
    "IPTV France",
    "IPTV Netherlands",
    "Streaming Service",
    "4K IPTV",
    "Live TV Europe",
    "IPTV Support",
    "IPTV Reseller",
    "IPTV Subscription",
  ],

  authors: [{ name: "Platinom Star IPTV" }],
  creator: "Platinom Star IPTV",
  publisher: "Platinom Star IPTV",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://platinomstariptv.com",
  },

  openGraph: {
    title: "Platinom Star IPTV",
    description:
      "Premium IPTV service with support for Smart TV, Android TV, Fire TV Stick, mobile and desktop devices.",
    url: "https://platinomstariptv.com",
    siteName: "Platinom Star IPTV",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Platinom Star IPTV",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Platinom Star IPTV",
    description:
      "Premium IPTV service and setup support across Europe.",
    images: ["/og-image.jpg"],
  },

  category: "Entertainment",
};