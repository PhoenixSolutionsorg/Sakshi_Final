import { Outlet } from "react-router-dom";
function adminLayout(){
return <>
<link href="/css1/sb-admin-2.min.css" rel="stylesheet" />
        <Outlet/>
    </>
}
export default adminLayout;