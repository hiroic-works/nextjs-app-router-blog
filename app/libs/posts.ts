import { MicroCMSQueries, createClient } from "microcms-js-sdk";
import { Posts } from "@/app/types/posts";
import { notFound } from "next/navigation";

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
