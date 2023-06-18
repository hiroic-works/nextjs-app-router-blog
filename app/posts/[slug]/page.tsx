import { Metadata, ResolvingMetadata } from "next";
import dayjs from "dayjs";
import parse, {
  Element,
  HTMLReactParserOptions,
  attributesToProps,
} from "html-react-parser";
import PostWriter from "@/app/components/post-writer";
import { getAllPost, getPostDetail } from "@/app/libs/posts";
import Breadclumb from "@/app/components/breadcrumb";

export async function generateMetadata(
  {
    params: { slug },
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
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

  const parseOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "iframe") {
        const props = attributesToProps(domNode.attribs);
        return (
          <div className="relative overflow-hidden w-full aspect-video">
            <iframe {...props} className="absolute inset-0 w-full h-full" />
          </div>
        );
      }
    },
  };

  return (
    <article className="text-gray-600 max-w-5xl px-5 py-10 md:py-20 mx-auto">
      <div className="mb-8">
        <Breadclumb post={post} />
      </div>
      <div className="prose max-w-full">
        <h1>{post.title}</h1>
        {post.category && (
          <div className="block text-sm">カテゴリー: {post.category.name}</div>
        )}
        <div className="block text-sm">
          公開日: {dayjs(post.publishedAt).format("YYYY-MM-DD")}
          {"  "}
          {post.publishedAt !== post.updatedAt
            ? `更新日: ${dayjs(post.updatedAt).format("YYYY-MM-DD")}`
            : ""}
        </div>
        {parse(post.body, parseOptions)}
      </div>
      {post.writer && (
        <div className="mt-8">
          <PostWriter writer={post.writer} />
        </div>
      )}
    </article>
  );
}
