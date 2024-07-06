import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TItems[];
};

export const routerGenerator = (items: TItems[]): TRoute[] => {
  const routes: TRoute[] = items.reduce((acc: TRoute[], item) => {
    if (item?.path && item?.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item?.children) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({
            path: child.path,
            element: child.element,
          });
        }
      });
    }

    return acc;
  }, []);

  return routes;
};
