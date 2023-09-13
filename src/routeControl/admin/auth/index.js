import { baseRoutes } from "../../../helpers/baseRoutes";
const accessRoute = {
  LOGIN: {
    path: `${baseRoutes.adminBaseRoutes}`,
  },
  SIGNOUT: {
    path: `${baseRoutes.adminBaseRoutes}/logout`,
  },
};

export default accessRoute;