"use client";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { Post } from "@/core/types/post";

export default function PostCard({
  post,
  locale,
}: {
  post: Post;
  locale: "en" | "ar";
}) {
  const title = locale === "ar" ? post.title_ar : post.title_en;
  const by = locale === "ar" ? "بواسطة" : "By";

  return (
    <Link href={`/${locale}/posts/${post.id}`} className="no-underline">

      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardActionArea>
          <CardContent>
            <Typography variant="h6" className="font-semibold" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {by} {post.author}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
