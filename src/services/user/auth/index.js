import APIrequest from "../../axios";
import  {Account } from "../../../apiEndPoints/index";

export const AccountServices = {
    userSignIn : async (bodyData)=>{
        try{
            console.log("2222");
            const payload = {
                ...Account.signIn,
                bodyData
            }
            const response = APIrequest(payload);
            return response;
        }catch(error){
            throw error;
        }
    }
}