import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../../../components/signin";
import { AccountServices } from "../../../services/user/auth/index";
import adminRouteMap from "../../../routeControl/adminRouteMap";
import { setAdminData } from "../../../redux/user";

export default function SignInPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const submit = async (data) => {
    setIsLoading(true);
    let bodyData = { ...data };

    const res = await AccountServices.adminSignin({ bodyData });
    setIsLoading(false);

    if (res.success) {
      dispatch(setAdminData(res.data));
      toast.success("Login successful");
      setTimeout(() => {
        navigate(adminRouteMap.DASHBOARD.path);
      }, 5700);
    } else {
      toast.error("Login failed");
    }
  };

  return (
    <>
      <LoginForm onSubmit={submit} />
      <ToastContainer className="toast-position"
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
