import Container from "@/components/layout/Container";
import PostList from "@/components/posts/PostList";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;           // ✅ await params
  return (
    <main>
      <Container>
        <PostList locale={locale} />
      </Container>
    </main>
  );
}
