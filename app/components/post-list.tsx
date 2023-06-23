import PostItem from "@/app/components/post-item";
import { Posts } from "@/app/types/posts";

type Props = {
  posts: Posts[];
};

export default function PostsPagination({ posts }: Props) {
  return (
    <div className="flex flex-wrap -m-4">
      {posts.map((post) => (
        <div className="p-4 md:w-1/3" key={post.id}>
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
}
