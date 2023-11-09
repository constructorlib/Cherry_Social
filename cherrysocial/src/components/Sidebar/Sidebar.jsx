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
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>

            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="sidebarFriendName">Dinora K</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
