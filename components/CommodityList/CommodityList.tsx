"use client";

import { useCommodityListStore } from "@/providers/commodityList-store-provider";
import VirtualizedList from "@/components/VirtualizedList";

export const CommodityList: React.FC = () => {
  const { list, updateList } = useCommodityListStore((state) => state);

  return (
    <>
      <div className="w-full flex justify-center">
          <VirtualizedList list={list} />
        </div>
    </>
  );
};
