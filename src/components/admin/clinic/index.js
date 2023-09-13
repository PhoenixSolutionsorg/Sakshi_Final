import { Link } from "react-router-dom";

function Clinic({ data }) {
  return (
    <>
      <div className="container-fluid">
        <table className="table table-bordered table-hover">
          <thead>
            <tr style={{color:"white",fontWeight:"700",backgroundColor:"black",textAlign:"center"}}>
              <td>S NO.</td>
              <td>CLINIC NAME</td>
              <td>ADDRESS</td>
              <td>DOCTOR</td>
              <td>PATIENT</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} style={{textAlign:"center"}}>
                {/* <td>{item.id}</td> */}
                <td>{++index}</td>
                <td>{item?.name}</td>
                <td>{item?.address}</td>
                <td>
                  <Link to={`/site-admin/clinic-list/doctor-list/${item?.id}`}>
                    <button className="btn btn-success">Doctor</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/site-admin/clinic-list/patient-list/${item?.id}`}>
                    <button className="btn btn-secondary">Patient</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Clinic;
