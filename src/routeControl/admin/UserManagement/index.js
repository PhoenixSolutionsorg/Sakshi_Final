// import { DesktopOutlined } from "@ant-design/icons";
import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
  CLINIC_LIST: {
    path: `${baseRoutes.adminBaseRoutes}/clinic-list`
  },
  DOCTOR_LIST: {
    path: `${baseRoutes.adminBaseRoutes}/doctor-list`

  },
  PATIENT_LIST: {
    path: `${baseRoutes.adminBaseRoutes}/patient-list`
  },

  CLINIC_LIST_DOCTOR_LIST: {
    path:`${baseRoutes.adminBaseRoutes}/clinic-list/doctor-list/:clinicId`,
  },
  
  CLINIC_LIST_PATIENT_LIST :{
    path:`${baseRoutes.adminBaseRoutes}/clinic-list/patient-list/:clinicId`
  },
  DOCTOR_LIST_SPECIALIZATION:{
    path:`${baseRoutes.adminBaseRoutes}/doctor-list/specialzation/:specializationId`
  },
  DOCTOR_LIST_EXPERIENCE:{
    path:`${baseRoutes.adminBaseRoutes}/doctor-list/experience/:experience`
  }

};

export default accessRoute;
