import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UserHomePage } from "../../../components";
import { CategoryServices } from "../../../services";

function Home(props) {
  const [categories,setCategories] = useState([]);
  toast.success(props?.state?.data);
  useEffect( async()=>{
    const response = await CategoryServices.getAllCategories();
    if(response?.success){
      console.log(response);
      setCategories(response?.data);
    }
  },[])
  return (
    <>
      <UserHomePage
        categories = {categories}
      />
    </>
  );
}
export default Home;
