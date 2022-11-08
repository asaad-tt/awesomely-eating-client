import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  signin with email password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  update name
  const updateName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //  logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signIn, updateName, loading, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
