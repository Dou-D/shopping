import { Key } from "react";

export interface MyTabsType {
  id: string;
  title: React.ReactNode
  content?: React.ReactNode;
}

export interface MyTabsProps {
  tabs: MyTabsType[];
  handleChange: (key: Key) => void;
}
