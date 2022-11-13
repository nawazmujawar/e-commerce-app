import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routers>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Routers>
  );
}

export default App;
