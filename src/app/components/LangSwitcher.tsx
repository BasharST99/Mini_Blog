"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher({ locale }: { locale: "en" | "ar" }) {
  const router = useRouter();
  const pathname = usePathname();
  const other = locale === "ar" ? "en" : "ar";
  return (
    <button
      className="px-3 py-1 rounded-xl border hover:bg-gray-50"
      onClick={() => router.push(`/${other}${pathname?.slice(3) || ""}`)}
    >
      {other.toUpperCase()}
    </button>
  );
}
