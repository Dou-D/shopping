import { Link } from "@nextui-org/react";
import { CopyrightPropsType } from "./types";

// 底部版权
const config: CopyrightPropsType[] = [
  {
    id: "1",
    content: "关于我们",
    href: "#",
  },
  {
    id: "2",
    content: "联系我们",
    href: "#",
  },
  {
    id: "3",
    content: "联系客服",
    href: "#",
  },
  {
    id: "4",
    content: "合作招商",
    href: "#",
  },
  {
    id: "5",
    content: "商家帮助",
    href: "#",
  },
  {
    id: "6",
    content: "营销中心",
    href: "#",
  },
  {
    id: "7",
    content: "手机京东",
    href: "#",
  },
  {
    id: "8",
    content: "友情链接",
    href: "#",
  },
  {
    id: "9",
    content: "销售联盟",
    href: "#",
  },
  {
    id: "10",
    content: "京东社区",
    href: "#",
  },
  {
    id: "11",
    content: "风险监测",
    href: "#",
  },
  {
    id: "12",
    content: "质量公告",
    href: "#",
  },
  {
    id: "13",
    content: "隐私政策",
    href: "#",
  },
  {
    id: "14",
    content: "京东公益",
    href: "#",
  },
  {
    id: "15",
    content: "Media & IR",
    href: "#",
  },
];
export const Copyright: React.FC = () => {
  return (
    <div className="flex justify-center">
      {config.map((item, index) => {
        return (
          <div key={item.id}>
            <Link href={item.href}>{item.content}</Link>
            {index === config.length - 1 ? null : (
              <span className="m-2">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
