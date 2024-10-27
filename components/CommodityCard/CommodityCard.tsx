import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import TextClamp from "../TextClamp";

export const CommodityCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          height={220}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <TextClamp text="喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子" />
      </CardBody>
    </Card>
  );
};
