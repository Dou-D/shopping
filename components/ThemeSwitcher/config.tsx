import { MyTabsType } from "@/components/MyTabs/types";
import MyIcon from "@/components/MyIcons";
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";

export const tabsConfig: MyTabsType[] = [
  {
    id: "2",
    title: <MyIcon icon={faMoon} />,
  },
  {
    id: "1",
    title: <MyIcon icon={faSun} />,
  },
];
