import { LIMIT } from "@/app/libs/constants";
import Link from "next/link";

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "",
  q,
}: {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
}) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map(
    (_, i) => i + 1
  );

  if (pages.length <= 1) return;

  return (
    <ul className="flex flex-wrap items-center justify-center">
      {pages.map((p) => (
        <li key={p} className="m-2">
          {current !== p ? (
            <Link
              href={`${basePath}/${p}` + (q ? `?q=${q}` : "")}
              className="flex items-center justify-center w-8 h-8 bg-black text-white md:hover:bg-slate-600"
            >
              {p}
            </Link>
          ) : (
            <span className="flex items-center justify-center w-8 h-8 bg-gray-300 text-white">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
