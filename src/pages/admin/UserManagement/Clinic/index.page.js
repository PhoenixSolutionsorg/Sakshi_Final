import { useEffect, useState } from "react";
import { AdminUserManagementServices } from "../../../../services";
import Clinic from "../../../../components/admin/clinic";

function ClinicDetail() {
  const [clinicData, setClinicData] = useState([]);

  const getData = async () => {
    try {
      const res = await AdminUserManagementServices.getClinicListService();
      const { data, success } = res;
      if (success) {
        setClinicData(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <span>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;Clinic Details</h2>
      </span>
      <Clinic data={clinicData} />
    </>
  );
}

export default ClinicDetail;
