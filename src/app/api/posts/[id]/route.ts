import { NextResponse } from "next/server";
import { posts } from "@/mocks/posts";

export function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}
