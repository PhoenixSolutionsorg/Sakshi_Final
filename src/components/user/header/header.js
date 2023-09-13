import { Link } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";
function Header(){
    return <>
    <header className="header shop">
  {/* Topbar */}
  <div className="topbar">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          {/* Top Left */}
          <div className="top-left">
            <ul className="list-main">
              <li>
                <i className="ti-headphone-alt" /> +060 (800) 801-582
              </li>
              <li>
                <i className="ti-email" /> support@shophub.com
              </li>
            </ul>
          </div>
          {/*/ End Top Left */}
        </div>
        <div className="col-lg-8 col-md-12 col-12">
          {/* Top Right */}
          <div className="right-content">
            <ul className="list-main">
              <li>
                <i className="ti-location-pin" /> Store location
              </li>
              <li>
                <i className="ti-alarm-clock" /> <a href="#">Daily deal</a>
              </li>
              <li>
                <i className="ti-user" /> <Link to={routesMap?.PROFILE}>My account</Link>
              </li>
              <li>
                <i className="ti-power-off" />
                <Link to={routesMap?.SIGNIN}>Login</Link>
              </li>
            </ul>
          </div>
          {/* End Top Right */}
        </div>
      </div>
    </div>
  </div>
  {/* End Topbar */}
  <div className="middle-inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          {/* Logo */}
          <div className="logo">
            <a href="index.html">
              {/* <img src="images/logo.png" alt="logo" /> */}
              <h3>Jewel Carnival</h3>
            </a>
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
                <option>Womens Jwellery</option>
                <option>Mens Jwellery</option>
                <option>kids Jwellery</option>
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
              <a href="#" className="single-icon">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </a>
            </div>
            <div className="sinlge-bar">
              <Link to={"/signup"} className="single-icon">
                <i className="fa fa-user-circle-o" aria-hidden="true" />
              </Link>
            </div>
            <div className="sinlge-bar shopping">
              <Link to={"/cart"} lassName="single-icon">
                <i className="ti-bag" /> <span className="total-count">2</span>
              </Link>
              {/* Shopping Item */}
              <div className="shopping-item">
                <div className="dropdown-cart-header">
                  <span>2 Items</span>
                  <Link to={"/cart"}>View Cart</Link>
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
            <div className="all-category">
              <h3 className="cat-heading">
                <i className="fa fa-bars" aria-hidden="true" />
                CATEGORIES
              </h3>
              <ul className="main-category">
                <li>
                  <a href="#">
                    New Arrivals{" "}
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                  <ul className="sub-category">
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Hot selling</a>
                    </li>
                    <li>
                      <a href="#">Latest Offer</a>
                    </li>
                    <li>
                      <a href="#">Ear Rings</a>
                    </li>
                    <li>
                      <a href="#">Bracelets</a>
                    </li>
                    <li>
                      <a href="#">man's Jwellery</a>
                    </li>
                  </ul>
                </li>
                <li className="main-mega">
                  <a href="#">
                    Best Selling{" "}
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                  <ul className="mega-menu">
                    <li className="single-menu">
                      <a href="#" className="title-link">
                        Kids Collection
                      </a>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/225x155"
                          alt="#"
                        />
                      </div>
                      <div className="inner-link">
                        <a href="#">Ear Accessories</a>
                        <a href="#">Chains</a>
                        <a href="#">Bracelets</a>
                      </div>
                    </li>
                    <li className="single-menu">
                      <a href="#" className="title-link">
                        Men's
                      </a>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/225x155"
                          alt="#"
                        />
                      </div>
                      <div className="inner-link">
                        <a href="#">Accessories</a>
                        <a href="#">Bracelets</a>
                        <a href="#">Pandents</a>
                      </div>
                    </li>
                    <li className="single-menu">
                      <a href="#" className="title-link">
                        Women's
                      </a>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/225x155"
                          alt="#"
                        />
                      </div>
                      <div className="inner-link">
                        <a href="#">Ladies Chains</a>
                        <a href="#">Ladies Accessories</a>
                        <a href="#"> Necklace </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Hot selling</a>
                    </li>
                    <li>
                      <a href="#">Latest Offer</a>
                    </li>
                    <li>
                      <a href="#">Ear Rings</a>
                    </li>
                    <li>
                      <a href="#">Bracelets</a>
                    </li>
                    <li>
                      <a href="#">man's Jwellery</a>
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
                        <Link to="/product">Product</Link>
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
                              <Link to={"/cart"}>Cart</Link>
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
export default Header;