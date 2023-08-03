import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyCOjp6cnkSFbOw9YK6q_VIqyZq2rvpkR_4",
  authDomain: "resume-now-b2022.firebaseapp.com",
  projectId: "resume-now-b2022",
  storageBucket: "resume-now-b2022.appspot.com",
  messagingSenderId: "337439700417",
  appId: "1:337439700417:web:f01e36c4d2c34d6dd8eb40",
  measurementId: "G-H31N1KGDG8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const updateUserDatabase = async(user,uid) => {
  if(typeof user !== "object") return;

  const docRef = doc(db,"users",uid);
  await setDoc(docRef,{...user});
}

const getUserFromDatabase = async(uid) => {
  const docRef = doc(db,"users",uid);
  const result = await getDoc(docRef);

  if(!result.exists()) return null;
  return result.data();
  

}

export {app as default, auth, db, updateUserDatabase, getUserFromDatabase};