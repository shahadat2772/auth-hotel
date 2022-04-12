import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Login.css";
import useFirebase from "../../hooks/useFirebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState, useSignInWithFacebook } from "react-firebase-hooks/auth";

const Login = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const { googleProvider, signInWithPopup } = useFirebase();

  const [signInWithFacebook, amiUser, loading, error] =
    useSignInWithFacebook(auth);

  const from = location?.state?.from?.pathname || "/home";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailBlur = (value) => {
    setEmail(value);
  };
  const passwordBlur = (value) => {
    setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignInWithPopUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };

  const handleSignWithFacebook = () => {
    signInWithFacebook();
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="formContainer">
      <h2 className="text-center mb-4 text-secondary">Login</h2>
      <form className="form mx-auto" onSubmit={handleLogin} action="">
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            onBlur={(e) => emailBlur(e.target.value)}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            onBlur={(e) => passwordBlur(e.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <input className="mt-3" type="submit" value="Login" />
        <p className="text-center mt-2">
          New to auth hotel?
          <Link className="text-decoration-none " to={`/signup`}>
            {" "}
            SignUp
          </Link>
        </p>
        <div className="orlinesContainer">
          <div className="orlines mx-auto"></div>
          or
          <div className="orlines mx-auto"></div>
        </div>
        <button onClick={handleSignInWithPopUp} className="loginButton">
          Continue With Google
        </button>
        <button onClick={handleSignWithFacebook} className="loginButton">
          Continue with facebook
        </button>
      </form>
    </div>
  );
};

export default Login;
