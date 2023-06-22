import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-8 px-4 text-center lg:w-1/2 md:w-2/3 mx-auto">
      <h1 className="flex flex-col w-full sm:text-4xl text-3xl font-medium mb-6">
        404 Not Found
      </h1>
      <p className="mb-6">お探しのページが見つかりませんでした。</p>
      <p className="w-4/5 mx-auto">
        <Link
          href="/"
          className="flex justify-center text-white bg-black border-0 py-2 px-2 focus:outline-none rounded text-lg transition md:hover:bg-slate-600"
        >
          トップページへ戻る
        </Link>
      </p>
    </section>
  );
}
