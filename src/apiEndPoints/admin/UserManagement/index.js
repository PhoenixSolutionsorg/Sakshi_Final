const UserManagement = {
  getDoctorList: {
    url: "/api/admin/getDoctorList",
    method: "GET",
  },
  getPatientList: {
    url: "/api/admin/getPatientList",
    method: "GET",
  },
  getList: {
    url: "/api/admin/getList",
    method: "GET",
  },
  getDoctorAndPatientOfClinic:(clinicId) => ({
    url: `/api/admin/getClinicList?clinicId=${clinicId}`,
    method: "GET"
  }),
  getDoctSchedule:(doctorId)=>({
    url:`/api/all-schedules?doctorId=${doctorId}`,
    method:"GET"
  }),
  getSpecializationList:{
    url:'/api/admin/specializationList',
    method:"GET"
  },
  getDoctorBySpecialization:(specializationId)=>({
    url: `/api/admin/getDoctorListCondition?specializationId=${specializationId}`,
    method: "GET"
  }),
  createAppointment:{
    url:"/api/create-appointment",
    method : "POST"
  }
};
export default UserManagement;
