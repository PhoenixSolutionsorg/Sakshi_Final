import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AddClinic from "../../../components/admin/add-clinic/index";
import { UserAuthServices } from "../../../services/User/Auth/index.service";

export default function ClinicRegistration() {
  function submit(clinicData) {}

  return (
    <>
      <AddClinic onSubmit={submit} />
    </>
  );
}
