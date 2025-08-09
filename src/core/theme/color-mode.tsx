"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Mode = "light" | "dark";
type Ctx = { mode: Mode; toggle: () => void; setMode: (m: Mode) => void };

const ColorModeContext = createContext<Ctx | null>(null);

// decide initial mode without flashing
function getInitialMode(): Mode {
  try {
    const saved = localStorage.getItem("theme") as Mode | null;
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>(() => "light"); // render light on SSR, update after mount

  // apply to DOM after mount (avoids SSR/CSR mismatch)
  useEffect(() => {
    const m = getInitialMode();
    setModeState(m);
  }, []);

  useEffect(() => {
    // Tailwind + native form controls
    document.documentElement.classList.toggle("dark", mode === "dark");
    // allow UA to style built-in elements properly
    document.documentElement.style.colorScheme = mode;
    try { localStorage.setItem("theme", mode); } catch {}
  }, [mode]);

  const setMode = useCallback((m: Mode) => setModeState(m), []);
  const toggle  = useCallback(() => setModeState(p => (p === "dark" ? "light" : "dark")), []);

  const value = useMemo(() => ({ mode, toggle, setMode }), [mode, toggle, setMode]);
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode() {
  const ctx = useContext(ColorModeContext);
  if (!ctx) throw new Error("useColorMode must be used within ColorModeProvider");
  return ctx;
}
