"use client";

import { useTheme } from "next-themes";
import { Key, useEffect, useState } from "react";
import MyTabs from "@/components/MyTabs";
import { tabsConfig } from "./config";

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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

  if (!mounted) return <></>;

  return <MyTabs tabs={tabsConfig} handleChange={handleThemeChange} />;
};
