import { NextResponse } from "next/server";
import { posts } from "@/mocks/posts";

export async function GET() {
  return NextResponse.json(posts);
}
