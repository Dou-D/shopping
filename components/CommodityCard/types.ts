export interface CommodityCardPropsType {
  props: CommodityCardType;
}

export interface CommodityCardType {
  id: string;
  title: string;
  img: string;
  tag: string[];
  price: string;
}
