"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type CommodityListStoreType,
  createCommodityListStore,
} from "@/stores/commodity-store";

export type CommodityListStoreApi = ReturnType<typeof createCommodityListStore>;

export const CommodityListStoreContext = createContext<
  CommodityListStoreApi | undefined
>(undefined);

export interface CommodityListStoreProviderProps {
  children: ReactNode;
}

export const CommodityListStoreProvider = (
  props: CommodityListStoreProviderProps
) => {
  const storeRef = useRef<CommodityListStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCommodityListStore();
  }

  return (
    <CommodityListStoreContext.Provider value={storeRef.current}>
      {props.children}
    </CommodityListStoreContext.Provider>
  );
};

export const useCommodityListStore = <T,>(
  selector: (store: CommodityListStoreType) => T
): T => {
  const commodityListStoreContext = useContext(CommodityListStoreContext);

  if (!commodityListStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }
  return useStore(commodityListStoreContext, selector);
};
