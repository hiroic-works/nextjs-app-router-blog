import { getAllPost, getCategoryDetail } from "@/app/libs/posts";
import PostItem from "@/app/components/post-item";
import Pagination from "@/app/components/pagination";
import { LIMIT } from "@/app/libs/constants";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentData = await parent;
  return {
    title: `「${params.slug}」のカテゴリー`,
    description: `当ブログの「${params.slug}」のカテゴリーについてのページです`,
    openGraph: {
      ...parentData.openGraph,
      title: `「${params.slug}」のカテゴリー`,
      description: `当ブログの「${params.slug}」のカテゴリーについてのページです`,
      url: `/category/${params.slug}`,
    },
    alternates: {
      canonical: `/category/${params.slug}`,
    },
  };
}

export default async function Category({ params }: Props) {
  const { slug } = params;

  const cat = await getCategoryDetail(slug);
  const PaginationBasePath = `/category/${slug}/page`;

  const data = await getAllPost({
    limit: LIMIT,
    filters: `category[equals]${slug}`,
  });

  if (!data.contents || data.contents.length === 0)
    return (
      <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
        <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-8">
          {cat.name}の記事一覧
        </h1>
        <p className="text-lg text-gray-900 m-3">記事がありません</p>
      </section>
    );

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
          current={1}
          basePath={PaginationBasePath}
        />
      </div>
    </section>
  );
}
