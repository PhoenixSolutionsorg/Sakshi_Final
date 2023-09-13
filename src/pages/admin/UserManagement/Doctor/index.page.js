import { useEffect, useState } from "react";
import { AdminUserManagementServices } from "../../../../services";
import Doctor from "../../../../components/admin/doctor";

function DoctorDetail() {
  const [doctorData, setDoctorData] = useState([]);
  const [specialization, setSpecialization] = useState([]);

  const getData = async () => {
    try {
      const res = await AdminUserManagementServices.getDoctorListService();
      const specialization =
        await AdminUserManagementServices.getSpecializationListService();
      const { data, success } = res;
      if (success) {
        setDoctorData(data);
        setSpecialization(specialization.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <span>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;Doctor Details</h2>
      </span>
      <Doctor data={doctorData} specialization={specialization} />
    </>
  );
}

export default DoctorDetail;
