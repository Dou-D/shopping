"use client";

import MyTabs from "@/components/MyTabs";
import { CommodityCategoryPropsType } from "./types";
import { Navbar, NavbarContent } from "@nextui-org/react";

export const CommodityCategory: React.FC<CommodityCategoryPropsType> = ({ tabs }) => {
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

