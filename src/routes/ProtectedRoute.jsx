import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const hasLogged = useSelector((state) => state.user.hasLogged);
  if (!hasLogged) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
