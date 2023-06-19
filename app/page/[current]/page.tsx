import Pagination from "@/app/components/pagination";
import PostItem from "@/app/components/post-item";
import { LIMIT } from "@/app/libs/constants";
import { getAllPost } from "@/app/libs/posts";

export default async function PostsPagination({
  params,
}: {
  params: {
    current: string;
  };
}) {
  const current = parseInt(params.current, 10);
  const PaginationBasePath = `/page`;

  const data = await getAllPost({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });
  return (
    <section className="text-gray-600 container px-5 py-10 md:py-20 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data.contents.map((post) => (
          <div className="p-4 md:w-1/3" key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          totalCount={data.totalCount}
          current={current}
          basePath={PaginationBasePath}
        />
      </div>
    </section>
  );
}
