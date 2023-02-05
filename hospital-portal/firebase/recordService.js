import {
  doc,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";

export const addRecord = async (record, onFinish, onFail) => {
  console.log(record);
  addDoc(collection(db, "records"), {
    ...record,
    createdAt: new Date(),
    hospital: auth.currentUser.uid,
  })
    .then(async () => {
      const docref = doc(db, "patients", record.patientId);
      await updateDoc(docref, { hospitals: arrayUnion(auth.currentUser.uid) });
      onFinish();
    })
    .catch((err) => {
      onFail();
      console.error(err);
    });
};
