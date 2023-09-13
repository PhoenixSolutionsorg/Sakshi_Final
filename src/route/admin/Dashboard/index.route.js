import { AdminDashboard } from "../../../pages";
import adminRouteMap from "../../../routeControl/adminRouteMap";
export default function route() {
  return [
    {
      path: adminRouteMap.DASHBOARD.path,
      name: "Admin Dashboard",
      key: adminRouteMap.DASHBOARD.path,
      private: true,
      belongsToSidebar: false,
      element: <AdminDashboard />,
    },
  ];
}
