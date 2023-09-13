import { UserManagement } from "../../../apiEndPoints";
import APIrequest from "../../axios";
export const AdminUserManagementServices = {
  getDoctorListService: async () => {
    try {
      const payload = {
        ...UserManagement.getDoctorList,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },

  getSpecializationListService: async () => {
    try {
      const payload = {
        ...UserManagement.getSpecializationList,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getClinicListService: async () => {
    try {
      const payload = {
        ...UserManagement.getList,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },

  getPatientListService: async () => {
    try {
      const payload = {
        ...UserManagement.getPatientList,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getDocotorSchedule:async(doctorId)=>{
    try{
      const payload={...UserManagement.getDoctSchedule(doctorId)};
      const res = await APIrequest(payload);
      return res.data.list;      
    }catch(error){
      throw error;
    }
  },
  createAppointment:async(bodyData)=>{
    try{
      const payload = {
        ...UserManagement.createAppointment,
        bodyData
      }
      const res = await APIrequest(payload);
      return res;
    }catch(error){
      throw error;
    }
  },
  getClinicDoctorPatientListService: async (params) => {
    try {
      const payload = {
        ...UserManagement.getDoctorAndPatientOfClinic(params),
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },
  getDoctorBySpecialization: async (params) => {
    try {
      const payload = {
        ...UserManagement.getDoctorBySpecialization(params.specializationId),
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      throw error;
    }
  },
};
