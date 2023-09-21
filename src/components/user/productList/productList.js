import { Link, useNavigate } from "react-router-dom";

function Product(props) {
  const {products,filter,setFilter,setCartProduct} = props;
  const navigate = useNavigate();
  return <>
    <div className="product-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Trending Item</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              <div className="nav-main">
                {/* Tab Nav */}
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#man"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('man');
                      }}
                    >
                      Man
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#women"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('women')
                      }}
                    >
                      Woman
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#kids"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('kids')
                      }}
                    >
                      Kids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#accessories"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('accessories')
                      }}
                    >
                      Accessories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#essential"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('essential')
                      }}
                    >
                      Essential
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#prices"
                      role="tab"
                      onClick={(e)=>{
                        e.preventDefault();
                        setFilter('prices')
                      }}
                    >
                      Prices
                    </a>
                  </li>
                </ul>
                {/*/ End Tab Nav */}
              </div>
              <div className="tab-content" id="myTabContent">
                {/* Start Single Tab */}
                <div className="tab-pane fade show active" id="man" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <a href="product-details.html">
                              {/* <img class="default-img" src="https://via.placeholder.com/550x750" alt="#">
															<img class="hover-img" src="https://via.placeholder.com/550x750" alt="#"> */}
                              <img
                                className="default-img"
                                src="images/12.jpg"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="images/13.jfif"
                                alt="#"
                              />
                            </a>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>Quick Shop</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <a title="Compare" href="#">
                                  <i className="ti-bar-chart-alt" />
                                  <span>Add to Compare</span>
                                </a>
                              </div>
                              <div className="product-action-2">
                                <a title="Add to cart" href="#">
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="women" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <Link 
                              onClick={(e)=>{
                                e.preventDefault();
                                document.body.click();
                              }}
                            >
                              <img
                                className="default-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                            </Link>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>View Description</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <Link title="Compare"
                                  onClick={(e)=>{
                                    e.preventDefault();
                                    setCartProduct();
                                  }}
                                >
                                  <i className="ti-shopping-cart" />
                                  <span>Add to Cart</span>
                                </Link>
                              </div>
                              <div className="product-action-2">
                                <Link title="Add to cart"
                                  onClick={(e)=>{
                                    e.preventDefault();
                                    setCartProduct('Buy now');
                                    navigate('/description')
                                  }}
                                >
                                  Buy Now
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="kids" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <Link 
                              onClick={(e)=>{
                                e.preventDefault();
                                document.body.click();
                              }}
                            >
                              <img
                                className="default-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                            </Link>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>View Description</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <a title="Compare" href="#">
                                  <i className="ti-shopping-cart" />
                                  <span>Add to Cart</span>
                                </a>
                              </div>
                              <div className="product-action-2">
                                <a title="Add to cart" href="#">
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="accessories" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <Link 
                              onClick={(e)=>{
                                e.preventDefault();
                                document.body.click();
                              }}
                            >
                              <img
                                className="default-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                            </Link>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>View Description</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <a title="Compare" href="#">
                                  <i className="ti-shopping-cart" />
                                  <span>Add to Cart</span>
                                </a>
                              </div>
                              <div className="product-action-2">
                                <a title="Add to cart" href="#">
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="essential" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <Link 
                              onClick={(e)=>{
                                e.preventDefault();
                                document.body.click();
                              }}
                            >
                              <img
                                className="default-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                            </Link>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>View Description</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <a title="Compare" href="#">
                                  <i className="ti-shopping-cart" />
                                  <span>Add to Cart</span>
                                </a>
                              </div>
                              <div className="product-action-2">
                                <a title="Add to cart" href="#">
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="prices" role="tabpanel">
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                        <div className="single-product">
                          <div className="product-img">
                            <Link 
                              onClick={(e)=>{
                                e.preventDefault();
                                document.body.click();
                              }}
                            >
                              <img
                                className="default-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                              <img
                                className="hover-img"
                                src="https://via.placeholder.com/550x750"
                                alt="#"
                              />
                            </Link>
                            <div className="button-head">
                              <div className="product-action">
                                <a
                                  data-toggle="modal"
                                  data-target="#exampleModal"
                                  title="Quick View"
                                  href="#"
                                >
                                  <i className=" ti-eye" />
                                  <span>View Description</span>
                                </a>
                                <a title="Wishlist" href="#">
                                  <i className=" ti-heart " />
                                  <span>Add to Wishlist</span>
                                </a>
                                <a title="Compare" href="#">
                                  <i className="ti-shopping-cart" />
                                  <span>Add to Cart</span>
                                </a>
                              </div>
                              <div className="product-action-2">
                                <a title="Add to cart" href="#">
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product-content">
                            <h3>
                              <a href="product-details.html">
                                Women Hot Collection
                              </a>
                            </h3>
                            <div className="product-price">
                              <span>$29.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}
export default Product;