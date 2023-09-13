import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Center from "../center";
import ClinicAddPage from "../add-clinic";
import RemoveClinic from "../add-clinic/remove-clinic";
import {
  ClinicManagement,
  DoctorManagement,
  PatientManagement,
} from "../../../pages";
import { useDispatch, useSelector } from "react-redux";
import { AccountServices } from "../../../services";
import { setAdminData } from "../../../redux/user";
import { toast } from "react-toastify";
function AdminFullPageLoader() {
  const currentUser = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setstatus] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [showCenter, setShowCenter] = useState(true);
  const [patient, setPatient] = useState(false);
  const [doctor, setDoctor] = useState(false);
  function addClinic() {
    setShowCenter(false);
    setDashboard(false);
    setDoctor(false);
    setPatient(false);
    setstatus(true);
  }
  function closeClinic() {
    setDoctor(false);
    setDashboard(false);
    setstatus(false);
    setPatient(false);
    setShowCenter(true);
  }
  function closePatient() {
    setShowCenter(false);
    setstatus(false);
    setDoctor(false);
    setDashboard(false);
    setPatient(true);
  }
  function closeDoctor() {
    setDashboard(false);
    setstatus(false);
    setShowCenter(false);
    setPatient(false);
    setDoctor(true);
  }
  function closeSecond() {
    setDoctor(false);
    setShowCenter(false);
    setstatus(false);
    setPatient(false);
    setDashboard("first");
  }
  function openSecond() {
    setDashboard("second");
  }
  const signOut = async () => {
    const credential = currentUser?.token;
    const email = currentUser?.email;
    const res = await AccountServices.AdminLogout(currentUser.id);
    dispatch(setAdminData(null));
    toast("Sign Out Success...!!!");
    navigate("/site-admin");
  };
  useEffect(() => {
    setstatus(false);
  }, []);
  return (
    <>
      <>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            {/* Sidebar - Brand */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i class="fa-solid fa-hospital"></i>
              </div>
              <div className="sidebar-brand-text mx-3">
                E-Clinic <sup>2</sup>
              </div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <Link className="nav-link" to={"/site-admin/dashboard"}>
                <i className="fas fa-fw fa-tachometer-alt" />
                <span onClick={closeClinic}>Dashboard</span>
              </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Interface</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog" />
                <span>Components</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="buttons.html">
                    Buttons
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Cards
                  </a>
                </div>
              </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">Addons</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-plus" />
                <span>CLINIC</span>
              </a>
              <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <Link
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontWeight: 700,
                    }}
                    onClick={addClinic}
                    className="collapse-item"
                  >
                    ADD CLINIC
                  </Link>
                  {/* <Link className="collapse-item" style={{color:"black" }}>
                    <b style={{fontWeight:"bold"}}>UPDATE CLINIC</b>
                  </Link> */}
                  <span>
                    <RemoveClinic />
                  </span>
                </div>
              </div>
            </li>
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  <div className="topbar-divider d-none d-sm-block" />
                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        CLINIC
                      </span>
                      <img
                        className="./img-profile rounded-circle"
                        src="./img/undraw_profile.svg"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <Link className="dropdown-item" to={"site-admin/profile"}>
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </Link>

                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" onClick={signOut}>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              {showCenter ? (
                <Center
                  closeSecond={closeSecond}
                  closePatient={closePatient}
                  closeDoctor={closeDoctor}
                />
              ) : (
                <></>
              )}
              {status ? <ClinicAddPage closeClinic={closeClinic} /> : <></>}
              {dashboard ? <ClinicManagement /> : <></>}
              {patient ? <PatientManagement /> : <></>}
              {doctor ? <DoctorManagement /> : <></>}
            </div>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <Link className="btn btn-primary">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default AdminFullPageLoader;
