import Container from "@/components/layout/Container";
import PostView from "@/components/posts/PostView";

type P = { locale: "en" | "ar"; id: string };
const getParams = (p: P | Promise<P>) => Promise.resolve(p);

export default async function PostPage({
  params,
}: {
  params: P | Promise<P>;
}) {
  const { locale, id } = await getParams(params);

  return (
    <main>
      <Container>
        <PostView id={id} locale={locale} />
      </Container>
    </main>
  );
}
