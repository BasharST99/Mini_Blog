"use client";
import Container from "./Container";
import { IconButton, Button, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useColorMode } from "@/core/theme/color-mode";

function swapLocale(pathname: string, next: "en" | "ar") {
  const m = pathname.match(/^\/(en|ar)(\/.*)?$/);
  if (m) return `/${next}${m[2] || ""}`;
  return `/${next}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export default function Header({ locale }: { locale: "en" | "ar" }) {
  const pathname = usePathname() || `/${locale}`;
  const other = locale === "ar" ? "en" : "ar";
  const { mode, toggle } = useColorMode();

  return (
    <header className="border-b bg-white/70 dark:bg-neutral-900/70 backdrop-blur sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="no-underline">
            <h1 className="text-xl font-semibold">Mini Blog</h1>
          </Link>
          <div className="flex items-center gap-2">
            <Tooltip title={mode === "dark" ? (locale === "ar" ? "وضع فاتح" : "Light mode")
              : (locale === "ar" ? "وضع داكن" : "Dark mode")}>
              <IconButton onClick={toggle} size="small">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            <Button
              variant="contained"
              size="small"
              component={Link}
              href={swapLocale(pathname, other)}
              sx={{
                bgcolor: mode === "dark" ? "yellow.400" : "grey.900",
                color: mode === "dark" ? "black" : "white",
                "&:hover": {
                  bgcolor: mode === "dark" ? "yellow.500" : "grey.800",
                },
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {other}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
