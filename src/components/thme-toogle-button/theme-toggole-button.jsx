"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // মাউন্ট হওয়ার পর স্টেট ট্রু হবে (হাইড্রেশন এরর এড়ানোর জন্য সঠিক নিয়ম)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border rounded-full bg-accent text-accent-foreground flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <LuSun className="w-5 h-5" />
      ) : (
        <MdOutlineDarkMode className="w-5 h-5" />
      )}
    </button>
  );
}
