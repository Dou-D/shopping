import { ThemeKey } from "@/components/ThemeSwitcher/types";

export interface MyTabsType {
  id: string;
  title: React.ReactNode
  content?: React.ReactNode;
}

export interface MyTabsProps {
  tabs: MyTabsType[];
  handleChange: (key: ThemeKey) => void;
}
