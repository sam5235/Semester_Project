import { auth, storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import readingTime from "reading-time";
// const readingTime = require('reading-time');

export const uploadImage = async (image) => {
  const imageRef = ref(storage, `blog/${image.name + v4()}`);
  const snapshot = await uploadBytes(imageRef, image);
  return await getDownloadURL(snapshot.ref);
};

export const publishBlog = async (blog, onFinish) => {
  setTimeout(() => {
    const data = {
      ...blog,
      publisher: auth.currentUser.uid,
      status: "pending",
      length: readingTime(JSON.stringify(blog.content)),
      datePublished: new Date().toISOString(),
    };

    console.log({ data });
    onFinish();
  }, 2000);
};
