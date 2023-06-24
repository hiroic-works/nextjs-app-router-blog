import { getAllPost, getCategoryDetail } from "@/app/libs/posts";
import PostList from "@/app/components/post-list";
import Pagination from "@/app/components/pagination";
import { LIMIT } from "@/app/libs/constants";
import { Metadata } from "next";
import BaseContainer from "@/app/components/base-container";
import Breadclumb from "@/app/components/breadcrumb";

type Props = {
  params: {
    slug: string;
    current: string;
  };
};

export const revalidate = 60;

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `「${params.slug}」のカテゴリー - Page ${params.current}`,
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {},
    twitter: {},
    alternates: {},
  };
}

export default async function CategoryPagination({ params }: Props) {
  const { slug } = params;
  const current = parseInt(params.current, 10);
  const PaginationBasePath = `/category/${slug}/page`;

  const cat = await getCategoryDetail(slug);

  const data = await getAllPost({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `category[equals]${slug}`,
  });

  const breadclumbs = [
    {
      title: cat.name || "",
      href: slug,
    },
  ];

  return (
    <BaseContainer>
      <div className="mb-4">
        <Breadclumb lists={breadclumbs} />
      </div>
      <h1 className="text-xl sm:text-3xl font-medium mb-8">
        {cat.name}の記事一覧
      </h1>
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
