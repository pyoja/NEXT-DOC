"use client";

import Link from "next/link";

export default function Home() {
  const openVideoPopup = () => {
    const videoUrl = "/climb.mp4"; // 영상 경로
    const video = document.createElement("video");
    video.src = videoUrl;

    video.onloadedmetadata = () => {
      const width = video.videoWidth;
      const height = video.videoHeight;
      const popup = window.open(
        "",
        "VideoPopup",
        `width=${width},height=${height},resizable=yes`
      );

      if (popup) {
        popup.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Video</title>
          </head>
          <body style="margin:0;display:flex;align-items:center;justify-content:center;background-color:#000;">
            <video width="100%" height="100%" controls autoplay>
              <source src="${videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </body>
          </html>
        `);
        popup.document.close();
      }
    };
  };

  const openYouTubePopup = () => {
    const youtubeUrl = "https://www.youtube.com/embed/7d97N8zgEDg"; // Replace with your YouTube video ID
    const popup = window.open(
      "",
      "YouTubePopup",
      `width=800,height=450,resizable=yes`
    );

    if (popup) {
      popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>YouTube Video</title>
        </head>
          <body style="margin:0;padding:0;display:flex;align-items:center;justify-content:center;background-color:#000;width:100%;height:100%;overflow:hidden;">
            <div style="position:relative;width:100%;height:0;padding-bottom:56.25%;">
              <iframe
                src="${youtubeUrl}"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </body>
        </html>
      `);
      popup.document.close();
    }
  };

  return (
    <div>
      <h1>홈페이지</h1>
      <Link href="/posts">블로그 포스트 목록 보기</Link>
      <br />
      <button
        onClick={openVideoPopup}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        비디오 보기
      </button>
      <br />
      <button
        onClick={openYouTubePopup}
        style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
      >
        유튜브 보기
      </button>
    </div>
  );
}
