import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, generatePath, useLocation, useParams } from "react-router-dom";
import { getCompletePathList } from "../../route";
import { baseRoutes } from "../../helpers/baseRoutes";
function AppLayout({setRedirectPath,children}) {
  const user = useSelector(state=>state?.user.userData);
  const paramsRoute = useParams();
  const location = useLocation();
  const userData = useSelector((state)=>state?.user?.userData);
  function getGenratedPath(data){
    try{
      return generatePath(data,)
    }catch(error){
      return data
    }
  };
  const activeRoute = getCompletePathList().find((e)=>{
    const routePath = getGenratedPath(e.key);
    const browsePath = location.pathname;
    return routePath === browsePath;
  });
  const isPrivate = activeRoute?.private;
  let isValid = false;
  if(user?.email)
    isValid = true;
  function checkValid(){
    if(!isValid){
      let publicPath = "/";
      let privatePath = "";
      let path = "";
      if(location.pathname.search(baseRoutes.adminBaseRoutes.replace("/", "")) >=0){
        path = "admin"
    }
    else
      path = "user"
    let checkData =user?.roleId;
    if(checkData===1){
      privatePath = `${baseRoutes.adminBaseRoutes}site-admin`;
      publicPath = `${baseRoutes.adminBaseRoutes}`;
    }
    else{
      privatePath = "/";
    }
    if(isPrivate===true){
      setRedirectPath(publicPath);
    }else if(isPrivate===false)
      setRedirectPath(publicPath);
  }
};
useEffect(()=>{
  checkValid();
},[location.pathname])
return <>
  {isValid&&children}
</>
}
export default AppLayout;
