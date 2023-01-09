import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from "firebase/auth";
import { auth, storage, db } from "../firebase/firebase";
import {
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
  query,
  collection,
  where,
  increment,
  addDoc,
  orderBy,
  deleteField,
  arrayRemove,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();


  const createUser = (email, password, firstName, lastName) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userCredential) => {
      setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        _id: userCredential.user.uid,
        status: "Update status",
        notifications: [],
      });
      navigate('/become-a-provider/' + userCredential.user.uid)
    })
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setIsLoggedIn(true);
          onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
            setUser(doc.data());     
          });
          console.log('UseEffect is calling the db')
        } else {
          setIsLoggedIn(false)
        }
    });
    return () => {
        unsubscribe();
       
    };
  }, [])





  return <UserContext.Provider value={{
    createUser,
    user
  }}>{children}</UserContext.Provider>;
};

export const UserAuth = () => {
  return useContext(UserContext);
};
