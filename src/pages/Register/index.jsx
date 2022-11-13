import React, { useEffect, useReducer } from "react";
import { auth, registerWithEmailAndPassword } from "../../config/firebase";
import "./style.css";
import { reducer } from "./utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogged } from "../../services/store/userSlice";

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatchFunc = useDispatch();
  const navigate = useNavigate();
  const hasLogged = useSelector((state) => state.user.hasLogged);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fullName, email, password } = state;
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (hasLogged && user) navigate("/");
  }, [hasLogged, user]);

  const nameChangeHandler = (e) => {
    dispatch({ type: "setFullName", payload: e.target.value });
  };
  const emailChangeHandler = (e) => {
    dispatch({ type: "setEmail", payload: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatch({ type: "setPassword", payload: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    registerWithEmailAndPassword(fullName, email, password);
    dispatchFunc(setUserLogged(true));
  };
  return (
    <div className="registerFormContainer">
      <div className="regForm">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form onSubmit={onSubmitHandler} className="registerForm">
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={nameChangeHandler}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button
            type="submit"
            style={{ color: "white", backgroundColor: "Black" }}
          >
            Register!
          </button>

          <p>
            Already have account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
