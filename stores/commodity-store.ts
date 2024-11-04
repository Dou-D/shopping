import { CommodityCardType } from "@/components/CommodityCard/types";
import { createStore } from "zustand/vanilla";

export type CommodityListStateType = {
  list: CommodityCardType[];
};

export type CommodityListActionType = {
  updateList: (newList: CommodityCardType[]) => void;
};

export type CommodityListStoreType = CommodityListStateType &
  CommodityListActionType;

export const defaultInitState: CommodityListStateType = {
  list: [
    {
      id: "10001",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },

    {
      id: "10002",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10003",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10004",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10005",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10006",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10007",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10008",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10009",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
    {
      id: "10010",
      title:
        "喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子喷壶小型旅行分装瓶喷雾瓶子超细雾便携卸妆水化妆水喷雾器空瓶子",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "￥119.99",
      tag: ["好评如潮", "发货快"],
    },
  ],
};

export const createCommodityListStore = (
  initState: CommodityListStateType = defaultInitState
) => {
  return createStore<CommodityListStoreType>()((set) => {
    return {
      ...initState,
      updateList: (newList: CommodityCardType[]) =>
        set((state) => ({ list: [...state.list, ...newList] })),
    };
  });
};
