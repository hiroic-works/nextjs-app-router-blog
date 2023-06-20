import { Posts } from "@/app/types/posts";
import dayjs from "dayjs";
import parse, {
  Element,
  HTMLReactParserOptions,
  attributesToProps,
} from "html-react-parser";
import PostWriter from "@/app/components/post-writer";
import Breadclumb from "@/app/components/breadcrumb";

export default async function PostsDetail({ post }: { post: Posts }) {
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
