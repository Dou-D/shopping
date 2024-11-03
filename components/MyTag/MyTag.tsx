import { MyTagPropsType } from "./types";
import "./style.scss";

export const MyTag: React.FC<MyTagPropsType> = ({
  color = "primary",
  content,
}) => {
  return (
    <>
      <div className={`color ${color} mx-1 p-2 rounded-lg hidden lg:block`}>{content}</div>
    </>
  );
};
