import CommodityCategory from "@/components/CommodityCategory";
import { CommodityCategoryData } from "@/components/CommodityCategory/data";
import CommodityList from "@/components/CommodityList";
import PromotionalActivity from "@/components/PromotionalActivity";
import TopNavBar from "@/components/TopNavBar";
import NavBar from "@/components/NavBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { CommodityListStoreProvider } from "@/providers/commodityList-store-provider";
import { Divider, Spacer } from "@nextui-org/react";
import Help from "@/components/Help";
import AdvantageList from "@/components/AdvantageList";
import Copyright from "@/components/Copyright";

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
        <Spacer y={4} />
        <AdvantageList />
        <Spacer y={4} />
        <Divider />
        <Spacer y={2} />
        <Help />
        <Spacer y={2} />
        <Divider />
        <Spacer y={2} />
        <Copyright />
      </footer>
    </>
  );
}
