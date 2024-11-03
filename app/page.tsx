import CommodityCategory from "@/components/CommodityCategory";
import { CommodityCategoryData } from "@/components/CommodityCategory/data";
import CommodityList from "@/components/CommodityList";
import PromotionalActivity from "@/components/PromotionalActivity";
import TopNavBar from "@/components/TopNavBar";
import NavBar from "@/components/NavBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { CommodityListStoreProvider } from "@/providers/commodityList-store-provider";
import { Divider } from "@nextui-org/react";
import Help from "@/components/Help";
import AdvantageList from "@/components/AdvantageList";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center">
        <NavBar />
        <ThemeSwitcher />
      </header>
      <main>
        <PromotionalActivity />
        {/* top: logo+search+logo */}
        <TopNavBar />
        <CommodityListStoreProvider>
          <CommodityCategory tabs={CommodityCategoryData} />
          <CommodityList />
        </CommodityListStoreProvider>
      </main>
      <footer>
        <AdvantageList />
        <Divider />
        <Help />
        <Divider />
      </footer>
    </>
  );
}
