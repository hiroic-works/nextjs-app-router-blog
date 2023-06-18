import { getAllPost, getCategoryDetail } from "@/app/libs/posts";
import PostItem from "@/app/components/post-item";

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const cat = await getCategoryDetail(slug);

  const { contents } = await getAllPost({
    filters: `category[equals]${slug}`,
  });

  if (!contents || contents.length === 0)
    return (
      <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
        <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-8">
          {cat.name}の記事一覧
        </h1>
        <p className="text-lg text-gray-900 m-3">記事がありません</p>
      </section>
    );

  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <h1 className="text-xl sm:text-3xl font-medium text-gray-900 mb-8">
        {cat.name}の記事一覧
      </h1>
      <div className="flex flex-wrap -m-4">
        {contents.map((post) => (
          <div className="p-4 md:w-1/3" key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
