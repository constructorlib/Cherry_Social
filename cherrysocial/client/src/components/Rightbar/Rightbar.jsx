import "./rightbar.css";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { Key } from "@mui/icons-material";
export default function Rightbar() {
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" className="birthdayImg" alt="" />
            <span className="birthdayText">
              <b>Maria Haim</b> and <b>3 other friends</b> have a birthday today
            </span>
          </div>
          <img src="assets/ad.jpg" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {PF + Users.map((u) => <Online key={u.id} user={u} />)}
          </ul>
        </div>
      </div>
    </>
  );
}
