import { Metadata, ResolvingMetadata } from "next";
import { generatePostDeitalMetaData, getPostDetail } from "@/app/libs/posts";
import PostDetail from "@/app/components/post-detail";

type Props = {
  params: { slug: string };
  searchParams: { dk: string };
};

export const revalidate = 0;

export async function generateMetadata(
  { params: { slug }, searchParams: { dk } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return generatePostDeitalMetaData({ slug }, { dk }, parent);
}

export default async function PostsDetailPreview({
  params: { slug },
  searchParams: { dk },
}: Props) {
  const post = await getPostDetail(slug, {
    draftKey: dk,
  });

  return <PostDetail post={post} />;
}
