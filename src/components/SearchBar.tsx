import React from "react";
import { Input, type InputProps } from "./Input";

export interface SearchBarProps extends Omit<InputProps, "type"> {}

export function SearchBar(props: SearchBarProps) {
  return <Input type="search" placeholder="搜索仓库/商品/订单" {...props} />;
}
