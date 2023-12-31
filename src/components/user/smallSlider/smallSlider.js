function SmallSlider(){
    return <>
        <section className="small-banner section">
  <div className="container-fluid">
    <div className="row">
      {/* Single Banner  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-banner">
          <img src="./images/6.jfif" alt="#" />
          <div className="content">
            <p>Man's Collectons</p>
							<h3 className="text-white">Summer travel <br/> collection</h3>
							<a href="#">Discover Now</a>
          </div>
        </div>
      </div>
      {/* /End Single Banner  */}
      {/* Single Banner  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-banner">
          <img src="images/18.jfif" alt="#" />
          <div className="content">
            <p >Bag Collectons</p>
            <h3 className="text-white">
              Awesome Bag <br /> 2020
            </h3>
            <a href="#" className="text-white">Shop Now</a>
          </div>
        </div>
      </div>
      {/* /End Single Banner  */}
      {/* Single Banner  */}
      <div className="col-lg-4 col-12">
        <div className="single-banner tab-height">
          <img src="./images/7.jfif" alt="#" />
          <div className="content">
            <p>Flash Sale</p>
            <h3 className="text-white">
              Mid Season <br /> Up to <span>40%</span> Off
            </h3>
            <a href="#" className="text-white">Discover Now</a>
          </div>
        </div>
      </div>
      {/* /End Single Banner  */}
    </div>
  </div>
</section>

    </>
}
export default SmallSlider;