import { ListChildComponentProps } from "react-window";
import { CommodityCardType } from "@/components/CommodityCard/types";

export interface RenderRowPropsType extends ListChildComponentProps {
    data: CommodityCardType
}
