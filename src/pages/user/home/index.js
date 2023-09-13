import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UserHomePage } from "../../../components";

function Home(props) {
  toast.success(props?.state?.data);
  useEffect(()=>{
  },[])
  return (
    <>
      <UserHomePage/>
    </>
  );
}
export default Home;
