import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";
import { getAuth } from "firebase/auth";

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  return { googleProvider, auth, signInWithPopup };
};

export default useFirebase;
