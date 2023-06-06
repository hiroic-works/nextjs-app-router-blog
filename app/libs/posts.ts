import { MicroCMSQueries, createClient } from "microcms-js-sdk";
import { Posts } from "@/app/types/posts";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const endpoint = process.env.MICROCMS_ARTICLE_ENDPOINT || "";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getAllPost = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Posts>({
    endpoint,
    queries,
  });

  return listData;
};

export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Posts>({
    endpoint,
    contentId,
    queries,
  });
  return detailData;
};
