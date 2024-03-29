import { getAllPost, getCategoryDetail } from "@/app/libs/posts";
import PostList from "@/app/components/post-list";
import Pagination from "@/app/components/pagination";
import { LIMIT } from "@/app/libs/constants";
import { Metadata, ResolvingMetadata } from "next";
import NoPostContent from "@/app/components/no-post-content";
import BaseContainer from "@/app/components/base-container";
import Breadclumb from "@/app/components/breadcrumb";

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
    return <NoPostContent catName={cat.name} />;

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
          current={1}
          basePath={PaginationBasePath}
        />
      </div>
    </BaseContainer>
  );
}
