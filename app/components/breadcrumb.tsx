import { Posts } from "@/app/types/posts";
import Link from "next/link";

export default function Breadcrumb({ post }: { post: Posts }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline sm:inline-flex items-center space-x-1 md:space-x-3 truncate">
        <li className="inline sm:block">
          <Link
            href="/"
            className="text-sm font-medium transition md:hover:border-b md:hover:border-gray-400"
          >
            Home
          </Link>
        </li>
        {post.category && (
          <li className="inline sm:block">
            <div className="inline sm:flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href={`/category/${post.category.id}`}
                className="ml-1 text-sm font-medium transition md:hover:border-b md:hover:border-gray-400 md:ml-2"
              >
                {post.category.name}
              </Link>
            </div>
          </li>
        )}
        <li className="inline sm:block" aria-current="page">
          <div className="inline sm:flex items-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-400 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 text-sm font-medium md:ml-2">
              {post.title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
