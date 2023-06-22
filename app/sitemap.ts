import { getAllCategory, getAllPost } from "@/app/libs/posts";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
}>;

export default async function sitemap(): Promise<Sitemap> {
  const siteUrl = process.env.SITE_URL || "";

  const { contents: posts } = await getAllPost();
  const postsSitemap =
    posts.map((post) => ({
      url: `${siteUrl}/posts/${post.id}`,
      lastModified: post.updatedAt,
    })) ?? [];

  const { contents: categories } = await getAllCategory();
  const categoriesSitemap =
    categories.map((cat) => ({
      url: `${siteUrl}/category/${cat.id}`,
      lastModified: cat.updatedAt,
    })) ?? [];

  return [
    { url: siteUrl, lastModified: new Date() },
    ...postsSitemap,
    ...categoriesSitemap,
  ];
}
