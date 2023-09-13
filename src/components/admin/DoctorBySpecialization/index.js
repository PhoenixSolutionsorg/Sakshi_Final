import Topbar from "../Topbar";

function DoctorSpecialization({ doctorBySpecialization }) {
  return (
    <>
      <Topbar />
      <br />

      <div className="container">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>S No.</td>
              <td>Doctor Name</td>
              <td>Phone Number</td>
              <td>Address</td>
              <td>Experience</td>
            </tr>
          </thead>
          <tbody>
            {doctorBySpecialization.map((item, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.doctor.user.firstName}</td>
                <td>{item.doctor.user.phoneNumber}</td>
                <td>{item.doctor.address}</td>
                <td>{item.doctor.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DoctorSpecialization;
