import PromotionalActivity from "@/components/PromotionalActivity";

import TopNavBar from "@/components/TopNavBar";

export default function HomePage() {
  return (
    <>
      <PromotionalActivity />
      {/* top: logo+search+logo */}
      <TopNavBar />
    </>
  );
}
