import "./corousel.css"
function ProductArea(){
//   <script>
// $(document).ready(function(){
// 	$(".wish-icon i").click(function(){
// 		$(this).toggleClass("fa-heart fa-heart-o");
// 	})
// });
// </script>
    return <>
       <div className="container-xl">
  <div className="row">
    <div className="col-md-12">
      <h2>
        Featured <b>Products</b>
      </h2>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval={0}
      >
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/ipad.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Silver Necklace</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>2000</strike> <b>1500</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/headphone.jpg"
                      className="img-fluid"
                      alt="Headphone"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Silver Pendant</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>700</strike> <b>450</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/macbook-air.jpg"
                      className="img-fluid"
                      alt="Macbook"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Mens Bracelets</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>500</strike> <b>350</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/nikon.jpg"
                      className="img-fluid"
                      alt="Nikon"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Leg Accessories</h4>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <p className="item-price">
                      <strike>$315.00</strike> <b>$250.00</b>
                    </p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item carousel-item">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/play-station.jpg"
                      className="img-fluid"
                      alt="Play Station"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Deligate Rings</h4>
                    <p className="item-price">
                      <strike>$289.00</strike> <span>$269.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/macbook-pro.jpg"
                      className="img-fluid"
                      alt="Macbook"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Mens Ear Rings</h4>
                    <p className="item-price">
                      <strike>$1099.00</strike> <span>$869.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/speaker.jpg"
                      className="img-fluid"
                      alt="Speaker"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Chains</h4>
                    <p className="item-price">
                      <strike>$109.00</strike> <span>$99.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/galaxy.jpg"
                      className="img-fluid"
                      alt="Galaxy"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Artifacts</h4>
                    <p className="item-price">
                      <strike>$599.00</strike> <span>$569.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item carousel-item">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/iphone.jpg"
                      className="img-fluid"
                      alt="iPhone"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple iPhone</h4>
                    <p className="item-price">
                      <strike>$369.00</strike> <span>$349.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/canon.jpg"
                      className="img-fluid"
                      alt="Canon"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Canon DSLR</h4>
                    <p className="item-price">
                      <strike>$315.00</strike> <span>$250.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/pixel.jpg"
                      className="img-fluid"
                      alt="Pixel"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Google Pixel</h4>
                    <p className="item-price">
                      <strike>$450.00</strike> <span>$418.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-half-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="thumb-wrapper">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" />
                  </span>
                  <div className="img-box">
                    <img
                      src="/examples/images/products/watch.jpg"
                      className="img-fluid"
                      alt="Watch"
                    />
                  </div>
                  <div className="thumb-content">
                    <h4>Apple Watch</h4>
                    <p className="item-price">
                      <strike>$350.00</strike> <span>$330.00</span>
                    </p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o" />
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel controls */}
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
</div>

    </>
}
export default ProductArea;