import Link from "next/link";

export default function Post({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>포스트 {params.id}</h1>
      <p>이것은 포스트 {params.id}의 전체 페이지 버전입니다.</p>
      <Link href="/posts">돌아가기</Link>
    </div>
  );
}
