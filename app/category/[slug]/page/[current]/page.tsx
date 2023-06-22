import { getAllPost, getCategoryDetail } from "@/app/libs/posts";
import PostItem from "@/app/components/post-item";
import Pagination from "@/app/components/pagination";
import { LIMIT } from "@/app/libs/constants";
import { Metadata } from "next";

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

  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-8">
        {cat.name}の記事一覧
      </h1>
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
          current={current}
          basePath={PaginationBasePath}
        />
      </div>
    </section>
  );
}
