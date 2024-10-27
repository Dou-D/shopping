import CommodityCategory from "@/components/CommodityCategory";
import { CommodityCategoryData } from "@/components/CommodityCategory/data";
import CommodityList from "@/components/CommodityList";
import PromotionalActivity from "@/components/PromotionalActivity";
import TopNavBar from "@/components/TopNavBar";

export default function HomePage() {

  return (
    <>
      <PromotionalActivity />
      {/* top: logo+search+logo */}
      <TopNavBar />
      <CommodityCategory tabs={CommodityCategoryData} />
      <CommodityList />
    </>
  );
}
