import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  HOME: {
    path: `${baseRoutes.userBaseRoutes}`,
  },
  SIGNUP: {
    path: `${baseRoutes.userBaseRoutes}signup`,
  },
  SIGNIN: {
    path: `${baseRoutes.userBaseRoutes}signin`,
  },
  FORGOT_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}forgot-password`,
  },
  RESET_PASSWORD: {
    path: `${baseRoutes.userBaseRoutes}reset-password`,
  },
  SIGNOUT: {
    path: `${baseRoutes.userBaseRoutes}signout`,
  },
  UPDATE_PROFILE: {
    path: `${baseRoutes.userBaseRoutes}user-profile`
  },
  SCHEDULE_DAY: {
    path: `${baseRoutes.userBaseRoutes}schedule`
  }
};

export default accessRoute;
