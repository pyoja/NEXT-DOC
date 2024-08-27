import Link from "next/link";

const posts = [
  { id: 1, title: "첫 번째 포스트" },
  { id: 2, title: "두 번째 포스트" },
  { id: 3, title: "세 번째 포스트" },
];

export default function Posts() {
  return (
    <div>
      <h1>블로그 포스트 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/photo/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
