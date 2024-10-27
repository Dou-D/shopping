import { Image } from "@nextui-org/image";
import Link from "next/link";

// 优惠活动图片
const PromotionalActivity: React.FC = () => {
  return (
    <>
      <Link
        href="https://huodong.taobao.com/wow/a/act/tao/dailygroup/23509/24308/wupr?wh_pid=daily-549615&disableNav=YES&status_bar_transparent=true"
        target="_blank"
      >
        <Image
          isZoomed
          src="https://img.alicdn.com/imgextra/i4/O1CN015OH0ix1Q5F298rSmR_!!6000000001924-2-tps-7680-120.png"
          alt="NextUI Album Cover"
          className="border-r-0"
        />
      </Link>
    </>
  );
};

export default PromotionalActivity;
