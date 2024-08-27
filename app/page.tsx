import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEXT.JS 공식문서 따라하기",
};

export default function Page() {
  return (
    <>
      <div>
        <h1>홈페이지</h1>
        <p>이 링크를 클릭하면 로그인 또는 회원가입 모달이 나타납니다.</p>
        <Link href="/?modal=login">로그인</Link>
        <Link href="/?modal=signup">회원가입</Link>
      </div>
    </>
  );
}
