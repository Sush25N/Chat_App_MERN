import React from "react";
import "./main-container.css";
import Sidebar from "./Sidebar";
// import CreateGroups from "./CreateGroups";
// import ChatArea from "./ChatArea";
import { Outlet } from "react-router-dom";
// import WelCome from "./WelCome";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <User_Groups /> */}
      {/* <CreateGroups /> */}
      {/* <WelCome /> */}
      {/* <ChatArea props={conversations[0]} /> */}
    </div>
  );
};

export default MainContainer;
