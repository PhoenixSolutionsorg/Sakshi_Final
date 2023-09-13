import {Cart} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.CART.path,
            name : "Cart ",
            common : true,
            private : true,
            withAuth : false,
            key : routesMap.CONTACT?.path,
            element : <Cart />
        }
    ]
}