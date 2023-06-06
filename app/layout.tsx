import { Metadata } from "next";
import "./globals.css";

const siteName = "サンプルブログ";
const siteDescription = "サンプルブログです。";
const siteUrl = process.env.SITE_URL || "";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sample",
  },
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="mask-icon" href="/icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
