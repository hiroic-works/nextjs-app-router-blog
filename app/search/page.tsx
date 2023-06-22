import { getAllPost } from "@/app/libs/posts";
import PostItem from "@/app/components/post-item";
import { LIMIT } from "@/app/libs/constants";
import Pagination from "@/app/components/pagination";
import { Metadata } from "next";

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
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data.contents.map((post) => (
          <div className="p-4 md:w-1/3" key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          basePath={PaginationBasePath}
          q={searchParams.q}
        />
      </div>
    </section>
  );
}
