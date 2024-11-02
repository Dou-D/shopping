"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";
import { Button, Spacer } from "@nextui-org/react";
import { useCounterStore } from "@/providers/counter-store-provider";
import { useCommodityListStore } from "@/providers/commodityList-store-provider";

export const CommodityList: React.FC = () => {
  const { count, decrementCount, incrementCount } = useCounterStore(
    (state) => state
  );
  const { list, updateList } = useCommodityListStore((state) => state);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-6">
            {list.map((item) => (
              <CommodityCard key={item} />
            ))}
          </div>
        </div>
        <Spacer y={4} />
        <MySpinner />
      </div>
      <Button onClick={() => void updateList(["11", "13", "14", "15"])}>添加</Button>
      <div>
        Count: {count}
        <hr />
        <button type="button" onClick={() => void incrementCount()}>
          Increment Count
        </button>
        <button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </div>
    </>
  );
};
