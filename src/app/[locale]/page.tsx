import Container from "@/components/layout/Container";
import PostList from "@/components/posts/PostList";

type PageParams = { locale: "en" | "ar" };

export default async function Home({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale } = await params;   
  return (
    <main>
      <Container>
        <PostList locale={locale} />
      </Container>
    </main>
  );
}
