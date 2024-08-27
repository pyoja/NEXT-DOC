import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <Link href="/posts">블로그 포스트 목록 보기</Link>
    </div>
  );
}
