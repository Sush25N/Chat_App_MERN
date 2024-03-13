import React from "react";
import "./main-container.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <AccountCircleIcon />
      </div>
      <div className="sb-search">Search</div>
      <div className="sb-conversations">Conversations</div>
    </div>
  );
};

export default Sidebar;
