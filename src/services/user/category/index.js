import APIrequest from "../../axios";
import  {Category } from "../../../apiEndPoints/index";

export const CategoryServices = {
    getAllCategories : async ()=>{
        try{
            const payload = {
                ...Category.getAllCategories,
            }
            const response = APIrequest(payload);
            return response;
        }catch(error){
            throw error;
        }
    }
}