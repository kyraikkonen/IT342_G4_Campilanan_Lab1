import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        {!loggedInUser && <Link to="/login">Login</Link>}
        {!loggedInUser && <Link to="/register">Register</Link>}
        {loggedInUser && <Link to="/dashboard">Dashboard</Link>}
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

          <Route
            path="/login"
            element={
              loggedInUser ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login setLoggedInUser={setLoggedInUser} />
              )
            }
          />

          <Route
            path="/register"
            element={loggedInUser ? <Navigate to="/dashboard" /> : <Register />}
          />

          <Route
            path="/dashboard"
            element={
              loggedInUser ? (
                <Dashboard
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
