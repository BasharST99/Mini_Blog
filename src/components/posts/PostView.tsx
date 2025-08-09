"use client";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/core/types/post";
import { Typography } from "@mui/material";

export default function PostView({
  id,
  locale,
}: {
  id: string;
  locale: "en" | "ar";
}) {
  const { data, isLoading, isError } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: () => fetch(`/api/posts/${id}`).then(r => r.json()),
  });

  if (isLoading) return <p>Loading…</p>;
  if (isError || !data) return <p className="text-red-600">Not found.</p>;

  const title = locale === "ar" ? data.title_ar : data.title_en;
  const content = locale === "ar" ? data.content_ar : data.content_en;
  const by = locale === "ar" ? "بواسطة" : "By";

  return (
    <article className="space-y-4">
      <Typography variant="h4" className="font-bold">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {by} {data.author}
      </Typography>
      <Typography variant="body1" className="leading-8">
        {content}
      </Typography>
    </article>
  );
}
