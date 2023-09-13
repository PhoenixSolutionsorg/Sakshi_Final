import Topbar from "../Topbar";

function DoctorClinic({ data }) {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>S No.</td>
              <td>Doctor Name</td>
              <td>Phone Number</td>
              <td>Address</td>
              <td>Experience</td>
              {/* <td>Clinic</td> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.doctor.user.firstName}</td>
                <td>{item.doctor.user.phoneNumber}</td>
                <td>{item.doctor.address}</td>
                <td>{item.doctor.experience}</td>
                {/* <td>
                          <button>Clinic</button>
                        </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DoctorClinic;
