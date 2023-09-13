import routesMap from "../../../routeControl/userRouteMap";
import { Profile } from "../../../pages";

export default function routes(){
    return [
        {
            path : routesMap.PROFILE.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.PROFILE.path,
            element : <Profile />
        },
    ]
}