import { Rating } from "@mui/material";
import { Button, Spacer } from "@nextui-org/react";
import {
  faRobot,
  faShop,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import MyIcon from "@/components/MyIcons";
// import ShopHeaderAvatar from "@/components/ShopHeaderAvatar";
import MyTags from "../MyTags";

export const ShopHeader: React.FC = () => {
  return (
    <>
      <div className="flex justify-center my-1 w-full">
        <div className="w-8/12 p-3 flex justify-between bg-[#F3F6F8] rounded-xl">
          <div className="detailWrap flex items-center">
            {/* <ShopHeaderAvatar /> */}
            商家头像信息，正在开发...
            <Rating
              icon={<MyIcon icon={faHeart} />}
              emptyIcon={<MyIcon icon={faHeartBroken} />}
              name="read-only"
              value={3}
              readOnly
            />
            <MyTags />
          </div>
          <div className="optionWrap flex">
            <Button color="primary" startContent={<MyIcon icon={faRobot} />}>
              联系客服
            </Button>
            <Spacer x={2} />
            <Button color="secondary" startContent={<MyIcon icon={faShop} />}>
              进入店铺
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
