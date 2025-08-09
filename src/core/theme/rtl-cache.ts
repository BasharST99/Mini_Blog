"use client";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

export function createEmotionCache(direction: "ltr" | "rtl") {
  let insertionPoint: HTMLElement | undefined;
  if (typeof document !== "undefined") {
    insertionPoint = document.querySelector('meta[name="emotion-insertion-point"]') as HTMLElement | undefined;
  }
  return createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui",
    stylisPlugins: direction === "rtl" ? [rtlPlugin] : [],
    insertionPoint,
  });
}
