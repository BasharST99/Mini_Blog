import Container from "@/components/layout/Container";
import PostView from "@/components/posts/PostView";

type PageParams = { locale: "en" | "ar"; id: string };

export default async function PostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale, id } = await params; 
  return (
    <main>
      <Container>
        <PostView id={id} locale={locale} />
      </Container>
    </main>
  );
}
