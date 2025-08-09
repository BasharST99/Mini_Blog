"use client";
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/core/types/post";
import PostCard from "./PostCard";
import { Skeleton } from "@mui/material";

export default function PostList({ locale }: { locale: "en" | "ar" }) {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/posts").then(r => r.json()),
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 border rounded-xl">
            <Skeleton variant="text" height={28} />
            <Skeleton variant="text" width={120} />
          </div>
        ))}
      </div>
    );
  }

  if (isError || !data?.length) {
    return (
      <p className="text-red-600">
        {locale === "ar" ? "فشل تحميل المقالات." : "Failed to load posts."}
      </p>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {data.map(p => (
        <PostCard key={p.id} post={p} locale={locale} />
      ))}
    </div>
  );
}
