import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const getAppointment = async () => {
  const appointments = [];
  const snapshots = await getDocs(
    query(
      collection(db, "appointments"),
      where("hospitalId", "==", auth.currentUser.uid)
    )
  );
  snapshots.forEach((doc) => {
    appointments.push({ ...doc.data(), id: doc.id });
  });

  return appointments;
};

export const updateAppointment = (appnt, onFinish) => {
  setDoc(doc(db, "appointments", appnt.id), {
    ...appnt,
  }).then(onFinish);
};

export const createAppointment = async (appnt) => {
  console.log("entered", appnt);

  const ref = await addDoc(collection(db, "appointments"), {
    start_time: appnt.startTime,
    end_time: appnt.endTime,
    max_patients: appnt.maxPatients,
    date: appnt.selectedDate,
    patientsId: [],
    hospitalId: auth.currentUser.uid,
  });
};
