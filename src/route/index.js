import { UserRoutes } from "./user";
import { AdminRoutes } from "./admin";
import { Outlet } from "react-router-dom";
import AdminLayout from "../layouts/admin";
export const routes = () => {
  return [
    {
      element: <Outlet />,
      children: [...UserRoutes()],
    },
    {
      element: <AdminLayout />,
      children: [...AdminRoutes()],
    },
  ];
};
export const routeList = () => {
  let routeArr = [
    ...UserRoutes()[0].children,
    // ...AdminRoutes()[0].children,
    // ...AdminRoutes()[1].children,
  ];
  return routeArr;
};
export const moduleRouteList = () => {
  let moduleRouteArr = {
    user: [...UserRoutes()[0].children],
    // admin: [...AdminRoutes()[0].children, ...AdminRoutes()[1].children],
  };
  return moduleRouteArr;
};
export const getCompletePathList = () => {
  return routeList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
