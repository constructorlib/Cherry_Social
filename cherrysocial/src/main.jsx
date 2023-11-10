import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Profile />
    {/* <App /> */}
  </React.StrictMode>
);
