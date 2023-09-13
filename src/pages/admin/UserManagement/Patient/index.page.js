import { useEffect, useState } from "react";
import { AdminUserManagementServices } from "../../../../services";
import Patient from "../../../../components/admin/patient";

function PatientDetail() {
  const [patientData, setPatientData] = useState([]);

  const getData = async () => {
    try {
      const res = await AdminUserManagementServices.getPatientListService();
      const { data, success } = res;
      if (success) {
        setPatientData(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <span>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;Patient Details</h2>
      </span>
      <Patient data={patientData} />
    </>
  );
}

export default PatientDetail;
