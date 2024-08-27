import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 모든 요청에 대해 로그 남기기
  console.log(`Request to ${pathname}`);

  // '/admin' 경로에 대한 간단한 인증 체크
  if (pathname.startsWith("/admin")) {
    const isAuth = request.nextUrl.searchParams.get("auth") === "true";
    if (!isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // '/photo' 경로에 대한 헤더 추가
  if (pathname.startsWith("/photo")) {
    const response = NextResponse.next();
    response.headers.set("x-photo-custom-header", "photo-page");
    return response;
  }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: [
    "/admin/:path*",
    "/photo/:path*",
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};
