import Pagination from "@/app/components/pagination";
import PostList from "@/app/components/post-list";
import { LIMIT } from "@/app/libs/constants";
import { getAllPost } from "@/app/libs/posts";
import { Metadata } from "next";
import BaseContainer from "@/app/components/base-container";

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Page ${params.current}`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {},
    twitter: {},
    alternates: {},
  };
}

export default async function PostsPagination({ params }: Props) {
  const current = parseInt(params.current, 10);
  const PaginationBasePath = `/page`;

  const data = await getAllPost({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });
  return (
    <BaseContainer>
      <PostList posts={data.contents} />
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          current={current}
          basePath={PaginationBasePath}
        />
      </div>
    </BaseContainer>
  );
}
