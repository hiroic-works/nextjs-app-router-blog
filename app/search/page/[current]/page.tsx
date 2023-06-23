import Pagination from "@/app/components/pagination";
import PostList from "@/app/components/post-list";
import { LIMIT } from "@/app/libs/constants";
import { getAllPost } from "@/app/libs/posts";
import { Metadata } from "next";

type Props = {
  params: { current: string };
  searchParams: { q: string };
};

export const revalidate = 60;

export function generateMetadata({ params, searchParams }: Props): Metadata {
  return {
    title: `「${searchParams.q}」の検索結果 - Page ${params.current}`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {},
    twitter: {},
    alternates: {},
  };
}

export default async function SearchPagination({
  params,
  searchParams,
}: Props) {
  const current = parseInt(params.current, 10);
  const PaginationBasePath = `/search/page`;

  const data = await getAllPost({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    q: searchParams.q,
  });
  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <PostList posts={data.contents} />
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          current={current}
          basePath={PaginationBasePath}
          q={searchParams.q}
        />
      </div>
    </section>
  );
}
