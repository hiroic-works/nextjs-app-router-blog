import Link from "next/link";

type Props = {
  catName?: string;
};

export default function NoPostContent({ catName }: Props) {
  return (
    <section className="py-8 px-4 text-center lg:w-1/2 md:w-2/3 mx-auto">
      {catName && (
        <h1 className="text-xl sm:text-3xl font-medium mb-8">
          {catName}の記事一覧
        </h1>
      )}
      <p className="mb-6">まだ記事がありません。</p>
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
