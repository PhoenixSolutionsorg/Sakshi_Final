import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import WithoutCategory from "../header/withoutCategory";
import "./productPage.css";
import routesMap from "../../../routeControl/userRouteMap";
function ProductPage() {

  return <>
    <div className="container">
      <div
        className="bg-white rounded d-flex align-items-center justify-content-between"
        id="header"
      >
        
        <button
          className="btn btn-hide text-uppercase"
          type="button"
          data-toggle="collapse"
          data-target="#filterbar"
          aria-expanded="false"
          aria-controls="filterbar"
          id="filter-btn"
          onclick="changeBtnTxt()"
        >
          
          <span className="fas fa-angle-left" id="filter-angle" />
          <span id="btn-txt">Show filters</span>
        </button>
        <nav className="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto">
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mynav"
            aria-controls="mynav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onclick="chnageIcon()"
            id="icon"
          >
            
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div className="collapse navbar-collapse hidebox" id="mynav" >
            
            <ul className="navbar-nav d-lg-flex align-items-lg-center">
              
              <li className="nav-item active">
                
                <select name="sort" id="sort">
                  
                  <option value="" hidden="" selected="">
                    Sort by
                  </option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                </select>
              </li>
              <li className="nav-item d-inline-flex align-items-center justify-content-between mb-lg-0 mb-3">
                
                <div
                  className="d-inline-flex align-items-center mx-lg-2"
                  id="select2"
                >
                  
                  <div className="pl-2">Products:</div>
                  <select name="pro" id="pro">
                    
                    <option value={18}>18</option> <option value={19}>19</option>
                    <option value={20}>20</option>
                  </select>
                </div>
                <div className="font-weight-bold mx-2 result">18 from 200</div>
              </li>
              <li className="nav-item d-lg-none d-inline-flex"> </li>
            </ul>
          </div> */}
        </nav>
        <div className="ml-auto  mr-2 ">
          
          <nav aria-label="Page navigation example">
            
            <ul className="pagination">
              
              <li className="page-item">
                
                <a className="page-link" href="#" aria-label="Previous">
                  
                  <span aria-hidden="true" className="font-weight-bold">
                    &lt;
                  </span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ..
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  24
                </a>
              </li>
              <li className="page-item">
                
                <a className="page-link" href="#" aria-label="Next">
                  
                  <span aria-hidden="true" className="font-weight-bold">
                    &gt;
                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="content" className="my-5">
        
        <div id="filterbar" className="collapse">
          
          <div className="box border-bottom">
            
            <div className="form-group text-center">
              
              <div className="btn-group" data-toggle="buttons">
                
                <label className="btn btn-success form-check-label">
                  
                  <input className="form-check-input" type="radio" /> Reset
                </label>
                <label className="btn btn-success form-check-label active">
                  
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked=""
                  />
                  Apply
                </label>
              </div>
            </div>
            <div>
              
              <label className="tick">
                New <input type="checkbox" defaultChecked="checked" />
                <span className="check" />
              </label>
            </div>
            <div>
              
              <label className="tick">
                Sale <input type="checkbox" /> <span className="check" />
              </label>
            </div>
          </div>
          <div className="box border-bottom">
            
            <div className="box-label text-uppercase d-flex align-items-center">
              Outerwear
              <button
                className="btn ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#inner-box"
                aria-expanded="false"
                aria-controls="inner-box"
                id="out"
                onclick="outerFilter()"
              >
                
                <span className="fas fa-plus" />
              </button>
            </div>
            <div id="inner-box" className="collapse mt-2 mr-1">
              
              <div className="my-1">
                
                <label className="tick">
                  Windbreaker <input type="checkbox" defaultChecked="checked" />
                  <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Jumpsuit <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Jacket <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Coat <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Raincoat <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Handbag <input type="checkbox" defaultChecked="" />
                  <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Warm vest <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Wallets <input type="checkbox" defaultChecked="" />
                  <span className="check" />
                </label>
              </div>
            </div>
          </div>
          <div className="box border-bottom">
            
            <div className="box-label text-uppercase d-flex align-items-center">
              season
              <button
                className="btn ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#inner-box2"
                aria-expanded="false"
                aria-controls="inner-box2"
              >
                <span className="fas fa-plus" />
              </button>
            </div>
            <div id="inner-box2" className="collapse mt-2 mr-1">
              
              <div className="my-1">
                
                <label className="tick">
                  Spring <input type="checkbox" defaultChecked="checked" />
                  <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Summer <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Autumn <input type="checkbox" defaultChecked="" />
                  <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Winter <input type="checkbox" /> <span className="check" />
                </label>
              </div>
              <div className="my-1">
                
                <label className="tick">
                  Rainy <input type="checkbox" /> <span className="check" />
                </label>
              </div>
            </div>
          </div>
          <div className="box border-bottom">
            
            <div className="box-label text-uppercase d-flex align-items-center">
              price
              <button
                className="btn ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#price"
                aria-expanded="false"
                aria-controls="price"
              >
                <span className="fas fa-plus" />
              </button>
            </div>
            <div className="collapse" id="price">
              
              <div className="middle">
                
                <div className="multi-range-slider">
                  
                  <input
                    type="range"
                    id="input-left"
                    min={0}
                    max={100}
                    defaultValue={10}
                  />
                  <input
                    type="range"
                    id="input-right"
                    min={0}
                    max={100}
                    defaultValue={50}
                  />
                  <div className="slider">
                    
                    <div className="track" /> <div className="range" />
                    <div className="thumb left" /> <div className="thumb right" />
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                
                <div>
                  
                  <span id="amount-left" className="font-weight-bold" /> uah
                </div>
                <div>
                  
                  <span id="amount-right" className="font-weight-bold" /> uah
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            
            <div className="box-label text-uppercase d-flex align-items-center">
              size
              <button
                className="btn ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#size"
                aria-expanded="false"
                aria-controls="size"
              >
                <span className="fas fa-plus" />
              </button>
            </div>
            <div id="size" className="collapse">
              
              <div
                className="btn-group d-flex align-items-center flex-wrap"
                data-toggle="buttons"
              >
                
                <label className="btn btn-success form-check-label">
                  
                  <input className="form-check-input" type="checkbox" /> 80
                </label>
                <label className="btn btn-success form-check-label">
                  
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked=""
                  />
                  92
                </label>
                <label className="btn btn-success form-check-label">
                  
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked=""
                  />
                  102
                </label>
                <label className="btn btn-success form-check-label">
                  
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked=""
                  />
                  104
                </label>
                <label className="btn btn-success form-check-label">
                  
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked=""
                  />
                  106
                </label>
                <label className="btn btn-success form-check-label">
                  
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked=""
                  />
                  108
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id="products">
          
          <div className="row mx-0">
            
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 ">
              
              <Link to={routesMap?.DESCRIPTION?.path}>
                <div className="card d-flex flex-column align-items-center">
                  
                  <div className="product-name">Torn Jeans for Men</div>
                  <div className="card-img">
                    
                    <img
                      src="https://www.freepnglogos.com/uploads/jeans-png/jeans-mens-pants-cliparts-download-clip-art-37.png"
                      alt=""
                    />
                  </div>
                  <div className="card-body w-100 ">
                    
                    <div className="text-muted text-center mt-auto">
                      Available Colors
                    </div>
                    <div className="d-flex align-items-center justify-content-center colors my-2">
                      
                      <p>Price <del style={{ color: "red" }}>2000</del> 1500</p>
                    </div>
                    <div className="d-flex align-items-center price adjest">
                      <button className="btn  text-white">  Buy Now</button>
                      <button className="btn btn1 text-white"> &nbsp;&nbsp;&nbsp;Detail&nbsp;&nbsp; </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default ProductPage;