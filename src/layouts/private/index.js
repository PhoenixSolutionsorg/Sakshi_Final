import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../Auth/index.layout";
function PrivateLayout(){
    const [redirectPath,setRedirectPath] = useState("");
    return <>
        <AppLayout setRedirectPath={setRedirectPath}>
            
            <Outlet/>

        </AppLayout>
    </>

}
export default PrivateLayout;