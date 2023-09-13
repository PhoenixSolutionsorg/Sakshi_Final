import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorSpecialization from "../../../../components/admin/DoctorBySpecialization";
import { AdminUserManagementServices } from "../../../../services";

function DoctorBySpecializationDetaile() {
  const [doctorBySpecialization, setDoctorBySpecialization] = useState([]);
  const { specializationId } = useParams();

  const getData = async () => {
    try {
      const getDoctorBySpecialization =
        await AdminUserManagementServices.getDoctorBySpecialization({
          specializationId,
        });
      const { data, success } = getDoctorBySpecialization;
      if (success) {
        setDoctorBySpecialization(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DoctorSpecialization doctorBySpecialization={doctorBySpecialization} />
    </>
  );
}
export default DoctorBySpecializationDetaile;
