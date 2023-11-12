import React from "react";
import "./navbar.scss";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wraper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item"></div>
          <LanguageIcon className="icon" />
          English
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />
          </div>
          <div className="item">
            <NotificationAddIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/409/979/original/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
              alt=""
              className="avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
