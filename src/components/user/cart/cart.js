import "./cart.css"
export default function Cart() {
  return <>
    <div className="container mt-4 p-0">

      <div className="row px-md-4 px-2 pt-4 mb-5">
        <div className="col-lg-8">
          <p className="pb-2 fw-bold">Order</p>
          <div className="card">
            <div className="ribbon ribbon-top-right">
              <span>SALE TIME!</span>
            </div>
            <div>
              <div className="table-responsive px-md-4 px-2 pt-3">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            {" "}
                            <img
                              className="pic"
                              src="httpl://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                              alt=""
                            />{" "}
                          </div>
                          <div className="pl-3 d-flex flex-column justify-content">
                            <p className="fw-bold">
                              Air<span className="pl-1">Red</span>
                              <span className="pl-1">Pants</span>
                            </p>{" "}
                            <small className=" d-flex">
                              {" "}
                              <span className=" text-muted">Color:</span>{" "}
                              <span className=" fw-bold">Red/White</span>{" "}
                            </small>{" "}
                            <small className="">
                              {" "}
                              <span className=" text-muted">Size:</span>{" "}
                              <span className=" fw-bold">L</span>{" "}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="red">$45.00</span>
                          </p>
                          <p className="text-muted text-decoration-line-through">
                            $55.00
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {" "}
                          <span className="pe-3 text-muted">Quantity</span>{" "}
                          <span className="pe-3">
                            {" "}
                            <input
                              className="pl-2 ml-3 mr-3"
                              type="number"
                              defaultValue={2}
                            />
                          </span>
                          <div className="round">
                            {" "}
                            <span className=""> L </span>{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            {" "}
                            <img
                              className="pic"
                              src="httpl://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                              alt=""
                            />{" "}
                          </div>
                          <div className="pl-3 d-flex flex-column">
                            <p className="fw-bold">
                              Court<span className="pl-1">Dri-FIT</span>
                            </p>{" "}
                            <small className=" d-flex">
                              {" "}
                              <span className=" text-muted">Color:</span>{" "}
                              <span className="fw-bold">Dark Blue</span>{" "}
                            </small>{" "}
                            <small className="">
                              {" "}
                              <span className=" text-muted">Size:</span>{" "}
                              <span className="fw-bold">L</span>{" "}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="red">$45.00</span>
                          </p>
                          <p className="text-muted text-decoration-line-through">
                            $55.00
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {" "}
                          <span className="pe-3 text-muted">Quantity</span>{" "}
                          <span className="pe-3">
                            {" "}
                            <input
                              className="pl-2 ml-3 mr-3"
                              type="number"
                              defaultValue={2}
                            />
                          </span>
                          <div className="round">
                            {" "}
                            <span className=""> L </span>{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            {" "}
                            <img
                              className="pic"
                              src="httpl://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                              alt=""
                            />{" "}
                          </div>
                          <div className="pl-3 d-flex flex-column">
                            <p className="fw-bold">
                              {" "}
                              <span className="pl-1">Heritage</span>
                              <span className="pl-1">Windrunner</span>
                            </p>{" "}
                            <small className="">
                              {" "}
                              <span className=" text-muted">Color:</span>{" "}
                              <span className="fw-bold">Blue/White</span>{" "}
                            </small>{" "}
                            <small className="">
                              {" "}
                              <span className=" text-muted">Size:</span>{" "}
                              <span className="fw-bold">L</span>{" "}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <p className="pe-3">
                            <span className="red">$45.00</span>
                          </p>
                          <p className="text-muted text-decoration-line-through">
                            $55.00
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {" "}
                          <span className="pe-3 text-muted">Quantity</span>{" "}
                          <span className="pe-3">
                            {" "}
                            <input
                              className="pl-2 ml-3 mr-3"
                              type="number"
                              defaultValue={2}
                            />
                          </span>
                          <div className="round">
                            {" "}
                            <span className=""> L </span>{" "}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 payment-summary mb-5">
          <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p>
          <div className="card px-md-3 px-2 pt-4">
            <div className="unregistered mb-4">
              {" "}
              <span className="py-1">unregistered account</span>{" "}
            </div>
            <div className="d-flex justify-content-between pb-3">
              {" "}
              <small className="text-muted">Transaction code</small>
              <p className="">VC115665</p>
            </div>
            <div className="d-flex justify-content-between b-bottom">
              {" "}
              <input type="text" className="pl-2 ms-4 me-4" placeholder="COUPON CODE" />
              <div className="btn btn-primary">Apply</div>
            </div>
            <div className="d-flex flex-column b-bottom">
              <div className="d-flex justify-content-between py-3">
                {" "}
                <small className="text-muted">Order Summary</small>
                <p>$122</p>
              </div>
              <div className="d-flex justify-content-between pb-3">
                {" "}
                <small className="text-muted">Additional Service</small>
                <p>$22</p>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <small className="text-muted">Total Amount</small>
                <p>$132</p>
              </div>
            </div>
            <div className="sale my-3">
              {" "}
              <span>
                sale<span className="px-1">expiring</span>
                <span>in</span>:
              </span>
              <span className="red">
                21<span className="pl-1">hours</span>,31
                <span className="pl-1 ">minutes</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}

// --------------------other cart pages---------------------------


// https://bbbootstrap.com/snippets/bootstrap-ecommerce-shopping-cart-item-summary-44021562

// https://bbbootstrap.com/snippets/tailwind-css-shopping-cart-template-84488512