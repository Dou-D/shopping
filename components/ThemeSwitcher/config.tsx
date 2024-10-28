import { MyTabsType } from "@/components/MyTabs/types";
import MyIcon from "@/components/MyIcons";
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";

export const tabsConfig: MyTabsType[] = [
  {
    id: "dark",
    title: <MyIcon icon={faMoon} />,
  },
  {
    id: "light",
    title: <MyIcon icon={faSun} />,
  },
];
