import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../config/firebase";
import { setUserLogged } from "../../services/store/userSlice";
import "./style.css";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const logoutHandler = () => {
    logout();
    navigate("/login");
    dispatch(setUserLogged(false));
  };
  return (
    <div>
      <nav className="navbar">
        <h2>E-Shop</h2>
        <div className="navbar__options">
          <p>
            <Link to="/cart" style={{ color: "black", fontWeight: "bold" }}>
              Cart
            </Link>
            <span className="navbar__item__count">{items.length}</span>
          </p>
          <button onClick={logoutHandler} className="navbar__logout">
            Log out
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
