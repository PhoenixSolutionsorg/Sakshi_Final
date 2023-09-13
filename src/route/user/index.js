import publicRoutes from './public.route';
import privateRoutes from './private.route';
import { Outlet } from "react-router-dom";
// import PrivateLayout from "../../layout/private";

export const UserRoutes = ()=>{
    return [
        {
            element : <Outlet/>,
            children : [...publicRoutes()]
        },
        {
            element : <Outlet/>,
            children : [...privateRoutes()]
        },
    ];
};