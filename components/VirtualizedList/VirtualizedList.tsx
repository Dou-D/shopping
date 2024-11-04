"use client";
import { FixedSizeGrid } from "react-window";
import CommodityCard from "@/components/CommodityCard";
import MySpinner from "@/components/MySpinner";
import { Spacer } from "@nextui-org/react";
import { ListItem } from "@mui/material";
import { CommodityListStateType } from "@/stores/commodity-store";
import { RenderRowPropsType } from "./types";
import Link from "next/link";
import { forwardRef } from "react";
import { CommodityCardPropsType } from "@/components/CommodityCard/types";
import { useCommodityListStore } from "@/providers/commodityList-store-provider";

// 将自组件的dom暴露出去
// https://zh-hans.react.dev/reference/react/forwardRef
const ForwardedCommodityCard = forwardRef<unknown, CommodityCardPropsType>(
  ({ props }, ref) => <CommodityCard props={props} />
);
function RenderRow(props: RenderRowPropsType) {
  const { index, style, data } = props;
  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      className="m-2"
    >
      <Link href={data.id} legacyBehavior passHref>
        <ForwardedCommodityCard props={data} />
      </Link>
    </ListItem>
  );
}

export const VirtualizedList: React.FC<CommodityListStateType> = ({ list }) => {
  const columnCount = 5; // 设置列数
  const rowCount = Math.ceil((list.length + 1) / columnCount); // 计算行数 +1为了把MySpinner放到最后一个单元格
  const columnWidth = 300; // 每列宽度
  const rowHeight = 375; // 每行高度，根据实际高度调整

  const { updateList } = useCommodityListStore((state) => state);

  return (
    <div className="flex">
      <FixedSizeGrid
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={800} // 容器的高度
        rowCount={rowCount}
        rowHeight={rowHeight}
        width={1600} // 容器的宽度
      >
        {({ columnIndex, rowIndex, style, data }) => {
          const itemIndex = rowIndex * columnCount + columnIndex; // itemIndex为在list中的位置
          if (itemIndex > list.length) return null; // 防止数组越界
          else if (itemIndex === list.length) {
            return (
              <div
                style={{
                  ...style,
                  width: "100%", // 为什么不写w-full: 因为style中传递了width，优先级高， w-full不起作用
                }}
                className="w-full flex justify-center items-center"
              >
                <Spacer y={2} />
                <MySpinner />
              </div>
            );
          }
          return (
            <RenderRow
              key={list[itemIndex].id}
              style={style}
              index={itemIndex}
              data={list[itemIndex]}
            />
          );
        }}
      </FixedSizeGrid>
    </div>
  );
};
