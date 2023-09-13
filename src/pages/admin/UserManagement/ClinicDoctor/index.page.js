import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminUserManagementServices } from "../../../../services";
import DoctorClinic from "../../../../components/admin/clinicDoctor";

function ClinicDoctorDetail() {
  const [clinicDoctorData, setClinicDoctorData] = useState([]);
  const { clinicId } = useParams();
  const getData = async () => {
    try {
      const res =
        await AdminUserManagementServices.getClinicDoctorPatientListService({
          clinicId,
        });
      const { data, success } = res;
      if (success) {
        setClinicDoctorData(data.doctorList);
      }
    } catch (error) { }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <center>
        <h3>List of doctors of particular clinic</h3>
      </center>
      <DoctorClinic data={clinicDoctorData} />
    </>
  );
}
export default ClinicDoctorDetail;
