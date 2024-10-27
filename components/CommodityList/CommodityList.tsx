"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";

export const CommodityList: React.FC = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <CommodityCard key={item} />
          ))}
        </div>
        <MySpinner />
      </div>
    </>
  );
};
