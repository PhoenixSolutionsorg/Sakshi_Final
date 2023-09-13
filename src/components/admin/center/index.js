import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { DashboardsServices } from "../../../services";
import { checkValidCount } from "../../../components";

export default function Center({closeSecond,closePatient,closeDoctor}) {
  const [dashboardData, setDashboardData] = useState({});
  const getDashboardDetails = async () => {
    try {
      const res = await DashboardsServices.getDashboardServices();
      const { data, success } = res;
      if (success) {
        setDashboardData(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getDashboardDetails();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div className="row p-4">
          <div onClick={closeSecond} style={{cursor:"pointer"}} className="col-xl-4 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2 p-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      CLINIC
                    </div>
                      <div className="h4 mb-0 font-weight-bold text-gray-800">

                        {checkValidCount(dashboardData?.totalClinic)}

                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div onClick={closePatient} style={{cursor:"pointer"}} className="col-xl-4 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2 p-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        PATIENT
                      </div>
                      <div className="h4 mb-0 font-weight-bold text-gray-800">

                        {checkValidCount(dashboardData?.totalPatient)}

                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div onClick={closeDoctor} style={{cursor:"pointer"}} className="col-xl-4 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2 p-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        DOCTOR
                      </div>
                      
                      <div className="h4 mb-0 font-weight-bold text-gray-800">
                        {checkValidCount(dashboardData?.totalDoctor)}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div >
    </>
  );
}
