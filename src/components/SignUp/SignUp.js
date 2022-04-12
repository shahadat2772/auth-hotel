import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  const emailBlur = (value) => {
    setEmail(value);
  };
  const passwordBlur = (value) => {
    setPassword(value);
  };
  const confirmPasswordBlur = (value) => {
    setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      setErr("Password did not matched with confirm password!");
      return;
    }
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };

  return (
    <div className="formContainer">
      <h2 className="text-center mb-4 text-secondary">SignUp</h2>
      <form className="form mx-auto" onSubmit={handleSubmit} action="">
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
        <div className="input">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onBlur={(e) => confirmPasswordBlur(e.target.value)}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
        </div>
        {err && <p className="text-danger">{err}</p>}
        <input className="mt-3" type="submit" value="SignUP" />
        <p className="text-center mt-2">
          Have an account?
          <Link className="text-decoration-none " to={`/login`}>
            {" "}
            Login
          </Link>
        </p>
        <div className="orlinesContainer">
          <div className="orlines mx-auto"></div>
          or
          <div className="orlines mx-auto"></div>
        </div>
        <button className="loginButton">Continue With Google</button>
      </form>
    </div>
  );
};

export default SignUp;
