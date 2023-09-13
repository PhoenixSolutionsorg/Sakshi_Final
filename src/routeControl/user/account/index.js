import { baseRoutes } from "../../../helpers/baseRoutes";

const accessRoute = {
    PROFILE : {
        path : `${baseRoutes.userBaseRoutes}profile`
    },
    CART : {
        path : `${baseRoutes.userBaseRoutes}cart`
    },
    WISHLIST : {
        path :`${baseRoutes.userBaseRoutes}wish-list`
    },
    ORDERS : {
            path : `${baseRoutes.userBaseRoutes}orders`
    }
}

export default accessRoute;