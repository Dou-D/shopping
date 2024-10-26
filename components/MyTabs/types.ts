export interface MyTabsType {
  id: string;
  title: JSX.Element;
  content?: any;
}

export interface MyTabsProps {
  tabs: MyTabsType[];
  handleThemeChange: (key: React.Key) => void;
}
