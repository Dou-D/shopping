"use client";

import MyTabs from "@/components/MyTabs";
import { CommodityCategoryTabsType } from "./types";
import { Navbar, NavbarContent } from "@nextui-org/react";

export const CommodityCategory: React.FC<{
  tabs: CommodityCategoryTabsType[];
}> = ({ tabs }) => {
  const onChangeCommodity = (e: any) => {
    console.log(e);
  };
  return (
    <Navbar>
      <NavbarContent>
        <MyTabs tabs={tabs} handleChange={onChangeCommodity} />
      </NavbarContent>
    </Navbar>
  );
};

