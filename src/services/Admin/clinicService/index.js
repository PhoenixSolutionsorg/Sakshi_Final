import { AdminAddClinic } from "../../../apiEndPoints";
import APIrequest from "../../axios";
export const clinicServices={
    addClinic : async({bodyData})=>{
        try{
            const payload = {
                ...AdminAddClinic.addClinic,
                bodyData
            };
            const result = await APIrequest(payload);
            return result;
        }catch(error){
            throw error
        }
    },
    removeClinic:async(bodyData)=>{
        try{
            const payload={
                ...AdminAddClinic.removeClinic,
                bodyData
            };
            const result=await APIrequest(payload);
            return result;
        }catch(error){
            throw error;
        }
    }
}