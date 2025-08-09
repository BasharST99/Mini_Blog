"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { ReactNode, useMemo } from "react";
import { createEmotionCache } from "./rtl-cache";
import SafeCssBaseline from "./SafeCssBaseline";
import { useColorMode } from "./color-mode";

export function MuiProvider({ children, dir }: { children: ReactNode; dir: "ltr" | "rtl" }) {
  const { mode } = useColorMode();

  const theme = useMemo(
    () =>
      createTheme({
        direction: dir,
        palette: { mode },
        shape: { borderRadius: 16 },
        typography: {
          fontFamily:
            dir === "rtl"
              ? `"Tajawal","Segoe UI","Arial",sans-serif`
              : `"Inter","Segoe UI","Arial",sans-serif`,
        },
      }),
    [dir, mode]
  );

  const cache = useMemo(() => createEmotionCache(dir), [dir]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <SafeCssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
