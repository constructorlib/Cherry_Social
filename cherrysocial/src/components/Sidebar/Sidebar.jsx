import "./sidebar.css";
import React from "react";
import * as Icons from "@mui/icons-material";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Icons.RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Icons.Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Icons.PlayCircle className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Icons.Groups className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Icons.Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <Icons.Help className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <Icons.WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Icons.Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <Icons.School className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarhr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Maria Haim</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/2.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Alilu Haim</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Rashid Ilham</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/5.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Munira Tagaeva</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/6.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Kimberley Scott</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/7.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">George Foreman</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/8.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Sophia Ayub</span>
            </li>

            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/9.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Harriet Liston</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/10.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Penelopa Morgan</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
