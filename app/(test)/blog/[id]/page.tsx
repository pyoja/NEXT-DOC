// 로컬 데이터 예시
const localPosts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
  { id: "3", title: "Third Post" },
];

export async function generateStaticParams() {
  // 로컬 데이터를 사용하여 동적 경로 생성
  return localPosts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const post = localPosts.find((post) => post.id === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post ID: {params.id}</p>
    </div>
  );
}
