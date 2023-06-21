import { Metadata, ResolvingMetadata } from "next";
import {
  generatePostDeitalMetaData,
  getAllPost,
  getPostDetail,
} from "@/app/libs/posts";
import PostDetail from "@/app/components/post-detail";

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return generatePostDeitalMetaData({ slug }, null, parent);
}

export async function generateStaticParams() {
  const { contents } = await getAllPost();

  const paths = contents.map((post) => {
    return {
      slug: post.id,
    };
  });

  return [...paths];
}

export default async function PostsDetail({ params: { slug } }: Props) {
  const post = await getPostDetail(slug);

  return <PostDetail post={post} />;
}
