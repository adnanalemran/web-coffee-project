import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(true);

  //handle create user
  const createUser = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //handle sign in user
  const signInUser = (email,password)=>{
    setUser(true);
    return signInWithEmailAndPassword(auth,email,password)
  }


  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
