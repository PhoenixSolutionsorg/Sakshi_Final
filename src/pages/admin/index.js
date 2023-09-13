import React from "react";
export const AdminDashboard = React.lazy(() => import("./dashboard"));
export const AdminLogin = React.lazy(() => import("./signin"));

export const ClinicManagement = React.lazy(() =>
  import("./UserManagement/Clinic/index.page")
);

export const DoctorManagement = React.lazy(() =>
  import('./UserManagement/Doctor/index.page')
);

export const PatientManagement = React.lazy(() =>
  import('./UserManagement/Patient/index.page')
);

export const ClinicDoctorManagement = React.lazy(() => import('./UserManagement/ClinicDoctor/index.page')
);

export const ClinicPatientManagement = React.lazy(() =>
  import('./UserManagement/ClinicPatient/index.page')
);

export const DoctorBySpecialization = React.lazy(() =>
  import('./UserManagement/DoctorSpecialization/index.page')
);

export const DoctorByExperience = React.lazy(() =>
  import('./UserManagement/DoctorExperience/index.page')
)
