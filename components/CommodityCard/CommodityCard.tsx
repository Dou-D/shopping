import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import TextClamp from "../TextClamp";
import { CommodityCardPropsType } from "./types";
import Link from "next/link";

export const CommodityCard: React.FC<CommodityCardPropsType> = ({ props }) => {
  return (
    <Link href={"#"} className="max-w-80">
      <Card isPressable shadow="lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.img}
            height={220}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <TextClamp text={props.title} />
          <strong>{props.price}</strong>
        </CardBody>
      </Card>
    </Link>
  );
};
