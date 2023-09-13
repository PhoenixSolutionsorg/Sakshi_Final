import { Link } from "react-router-dom";
import adminRouteMap from "../../../routeControl/adminRouteMap";

function Topbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={adminRouteMap.DASHBOARD.path}>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={adminRouteMap.CLINIC_LIST.path}>
                            <a className="nav-link">Clinic</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={adminRouteMap.DOCTOR_LIST.path}>
                            <a className="nav-link">Doctor</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={adminRouteMap.PATIENT_LIST.path}>
                            <a className="nav-link">Patient</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Topbar