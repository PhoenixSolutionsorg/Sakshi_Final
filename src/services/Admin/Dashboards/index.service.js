import { Dashboards } from "../../../apiEndPoints";
import APIrequest from "../../axios";

export const DashboardsServices = {
  getDashboardServices: async () => {
    try {
      const payload = {
        ...Dashboards.getDeshboardDetails,
      };
      const res = await APIrequest(payload);
      
      return res;
    } catch (error) {
      throw error;
    }
  },
};
