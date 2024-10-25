export interface MyTabsType {
  id: string;
  title: string;
  content?: any;
}

export interface MyTabsProps {
  tabs: MyTabsType[];
  handleThemeChange: (key: React.Key) => void;
}
