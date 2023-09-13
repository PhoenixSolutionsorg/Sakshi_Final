import {Product} from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function routes(){
    return [
        {
            path : routesMap.PRODUCTS.path,
            name : "",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.PRODUCTS.path,
            element : <Product />
        }
    ]
}