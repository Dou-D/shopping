import MyIcon from "../MyIcons";
import { MyTabsType } from "../MyTabs/types";
import {
  faHeart,
  faShoePrints,
  faBowlFood,
  faPhoneAlt,
  faTshirt,
  faCouch,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const CommodityCategoryData: MyTabsType[] = [
  {
    id: "猜你喜欢",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faHeart} />
        <span>猜你喜欢</span>
      </div>
    ),
  },
  {
    id: "户外运动",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faShoePrints} />
        <span>户外运动</span>
      </div>
    ),
  },
  {
    id: "馋嘴零食",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faBowlFood} />
        <span>馋嘴零食</span>
      </div>
    ),
  },
  {
    id: "手机数码",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faPhoneAlt} />
        <span>手机数码</span>
      </div>
    ),
  },
  {
    id: "服饰时尚",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faTshirt} />
        <span>服饰时尚</span>
      </div>
    ),
  },
  {
    id: "家居家用",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faCouch} />
        <span>家居家用</span>
      </div>
    ),
  },
  {
    id: "个护家清",
    title: (
      <div className="flex items-center space-x-2">
        <MyIcon icon={faUtensils} />
        <span>个护家清</span>
      </div>
    ),
  },
];
