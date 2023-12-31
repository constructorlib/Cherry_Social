import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);
