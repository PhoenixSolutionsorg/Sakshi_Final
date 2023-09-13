import {Home} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.HOME.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.HOME.path,
            element : <Home />
        }
    ]
}