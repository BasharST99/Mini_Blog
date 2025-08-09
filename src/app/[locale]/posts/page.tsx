import Container from "@/components/layout/Container";
import PostList from "@/components/posts/PostList";

type P = { locale: "en" | "ar" };
export default async function PostsIndex({ params }: { params: P | Promise<P> }) {
  const { locale } = await Promise.resolve(params);
  return (
    <main>
      <Container>
        <PostList locale={locale} />
      </Container>
    </main>
  );
}
