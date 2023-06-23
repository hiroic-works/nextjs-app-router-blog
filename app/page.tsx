import { getAllPost } from "@/app/libs/posts";
import PostList from "@/app/components/post-list";
import { LIMIT } from "@/app/libs/constants";
import Pagination from "@/app/components/pagination";
import NoPostContent from "@/app/components/no-post-content";

export const revalidate = 60;

export default async function Home() {
  const data = await getAllPost({
    limit: LIMIT,
  });
  const PaginationBasePath = `/page`;

  if (!data.contents || data.contents.length === 0) return <NoPostContent />;

  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <PostList posts={data.contents} />
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          basePath={PaginationBasePath}
        />
      </div>
    </section>
  );
}
