"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";

export const CommodityList: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <CommodityCard key={item} />
            ))}
          </div>
        </div>
        <MySpinner />
      </div>
    </>
  );
};
