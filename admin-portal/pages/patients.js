import { useEffect } from "react";
import { listAllUsers } from "../firebase/patientServices";

const PatientsPage = () => {
  useEffect(() => {
    listAllUsers();
  }, []);

  return <h1>Patients</h1>;
};

export default PatientsPage;
