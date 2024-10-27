"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";
import { Spacer } from "@nextui-org/react";

export const CommodityList: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6, 7,8,9,10].map((item) => (
              <CommodityCard key={item} />
            ))}
          </div>
        </div>
        <Spacer y={4} />
        <MySpinner />
      </div>
    </>
  );
};
