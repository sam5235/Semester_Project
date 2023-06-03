import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../config/firebase"

export const createAppointment = async (appnt) =>{
    console.log("entered", appnt);

   const ref =  await addDoc(collection(db, "appointments"), {
        start_time: appnt.startTime,
        end_time: appnt.endTime,
        max_patients: appnt.maxPatients,
        date: appnt.selectedDate,
        patientsId: [],
        hospitalId: auth.currentUser.uid,
    });


}