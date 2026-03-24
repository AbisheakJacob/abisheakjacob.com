import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: {
    default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.summary,
  keywords: [
    "Analytics Professional",
    "Portfolio",
    RESUME_DATA.name,
    ...RESUME_DATA.skills,
  ],
  openGraph: {
    title: {
      default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      template: `%s | ${RESUME_DATA.name}`,
    },
    description: RESUME_DATA.summary,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: RESUME_DATA.name,
    images: [
      {
        url: "/abisheakjacob.jpg",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
