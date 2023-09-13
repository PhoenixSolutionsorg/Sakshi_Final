import { Link } from "react-router-dom";
function Doctor({ data, specialization, doctorBySpecialization }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <br />
            <ul className="list-group">
              <li className="list-group-item">
                Specialization
                {specialization.map((item, index) => (
                  <ul className="list-group">
                    <Link
                      to={`/site-admin/doctor-list/specialzation/${item.id}`}
                    >
                      <li className="list-group-item">{item.specialization}</li>
                    </Link>
                  </ul>
                ))}
              </li>
            </ul>
            <br />
            {/* <ul className="list-group">
                        <li className="list-group-item">Experience
                            <ul className="list-group">
                                <li className="list-group-item">Item 1</li>
                                <li className="list-group-item">Item 2</li>
                            </ul>
                        </li>
                    </ul> */}
          </div>
          <div className="col-md-9">
            <table className="table table-bordered table-hover">
              <thead>
                <tr style={{color:"white",fontWeight:"700",backgroundColor:"black",textAlign:"center"}}>
                  <td>S No.</td>
                  <td>Doctor Name</td>
                  <td>Phone Number</td>
                  <td>Address</td>
                  <td>Experience</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{++index}</td>
                    <td>{item.user.firstName}</td>
                    <td>{item.user.phoneNumber}</td>
                    <td>{item.address}</td>
                    <td>{item.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor;
