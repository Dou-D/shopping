"use client";

import { useTheme } from "next-themes";
import { Key, useEffect, useState } from "react";
import MyTabs from "@/components/MyTabs";
import { MyTabsType } from "@/components/MyTabs/types";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
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

  const handleThemeChange = (id: Key) => {
    if (id === "1") {
      setTheme("light");
    } else if (id === "2") {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <MyTabs tabs={tabsConfig} handleThemeChange={handleThemeChange} />
    </div>
  );
}
