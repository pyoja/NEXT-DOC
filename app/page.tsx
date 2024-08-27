import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEXT.JS 공식문서 따라하기",
};

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <h2>
        <Link href="/dashboard">Dashboard</Link>
      </h2>
    </>
  );
}
