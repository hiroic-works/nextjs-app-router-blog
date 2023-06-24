import Link from "next/link";

type BreadcrumbList = {
  title: string;
  href: string;
};

type Props = {
  lists: BreadcrumbList[];
};

export default function Breadcrumb({ lists }: Props) {
  const breadclumbLists = [{ title: "Home", href: "/" }, ...lists];
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline sm:inline-flex items-center truncate">
        {breadclumbLists.map((list, index) => (
          <li key={index} className="inline sm:block">
            {breadclumbLists.length - 1 !== index ? (
              <div className="inline sm:flex items-center">
                <Link
                  href={list.href}
                  className="text-sm font-medium transition md:hover:border-b md:hover:border-gray-400"
                >
                  {list.title}
                </Link>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 inline-block mx-1"
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
              </div>
            ) : (
              <span className="text-sm font-medium">{list.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
