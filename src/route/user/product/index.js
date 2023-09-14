import {Product, ProductDescription} from "../../../pages";
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
        },
        {
            path : routesMap.DESCRIPTION.path,
            name : "Description",
            common : true,
            private : false,
            withAuth : false,
            key : routesMap.DESCRIPTION.path,
            element : <ProductDescription />
        }
    ]
}