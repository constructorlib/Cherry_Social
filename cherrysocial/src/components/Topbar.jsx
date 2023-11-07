import "./topbar.css";
import React from "react";
import * as Icons from "@mui/icons-material";

export default function Topbar() {
  return (
    <>
      <div className="topbar-all">
        <div className="topbar-left">
          <span className="logo">Cherry Social</span>
        </div>
        <div className="topbar-center">
          <div className="searchbox">
            <Icons.Search className="searchIcon" />
            <input
              className="searchInput"
              placeholder="Search for friends, videos, and posts"
            />
          </div>
        </div>
        <div className="topbar-right">
          <div className="t-links">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbar-icons">
            <div className="icon-item">
              <Icons.Person />
              <span className="icon-badge">1</span>
            </div>
            <div className="icon-item">
              <Icons.Chat />
              <span className="icon-badge">3</span>
            </div>
            <div className="icon-item">
              <Icons.Notifications />
              <span className="icon-badge">5</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" className="topbarimg" alt="" />
        </div>
      </div>
    </>
  );
}
