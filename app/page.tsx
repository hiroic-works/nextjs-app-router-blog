import Link from "next/link";
import { getAllPost } from "@/app/libs/posts";

export default async function Home() {
  const { contents } = await getAllPost();

  if (!contents || contents.length === 0) return <h1>記事がありません</h1>;

  return (
    <main>
      <h1>記事一覧</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
