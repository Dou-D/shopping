import { Key } from "@react-types/shared";

export interface MySelectTypes {
  options: SelectDataType[];
  size?: "md" | "sm" | "lg" | undefined
  defaultSelectedKey: "all" | Iterable<Key> | undefined;
}

export interface SelectDataType {
  key: string | number;
  label: string;
}
