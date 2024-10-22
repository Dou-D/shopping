// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MyTabs from "@/components/MyTabs";
import { MyTabsType } from "@/components/MyTabs/types";

const tabsConfig: MyTabsType[] = [
  {
    id: "1",
    title: "Light Mode",
  },
  {
    id: "2",
    title: "Dark Mode",
  },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <MyTabs tabs={tabsConfig} />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
