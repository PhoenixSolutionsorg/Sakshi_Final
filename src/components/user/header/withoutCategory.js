import { Link } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";

export default function WithoutCategory() {
  return <>
    <header className="header shop">
      {/* Topbar */}

      {/* End Topbar */}
      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              {/* Logo */}
              <div className="logo">
               <Link to={routesMap?.HOME?.path}>
               <h3>Jewel Carnival</h3>
               </Link>
              </div>
              {/*/ End Logo */}
              {/* Search Form */}
              <div className="search-top">
                <div className="top-search">
                  <a href="#0">
                    <i className="ti-search" />
                  </a>
                </div>
                {/* Search Form */}
                <div className="search-top">
                  <form className="search-form">
                    <input type="text" placeholder="Search here..." name="search" />
                    <button value="search" type="submit">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
                {/*/ End Search Form */}
              </div>
              {/*/ End Search Form */}
              <div className="mobile-nav" />
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  {/* <select>
                <option selected="selected">All Category</option>
                <option>watch</option>
                <option>mobile</option>
                <option>kid’s item</option>
              </select> */}
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
            <div className="col-lg-2 col-md-3 col-12">
              <div className="right-bar">
                {/* Search Form */}
                <div className="sinlge-bar">
                  <Link to={routesMap?.WISHLIST?.path} className="single-icon">
                    <i className="fa fa-heart-o" aria-hidden="true" />
                  </Link>
                </div>
                <div className="sinlge-bar">
                  <Link to={routesMap?.PROFILE?.path} className="single-icon">
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                  </Link>
                </div>
                <div className="sinlge-bar shopping">
                  <Link to={routesMap?.CART.path} className="single-icon">
                    <i className="ti-bag" /> <span className="total-count">2</span>
                  </Link>
                  {/* Shopping Item */}
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
                    <li>
                      <a href="#">
                        New Arrivals{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                      <ul className="sub-category">
                        <li>
                          <a href="#">accessories</a>
                        </li>
                        <li>
                          <a href="#">best selling</a>
                        </li>
                        <li>
                          <a href="#">top 100 offer</a>
                        </li>
                        <li>
                          <a href="#">sunglass</a>
                        </li>
                        <li>
                          <a href="#">watch</a>
                        </li>
                        <li>
                          <a href="#">man’s product</a>
                        </li>
                        <li>
                          <a href="#">ladies</a>
                        </li>
                        <li>
                          <a href="#">westrn dress</a>
                        </li>
                        <li>
                          <a href="#">denim </a>
                        </li>
                      </ul>
                    </li>
                    <li className="main-mega">
                      <a href="#">
                        best selling{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                      <ul className="mega-menu">
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Kid's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Kids Toys</a>
                            <a href="#">Kids Travel Car</a>
                            <a href="#">Kids Color Shape</a>
                            <a href="#">Kids Tent</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Men's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Watch</a>
                            <a href="#">T-shirt</a>
                            <a href="#">Hoodies</a>
                            <a href="#">Formal Pant</a>
                          </div>
                        </li>
                        <li className="single-menu">
                          <a href="#" className="title-link">
                            Shop Women's
                          </a>
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/225x155"
                              alt="#"
                            />
                          </div>
                          <div className="inner-link">
                            <a href="#">Ladies Shirt</a>
                            <a href="#">Ladies Frog</a>
                            <a href="#">Ladies Sun Glass</a>
                            <a href="#">Ladies Watch</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">accessories</a>
                    </li>
                    <li>
                      <a href="#">top 100 offer</a>
                    </li>
                    <li>
                      <a href="#">sunglass</a>
                    </li>
                    <li>
                      <a href="#">watch</a>
                    </li>
                    <li>
                      <a href="#">man’s product</a>
                    </li>
                    <li>
                      <a href="#">ladies</a>
                    </li>
                    <li>
                      <a href="#">westrn dress</a>
                    </li>
                    <li>
                      <a href="#">denim </a>
                    </li>
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
                          {/* <li>
                        <a href="#">Service</a>
                      </li> */}
                          <li>
                            <a href="#">
                              Shop
                              <i className="ti-angle-down" />
                              <span className="new">New</span>
                            </a>
                            <ul className="dropdown">
                              {/* <li>
                            <a href="shop-grid.html">Shop Grid</a>
                          </li> */}
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
                  {/*/ End Main Menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Header Inner */}
    </header>

  </>
}