import Image from "next/image";
import type { Merchandise } from "./types";
import MyTag from "@/components/MyTag";

const Merchandise: React.FC<Merchandise> = (props) => {
  return (
    <>
      <div className="flex">
        <Image src={props.img} width={450} height={450} alt={props.title} />
        <div className="flex flex-col">
          <p>
            {props.tag.map((item, index) => (
              <MyTag key={index} content={item} />
            ))}
            {props.title}
          </p>
          <p>价格：{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Merchandise;
