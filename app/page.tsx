import { getAllPost } from "@/app/libs/posts";
import PostItem from "@/app/components/post-item";

export default async function Home() {
  const { contents } = await getAllPost();

  if (!contents || contents.length === 0) return <h1>記事がありません</h1>;

  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
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
