import Topbar from "../Topbar";

function PatientClinic({ data }) {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <td>S No.</td>
              <td>Patient Name</td>
              <td>Phone Number</td>
              <td>Address</td>
              <td>Insurance</td>
              <td>Diabitic</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.user.firstName}</td>
                <td>{item.user.phoneNumber}</td>
                <td>{item.address}</td>
                <td>{item.insurance}</td>
                <td>{item.diabitic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PatientClinic;
