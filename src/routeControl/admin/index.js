import auth from "./auth";
import dashboard from "./dashboard";
import  UserManagement  from "./UserManagement";

const AccessControl = {
  ...auth,
  ...dashboard,
  ...UserManagement,
};

export default AccessControl;
