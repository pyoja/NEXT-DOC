import type { Metadata } from "next";
import { Suspense } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { PostFeed, Weather } from "./Components";

export const metadata: Metadata = {
  title: "여기는 대시보드",
};

// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <section>
      <Suspense fallback={<LoadingSkeleton />}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        <Weather />
      </Suspense>
    </section>
  );
}
