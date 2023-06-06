import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getBlogs = async () => {
  const blogs = [];
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });

  return blogs;
};
