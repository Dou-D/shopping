import { createStore } from "zustand/vanilla";

export type CommodityListStateType = {
  list: string[];
};

export type CommodityListActionType = {
  updateList: (newList: string[]) => void;
};

export type CommodityListStoreType = CommodityListStateType & CommodityListActionType;

export const defaultInitState: CommodityListStateType = {
  list: ["1", "2", '3', '4', '5', '6', '7', '8','9', '10'],
};

export const createCommodityListStore = (
  initState: CommodityListStateType = defaultInitState
) => {
  return createStore<CommodityListStoreType>()((set) => {
    return {
      ...initState,
      updateList: (newList: string[]) =>
        set((state) => ({ list: [...state.list, ...newList] })),
    };
  });
};
