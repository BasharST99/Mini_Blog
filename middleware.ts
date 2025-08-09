import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip API & static
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    PUBLIC_FILE.test(pathname)
  ) return NextResponse.next();

  // Already /en or /ar ?
  if (/^\/(en|ar)(\/|$)/.test(pathname)) return NextResponse.next();

  // Not localized -> /en + same path
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
