import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import Image from "next/image";
import { getAllPost, getPostDetail } from "@/app/libs/posts";

export async function generateMetadata(
  {
    params: { slug },
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata
) {
  const parentMetadata = await parent;
  const post = await getPostDetail(slug);
  const siteUrl = process.env.SITE_URL || "";
  const pageUrl = `${siteUrl}/posts/${slug}`;
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      ...parentMetadata.openGraph,
      title: post.title,
      description: post.description,
      url: pageUrl,
      type: "article",
    },
    alternates: {
      canonical: pageUrl,
    },
  };
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

export default async function PostsDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostDetail(slug);

  if (!post) notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <div>{parse(post.body)}</div>
      {post.writer && (
        <>
          <h2>Author</h2>
          <div>{post.writer?.name}</div>
          <div>{post.writer?.text}</div>
          <div>
            <Image
              src={post.writer?.image?.url}
              width={post.writer?.image?.width}
              height={post.writer?.image?.height}
              alt="Author"
            />
          </div>
        </>
      )}
    </main>
  );
}
