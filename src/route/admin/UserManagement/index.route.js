import adminRouteMap from "../../../routeControl/adminRouteMap";
import {
  ClinicManagement, PatientManagement, DoctorManagement,
  ClinicDoctorManagement, ClinicPatientManagement,
  DoctorBySpecialization, 
  //DoctorByExperience
} from "../../../pages";
export default function route() {
  return [
    {
      path: adminRouteMap.CLINIC_LIST.path,
      name: "Clinic Management",
      // key: adminRouteMap.CLINIC_MANAGEMENT.path,
      private: true,
      element: <ClinicManagement />,
    },
    {
      path: adminRouteMap.CLINIC_LIST_DOCTOR_LIST.path,
      name: "Clinic Doctor Management",
      // key: adminRouteMap.CLINIC_MANAGEMENT.path,
      private: true,
      element: <ClinicDoctorManagement />,
    },
    {
      path: adminRouteMap.CLINIC_LIST_PATIENT_LIST.path,
      name: "Clinic Patient Management",
      // key: adminRouteMap.CLINIC_MANAGEMENT.path,
      private: true,
      element: <ClinicPatientManagement />,
    },

    {
      path: adminRouteMap.PATIENT_LIST.path,
      name: "patient Management",
      // key: adminRouteMap.PATIENT_LIST.path,
      private: true,
      element: <PatientManagement />,
    },
    {
      path: adminRouteMap.DOCTOR_LIST.path,
      name: "Doctor Management",
      //key: adminRouteMap.DOCTOR_LIST.path,
      private: true,
      element: <DoctorManagement />,
    },
    {
      path: adminRouteMap.DOCTOR_LIST_SPECIALIZATION.path,
      name: "Doctor Specialization",
      private: true,
      element: <DoctorBySpecialization />
    },
    // {
    //   path: adminRouteMap.DOCTOR_LIST_EXPERIENCE.path,
    //   name: "Doctor Experience",
    //   private: true,
    //   element: <DoctorByExperience />
    // }
  ];
}
