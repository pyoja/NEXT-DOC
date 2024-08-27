// blog/page.tsx

import PostList from "./PostList";

export default function BlogPage() {
  // 예시 포스트 데이터
  const posts = [
    { id: 1, slug: "first-post", title: "첫 번째 게시물" },
    { id: 2, slug: "second-post", title: "두 번째 게시물" },
    { id: 3, slug: "third-post", title: "세 번째 게시물" },
  ];

  return (
    <div>
      <h1>블로그 페이지</h1>
      <PostList posts={posts} />
    </div>
  );
}
