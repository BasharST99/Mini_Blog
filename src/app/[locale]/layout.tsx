import "../globals.css";
import { ReactQueryProvider } from "@/core/query/react-query";
import { ColorModeProvider } from "@/core/theme/color-mode";
import { MuiProvider } from "@/core/theme/mui";
import Header from "@/components/layout/Header";

type LayoutParams = { locale: "en" | "ar" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}) {
  const { locale } = await params;
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
