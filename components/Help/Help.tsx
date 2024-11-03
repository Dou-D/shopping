import { Spacer } from "@nextui-org/react";
import { HelpPropsType } from "./types";

const config: HelpPropsType[] = [
  {
    id: "1",
    head: "购物指南",
    children: [
      "购物流程",
      "会员介绍",
      "生活旅行",
      "常见问题",
      "大家电",
      "联系客服",
    ],
  },
  {
    id: "2",
    head: "配送方式",
    children: ["上门自提", "211限时达", "配送服务查询", "配送费收取标准"],
  },
  {
    id: "3",
    head: "支付方式",
    children: ["货到付款", "在线支付", "分期付款", "公司转账"],
  },
  {
    id: "4",
    head: "售后服务",
    children: ["售后政策", "价格保护", "退款说明", "返修/退换货", "取消订单"],
  },
  {
    id: "5",
    head: "特色服务",
    children: [
      "夺宝岛",
      "DIY装机",
      "延保服务",
      "京东E卡",
      "京东通信",
      "京鱼座智能",
    ],
  },
];

export const Help: React.FC = () => {
  return (
    <div className="flex justify-center">
      {config.map((item) => {
        return (
          <div key={item.id}>
            <p className="font-black">{item.head}</p>
            <ul key={item.id}>
              {item.children.map((child) => {
                return <li key={child}>{child}</li>;
              })}
            </ul>
            <Spacer x={48} />
          </div>
        );
      })}
    </div>
  );
};
