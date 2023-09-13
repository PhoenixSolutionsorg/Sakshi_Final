import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {WithoutCategory, Footer, ProductPage} from '../../../components'
function SignIn() {
  return (
    <>
      <WithoutCategory/>
      <ProductPage/>
      <Footer/>
    </>
  );
}
export default SignIn;
