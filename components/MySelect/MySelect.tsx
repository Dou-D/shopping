"use client";

import { Select, SelectItem } from "@nextui-org/react";
import type { MySelectTypes } from "./types";

export const MySelect: React.FC<MySelectTypes> = ({
  options,
  defaultSelectedKey,
  size,
}) => {
  return (
    <Select
      className="max-w-xs w-32"
      size={size || "sm"}
      defaultSelectedKeys={defaultSelectedKey}
    >
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
};
