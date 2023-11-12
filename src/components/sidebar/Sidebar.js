import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ setData }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.setItem("user", null);
    setData({ loading: false, loggedIn: false });
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="center">
        <p className="title">Main</p>
        <ul>
          <li>
            <DashboardIcon className="icons" />
            <Link to="/Dashboard">
              {" "}
              <span>Dashboard</span>{" "}
            </Link>
          </li>
          <p className="title">Users</p>
          <li>
            <PersonOutlineOutlinedIcon className="icons" />
            <Link to="/Customers">
              {" "}
              <span>Customers</span>{" "}
            </Link>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icons" />
            <Link to="/Products">
              {" "}
              <span>Products</span>{" "}
            </Link>
          </li>
          <li>
            <DeliveryDiningIcon className="icons" />
            <Link to="/Delivery">
              {" "}
              <span>Delivery</span>{" "}
            </Link>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsIcon className="icons" />
            <Link to="/Stats">
              {" "}
              <span>Stats</span>{" "}
            </Link>
          </li>
          <li>
            <NotificationsActiveIcon className="icons" />
            <span>Notification</span>
          </li>
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamIcon className="icons" />
            <Link to="/SystemHealth">
              {" "}
              <span>System Health</span>{" "}
            </Link>
          </li>
          <li>
            <PsychologyIcon className="icons" />
            <Link to="/Logs">
              {" "}
              <span>Logs</span>{" "}
            </Link>
          </li>
          <li>
            <SettingsSuggestIcon className="icons" />
            <Link to="/Settings">
              {" "}
              <span>Settings</span>{" "}
            </Link>
          </li>
          <p className="title">User</p>

          <li>
            <AccountBoxIcon className="icons" />
            <Link to="/MyProfile">
              {" "}
              <span>Profile</span>{" "}
            </Link>
          </li>

          <li>
            <LogoutIcon className="icons" />
            <span onClick={logOut}>LogOut</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
