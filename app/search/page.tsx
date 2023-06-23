import { getAllPost } from "@/app/libs/posts";
import PostList from "@/app/components/post-list";
import { LIMIT } from "@/app/libs/constants";
import Pagination from "@/app/components/pagination";
import { Metadata } from "next";
import BaseContainer from "@/app/components/base-container";

type Props = {
  searchParams: { q: string };
};

export const revalidate = 60;

export function generateMetadata({ searchParams }: Props): Metadata {
  return {
    title: `「${searchParams.q}」の検索結果`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {},
    twitter: {},
    alternates: {},
  };
}

export default async function Search({ searchParams }: Props) {
  const data = await getAllPost({
    limit: LIMIT,
    q: searchParams.q,
  });

  const PaginationBasePath = `/search/page`;

  if (!data.contents || data.contents.length === 0)
    return <h1>記事がありません</h1>;

  return (
    <BaseContainer>
      <PostList posts={data.contents} />
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          basePath={PaginationBasePath}
          q={searchParams.q}
        />
      </div>
    </BaseContainer>
  );
}
