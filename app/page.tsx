import CommodityCategory from "@/components/CommodityCategory";
import { CommodityCategoryData } from "@/components/CommodityCategory/data";
import PromotionalActivity from "@/components/PromotionalActivity";

import TopNavBar from "@/components/TopNavBar";
import { Button } from "@mui/material";

export default function HomePage() {

  return (
    <>
      <PromotionalActivity />
      {/* top: logo+search+logo */}
      <TopNavBar />
      <CommodityCategory tabs={CommodityCategoryData} />
    </>
  );
}
