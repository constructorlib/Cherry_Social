import React from "react";
import "./home.css";
import PersonIcon from "@mui/icons-material/Person";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
export default function Home() {
  return (
    <>
      <Topbar />

      <div className="home-all">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
