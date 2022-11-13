import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { setUserLogged } from "../../services/store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const hasLogged = useSelector((state) => state.user.hasLogged);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (hasLogged && user) navigate("/");
  }, [hasLogged, user]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
    dispatch(setUserLogged(true));
  };
  return (
    <div className="loginFormContainer">
      <div className="logForm">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={onSubmitHandler} className="loginForm">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailChangeHandler}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={passwordChangeHandler}
          />
          <button
            type="submit"
            style={{ color: "white", backgroundColor: "black" }}
          >
            Login
          </button>
          <p>
            Create a new account <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
