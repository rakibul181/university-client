import { ReactNode } from "react";

export type TItems = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TItems[];
  };

export  type TSideBarItem = {
    key: string;
    label: ReactNode;
    children?:TSideBarItem[]
  };