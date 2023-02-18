import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { secondaryAuth, db, auth } from "../config/firebase";

export const createHealthCareCenter = (center, onFinish) => {
  createUserWithEmailAndPassword(secondaryAuth, center.email, center.password)
    .then((cred) => {
      // creating health role on users document
      setDoc(doc(db, "users", cred.user.uid), {
        role: "health",
      }).then(() => {
        // creating data on health center document
        setDoc(doc(db, "health_centers", cred.user.uid), {
          name: center.name,
          address: center.address,
          type: center.type,
          createdAt: new Date(),
          creator: auth.currentUser.uid,
        }).then(() => {
          signOut(secondaryAuth);
          onFinish();
        });
      });
    })
    .catch((error) => {
      onFinish();
      console.log({ error });
    });
};

export const getHealthCareCenters = async () => {
  const centers = [];
  const querySnapshot = await getDocs(collection(db, "health_centers"));
  
  querySnapshot.forEach((doc) => {
    centers.push(doc.data());
  });

  return centers;
};
