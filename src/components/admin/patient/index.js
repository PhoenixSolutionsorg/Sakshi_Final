import Topbar from "../Topbar";

function Patient({ data }) {
  return (
    <>
      <div className="container-fluid">
        <table className="table table-bordered table-hover">
          <thead>
            <tr style={{color:"white",fontWeight:"700",backgroundColor:"black",textAlign:"center"}}>
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

export default Patient;
