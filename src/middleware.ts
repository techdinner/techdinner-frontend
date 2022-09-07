import { NextRequest, NextResponse } from "next/server";

export async function middleware(
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> {
  const { pathname } = req.nextUrl;
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  return NextResponse.next();
}
