import { MicroCMSQueries, createClient } from "microcms-js-sdk";
import { Category, Posts } from "@/app/types/posts";
import { notFound } from "next/navigation";
import { ResolvingMetadata } from "next";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getAllPost = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Posts>({
      endpoint: "blog",
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Posts>({
      endpoint: "blog",
      contentId,
      queries,
    })
    .catch(notFound);
  return detailData;
};

export const getAllCategory = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: "categories",
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: "categories",
      contentId,
      queries,
    })
    .catch(notFound);
  return detailData;
};

export const generatePostDeitalMetaData = async (
  params: { slug: string },
  searchParams: { dk: string } | null,
  parent: ResolvingMetadata
) => {
  const parentMetadata = await parent;
  let sParams;
  if (typeof searchParams?.dk === "string") {
    sParams = { draftKey: searchParams?.dk };
  }
  const post = await getPostDetail(params.slug, sParams);
  const pageUrl = `/posts/${params.slug}`;

  try {
    if (!post) {
      return {
        title: "ページがありません",
        description: "ページが存在しませんでした",
        robots: {
          index: false,
          follow: true,
        },
      };
    }
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        ...parentMetadata.openGraph,
        title: post.title,
        description: post.description,
        url: pageUrl,
        type: "article",
      },
      alternates: {
        canonical: pageUrl,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "ページがありません",
      description: "ページが存在しませんでした",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
};
