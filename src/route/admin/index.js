import { Outlet } from "react-router-dom";
import publicRoutes from "./public.routes";
import privateRoutes from "./private.routes";
// import PrivateLayout from "../../layout/private";
export const AdminRoutes = () => {
  return [
    {
      element: <Outlet />,
      children: [...publicRoutes()],
    },
    {
      element: <Outlet />,
      children: [...privateRoutes()],
    },
  ];
};
