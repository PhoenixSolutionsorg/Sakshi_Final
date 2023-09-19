function MiddleBanner() {
    return <>
        <section className="midium-banner">
            <div className="container">
                <div className="row">
                    {/* Single Banner  */}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="single-banner">
                            <img src="images/1.jfif" alt="#" />
                            <div className="content">
                                <p>Wedding Collectons</p>
                                <h3>
                                    Wedding items <br />
                                    Up to<span> 50%</span>
                                </h3>
                                <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    {/* /End Single Banner  */}
                    {/* Single Banner  */}
                    <div className="col-lg-6 col-md-6 col-12" >
                        <div className="single-banner">
                            {/* <img src="https://via.placeholder.com/600x370" alt="#"> */}
                            <img src="images/5.jfif" alt="#" className="w-100 h-100 img img-responsive cover" />
                            <div className="content">
                                <p>jweles women</p>
                                <h3>
                                    mid season <br /> up to <span>70%</span>
                                </h3>
                                <a href="#" className="btn">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* /End Single Banner  */}
                </div>
            </div>
        </section>
    </>
}
export default MiddleBanner;