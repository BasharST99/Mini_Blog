import { NextResponse, type NextRequest } from "next/server";
import { posts } from "@/mocks/posts"; // adjust path if your mocks live elsewhere

type Params = { id: string };

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<Params> }
) {
  const { id } = await ctx.params;         
  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
