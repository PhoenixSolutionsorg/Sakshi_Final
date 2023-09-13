import routesMap from "../../../routeControl/userRouteMap";
import { SignIn } from "../../../pages";

export default function routes(){
    return [
        {
            path : routesMap.SIGNIN.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.SIGNIN.path,
            element : <SignIn />
        },
        {
            path : routesMap.SIGNUP.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.SIGNUP.path,
            element : <SignIn />
        }
    ]
}