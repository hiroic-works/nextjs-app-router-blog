import { Posts } from "@/app/types/posts";
import dayjs from "dayjs";
import parse, {
  Element,
  HTMLReactParserOptions,
  Text,
  attributesToProps,
} from "html-react-parser";
import PostWriter from "@/app/components/post-writer";
import Breadclumb from "@/app/components/breadcrumb";
import SnsBtn from "@/app/components/sns-btn";
import Link from "next/link";
import PostRelated from "@/app/components/post-related";
import hljs, { AutoHighlightResult } from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

export default async function PostsDetail({ post }: { post: Posts }) {
  const siteUrl = process.env.SITE_URL || "";
  const pageUrl = `${siteUrl}/posts/${post.id}`;

  const parseOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "iframe") {
          const props = attributesToProps(domNode.attribs);
          return (
            <div className="relative overflow-hidden w-full aspect-video">
              <iframe {...props} className="absolute inset-0 w-full h-full" />
            </div>
          );
        }
        if (domNode.name === "pre") {
          const pre = domNode.children[0] as Element;
          const props = attributesToProps(pre.attribs);
          const code = pre.children[0] as Text;
          const data: string = code.data;
          const highlightCode: AutoHighlightResult = hljs.highlightAuto(data);
          const dom = parse(highlightCode.value);
          return (
            <pre>
              <code className={`${props?.className} hljs`}>{dom}</code>
            </pre>
          );
        }
      }
    },
  };

  const breadclumbs = [
    {
      title: post?.category?.name || "",
      href: post?.category?.id ? `/category/${post?.category?.id}` : "",
    },
    {
      title: post.title,
      href: "",
    },
  ];

  return (
    <article className="max-w-5xl px-5 py-10 md:py-20 mx-auto">
      <div className="mb-8">
        <Breadclumb lists={breadclumbs} />
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
      <div className="mt-8">
        <h2 className="text-2xl font-medium text-center border-b pb-2">
          この投稿をシェアする
        </h2>
        <SnsBtn url={pageUrl} title={post.title} />
      </div>
      {post.writer && (
        <div className="mt-8">
          <PostWriter writer={post.writer} />
        </div>
      )}
      {post.category && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-medium text-center border-b pb-2">
            関連記事
          </h2>
          <PostRelated categoryId={post.category.id} currentPostId={post.id} />
        </div>
      )}
      <p className="w-4/5 mx-auto mt-8">
        <Link
          href="/"
          className="flex justify-center text-white bg-black border-0 py-2 px-2 focus:outline-none rounded text-lg transition md:hover:bg-slate-600"
        >
          トップページへ戻る
        </Link>
      </p>
    </article>
  );
}
