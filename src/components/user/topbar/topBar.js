import { Link } from "react-router-dom";

export default function TopBar(){
    return <>
        <header className="header shop">
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
                <i className="ti-user" /> <Link to={"/myAccount"}>My account</Link>
              </li>
              <li>
                <i className="ti-power-off" />
                <a href="login.html#">Login</a>
              </li>
            </ul>
          </div>
          {/* End Top Right */}
        </div>
      </div>
    </div>
  </div>
  </header>
    </>
}