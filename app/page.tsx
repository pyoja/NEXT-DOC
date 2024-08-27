import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEXT.JS 공식문서 따라하기",
};

export default function Page({
  team,
  analytics,
}: {
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h1>홈페이지</h1>
        <p>이 링크를 클릭하면 대시보드의 설정 섹션으로 이동합니다.</p>
        <Link href="/dashboard">대시보드</Link>
        <br />
        <Link href="/dashboard#letsgo">Go to Settings</Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {team}
        {analytics}
      </div>
    </>
  );
}
