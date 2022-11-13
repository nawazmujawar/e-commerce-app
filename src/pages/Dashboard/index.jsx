import React, { Suspense, useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "../../components/Navbar";
import { logout } from "../../config/firebase";
import "./style.css";
import Error from "../../components/Error";

const ProductList = lazy(() => import("./ProductList"));

const Dashboard = () => {
  useEffect(() => {}, []);

  return (
    <div className="dashboardContainer">
      <Navbar />
      <ErrorBoundary fallback={<Error>Something went wrong!</Error>}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Dashboard;
