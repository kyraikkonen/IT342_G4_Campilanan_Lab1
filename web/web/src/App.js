import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="card">
                <h1>Mini Authentication Application</h1>
                <p>
                  This system allows users to register, log in, access protected
                  pages, and log out securely.
                </p>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
