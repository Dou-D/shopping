export interface MyTabsType {
  id: string;
  title: React.ReactNode
  content?: React.ReactNode;
}

export interface MyTabsProps {
  tabs: MyTabsType[];
  handleThemeChange: (key: React.Key) => void;
}
