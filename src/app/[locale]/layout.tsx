import "../globals.css";
import { ReactQueryProvider } from "@/core/query/react-query";
import { MuiProvider } from "@/core/theme/mui";
import Header from "@/components/layout/Header";
import { ColorModeProvider } from "@/core/theme/color-mode";


type P = { locale: "en" | "ar" };
const getParams = (p: P | Promise<P>) => Promise.resolve(p);

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: P | Promise<P>;
}) {
  const { locale } = await getParams(params);
  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  return (
  <ReactQueryProvider>
    <ColorModeProvider>
      <MuiProvider dir={dir}>
        <Header locale={locale} />
        {children}
      </MuiProvider>
    </ColorModeProvider>
  </ReactQueryProvider>
  );
}
