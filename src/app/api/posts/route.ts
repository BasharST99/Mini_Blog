import { NextResponse } from "next/server";
import { posts } from "@/mocks/posts";

export function GET() {
  return NextResponse.json(posts);
}
