// 我们相比其他网站的优势
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MyIcon from "@/components/MyIcons";
import "./style.scss";
import { AdvantageListConfigType } from "./types";

const config: AdvantageListConfigType[] = [
  {
    id: "1",
    icon: faMagnifyingGlass,
    content: "品类齐全，轻松购物",
  },
  {
    id: "2",
    icon: faMagnifyingGlass,
    content: "多仓直发，极速配送",
  },
  {
    id: "3",
    icon: faMagnifyingGlass,
    content: "正品行货，精致服务",
  },
  {
    id: "4",
    icon: faMagnifyingGlass,
    content: "天天特价，畅选无忧",
  },
];
export const AdvantageList: React.FC = () => {
  return (
    <div className="flex justify-center">
      {config.map((item) => {
        return (
          <div className="item" key={item.id}>
            <MyIcon icon={item.icon} />
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};
