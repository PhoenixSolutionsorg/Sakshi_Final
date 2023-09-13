import homeRoutes from "./home";
import authRoutes from "./auth";
import accountRoutes from './account';
import productRoutes from './product';

export default function route(){
    return [
        ...homeRoutes(),
        ...authRoutes(),
        ...accountRoutes(),
        ...productRoutes(),
        
    ]
}