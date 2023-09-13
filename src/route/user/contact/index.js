import {Contact} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.CONTACT?.path,
            name : "Contact ",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.CONTACT?.path,
            element : <Contact />
        }
    ]
}