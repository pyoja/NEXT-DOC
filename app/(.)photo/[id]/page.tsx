"use client";

import { useRouter } from "next/navigation";

export default function PostPhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="modal">
      <h2>포스트 {params.id}의 사진</h2>
      <p>이것은 포스트 {params.id}의 사진 모달 버전입니다.</p>
      <button onClick={() => router.back()}>닫기</button>
    </div>
  );
}
