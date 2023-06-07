import { Posts } from "@/app/types/posts";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post }: { post: Posts }) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Link href={`/posts/${post.id}`}>
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={post.ogimage ? post.ogimage?.url : "/no-thumb-image.png"}
          width={720}
          height={400}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
            {post.category ? post.category.name : "No Category"}
          </h2>
          <h1 className="line-clamp-1 text-lg font-medium text-gray-900 mb-3">
            {post.title}
          </h1>
          <p className="leading-relaxed text-sm mb-3 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center flex-wrap ">
            <p className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
              続きを読む
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
