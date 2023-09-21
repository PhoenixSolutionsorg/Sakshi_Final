import { Link } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import { setUserData } from "../../../redux/user";

export default function WithoutCategory({ categories }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user?.userData);
  const logOut = ()=>{
    dispatch(setUserData({}));
  }

  return <>
    <header className="header shop">
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12 col-sm-12">
              <div className="logo">
                <Link to={routesMap?.HOME?.path}>
                  <h3>Jewel Carnival</h3>
                </Link>
              </div>
              <div className="search-top">
                <div className="top-search">
                  <a href="#0">
                    <i className="ti-search" />
                  </a>
                </div>
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-7 col-md-6 col-12 col-sm-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <form>
                    <input
                      name="search"
                      placeholder="Search Products Here....."
                      type="search"
                    />
                    <button className="btnn">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-12 col-sm-12">
              <div className="right-bar">
                <div className="sinlge-bar">
                  <Link to={routesMap?.WISHLIST?.path} className="single-icon">
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </Link>
                </div>
                {userData?.email &&
                  <div className="sinlge-bar">
                    <Link to={routesMap?.PROFILE?.path} className="single-icon">
                      <i className="fa fa-user-circle-o" aria-hidden="true" />
                    </Link>
                  </div>}
                <div className="sinlge-bar shopping">
                  <Link to={routesMap?.CART.path} className="single-icon">
                    <i className="ti-bag" /> <span className="total-count">2</span>
                  </Link>
                  <div className="shopping-item">
                    <div className="dropdown-cart-header">
                      <span>2 Items</span>
                      <Link to={routesMap?.CART.path}>View Cart</Link>
                    </div>
                    <ul className="shopping-list">
                      <li>
                        <a href="#" className="remove" title="Remove this item">
                          <i className="fa fa-remove" />
                        </a>
                        <a className="cart-img" href="#">
                          <img src="https://via.placeholder.com/70x70" alt="#" />
                        </a>
                        <h4>
                          <a href="#">Woman Ring</a>
                        </h4>
                        <p className="quantity">
                          1x - <span className="amount">$99.00</span>
                        </p>
                      </li>
                      <li>
                        <a href="#" className="remove" title="Remove this item">
                          <i className="fa fa-remove" />
                        </a>
                        <a className="cart-img" href="#">
                          <img src="om/70x70" alt="#" />
                        </a>
                        <h4>
                          <a href="#">Woman Necklace</a>
                        </h4>
                        https://via.placeholder.c
                        <p className="quantity">
                          1x - <span className="amount">$35.00</span>
                        </p>
                      </li>
                    </ul>
                    <div className="bottom">
                      <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                      </div>
                      <a href="checkout.html" className="btn animate">
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/*/ End Shopping Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Inner */}
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
              <div className="col-lg-9 col-12 col-md-12 col-sm-12">
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
                            <Link to={routesMap?.PRODUCTS?.path}>Shop</Link>
                            {/* <a>Product</a> */}
                          </li>
                          {/* <li>
                        <a href="#">Service</a>
                      </li> */}
                          {/* <li>
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
                          </li> */}
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
                          {userData?.email &&
                          <li>
                          <Link
                            onClick={(e) => {
                              e.preventDefault();
                              logOut  ();
                            }}
                          >
                            Log Out
                          </Link>
                        </li>}
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
    </header>

  </>
}