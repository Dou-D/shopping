"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";
import { Spacer } from "@nextui-org/react";
import { useCommodityListStore } from "@/providers/commodityList-store-provider";
export const CommodityList: React.FC = () => {
  const { list } = useCommodityListStore((state) => state);
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-6">
            {list.map((item, index) => (
              <CommodityCard key={index} props={item} />
            ))}
          </div>
        </div>
        <Spacer y={4} />
        <MySpinner />
      </div>
    </>
  );
};
