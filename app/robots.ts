import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL;
  return {
    rules: {
      userAgent: "*",
      disallow: "/search/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
