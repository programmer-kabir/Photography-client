import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      // console.log(currentUser);

      // get and set token
      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email:currentUser.email})
        .then(data =>{
          // console.log(data);
          
          localStorage.setItem('token', data.data)
          
        })
      }else{
        localStorage.removeItem('token')
      }
      setLoading(false)
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const newRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password)
  };

  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSingIn = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile  = (name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}
  const authInfo = {
    user,
    loading,
    newRegister,
    singIn,
    logOut,
    googleSingIn,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
