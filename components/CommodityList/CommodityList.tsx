"use client";

import CommodityCard from "@/components/CommodityCard";
import MySpinner from "../MySpinner";
import { Button, Spacer } from "@nextui-org/react";
import { useCounterStore } from "@/providers/counter-store-provider";
import { useCommodityListStore } from "@/providers/commodityList-store-provider";
import { ListChildComponentProps } from "react-window";
import { ListItem } from "@mui/material";
import VirtualizedList from "@/components/VirtualizedList";

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <CommodityCard key={index} />
    </ListItem>
  );
}

export const CommodityList: React.FC = () => {
  const { count, decrementCount, incrementCount } = useCounterStore(
    (state) => state
  );
  const { list, updateList } = useCommodityListStore((state) => state);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center">
          <VirtualizedList list={list} />
        </div>
      </div>
    </>
  );
};
