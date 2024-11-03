import { MyTag } from "../MyTag/MyTag";
import { TagsPropsType } from "./types";

const config: TagsPropsType[] = [
  {
    id: "1",
    content: "平均20小时发货",
  },
  {
    id: "2",
    content: "物流体验优秀",
  },
  {
    id: "3",
    content: "商品体验优秀",
  },
];
export const MyTags: React.FC = () => {
  return (
    <>
      {config.map((item) => {
        return <MyTag key={item.id} content={item.content} />;
      })}
    </>
  );
};
