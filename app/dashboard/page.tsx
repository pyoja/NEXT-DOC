import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "여기는 대시보드",
};

// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>이 페이지에서 설정 섹션으로 스크롤할 수 있습니다.</p>
      <div style={{ height: "150vh" }}></div>{" "}
      {/* 스크롤을 테스트하기 위해 페이지 높이를 증가 */}
      <section id="letsgo">
        <h2>Settings</h2>
        <p>여기는 설정 섹션입니다.</p>
      </section>
    </div>
  );
}
