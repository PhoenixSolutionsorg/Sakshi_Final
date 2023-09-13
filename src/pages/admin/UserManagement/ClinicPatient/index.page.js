import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminUserManagementServices } from "../../../../services";
import PatientClinic from "../../../../components/admin/clinicPatient";

function ClinicPatientDetail() {
  const [clinicPatientData, setClinicPatientData] = useState([]);
  const { clinicId } = useParams();
  const getData = async () => {
    try {
      const res =
        await AdminUserManagementServices.getClinicDoctorPatientListService({
          clinicId,
        });

      const { data, success } = res;
      if (success) {
        setClinicPatientData(data.patientList);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <center>
        <h3>List of patient of particular clinic</h3>
      </center>
      <PatientClinic data={clinicPatientData} />
    </>
  );
}
export default ClinicPatientDetail;
