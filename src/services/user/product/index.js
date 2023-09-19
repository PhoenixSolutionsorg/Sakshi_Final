import APIrequest from "../../axios";
import  {Product } from "../../../apiEndPoints/index";

export const ProductServices = {
    getAllProducts : async ()=>{
        try{
            const payload = {
                ...Product.getProducts,
            }
            const response = APIrequest(payload);
            return response;
        }catch(error){
            throw error;
        }
    }
}