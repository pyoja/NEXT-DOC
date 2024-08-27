"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function ShopPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slug = pathname.split("/").filter(Boolean).slice(1);

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Current Slug: {slug.join("/")}</p>
    </div>
  );
}
