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
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
