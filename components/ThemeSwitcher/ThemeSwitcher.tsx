"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MyTabs from "@/components/MyTabs";
import { tabsConfig } from "./config";
import { constantTheme, ThemeKey } from "./types";



export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (id: ThemeKey) => {
    setTheme(constantTheme[id])
    localStorage.setItem("theme", constantTheme[id])
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return <MyTabs tabs={tabsConfig} handleChange={handleThemeChange} />;
};
