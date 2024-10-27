'use client'

import { Select, SelectItem } from "@nextui-org/react";
import type { MySelectTypes } from "./types";

export const MySelect: React.FC<{ options: MySelectTypes[] }> = ({ options }) => {
  return (
    <Select label="选择类型" className="max-w-xs">
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
};
