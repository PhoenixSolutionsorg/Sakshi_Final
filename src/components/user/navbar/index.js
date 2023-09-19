import { Link } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";

function Navbar({categories}) {

    return <>
        <div className="header-inner">
            <div className="container">
                <div className="cat-nav-head">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="all-category hide1">
                                <h3 className="cat-heading cursor-pointer">
                                    <i className="fa fa-bars" aria-hidden="true" />
                                    CATEGORIES
                                </h3>
                                <ul className="main-category hide">
                                    {categories?.map((item, idx) => {
                                        <li>
                                            <a href="#">denim </a>
                                        </li>
                                    })}
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="menu-area">
                                {/* Main Menu */}
                                <nav className="navbar navbar-expand-lg">
                                    <div className="navbar-collapse">
                                        <div className="nav-inner">
                                            <ul className="nav main-menu menu navbar-nav">
                                                <li className="active">
                                                    <Link to="/" >Home</Link>
                                                    {/* <a>Home</a> */}
                                                </li>
                                                <li>
                                                    <Link to={routesMap?.PRODUCTS?.path}>Product</Link>
                                                    {/* <a>Product</a> */}
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Shop
                                                        <i className="ti-angle-down" />
                                                        <span className="new">New</span>
                                                    </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link to={routesMap?.CART?.path}>Cart</Link>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog
                                                        <i className="ti-angle-down" />
                                                    </a>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <a href="blog-single-sidebar.html">
                                                                Blog Single Sidebar
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to={"/contact"}> Contact Us</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Navbar;