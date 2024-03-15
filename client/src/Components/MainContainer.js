import React, { useState } from "react";
import "./main-container.css";
import Sidebar from "./Sidebar";
import CreateGroups from "./CreateGroups";
// import ChatArea from "./ChatArea";
// import WelCome from "./WelCome";

const MainContainer = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test-1",
      lastMessage: "Last Messsage - 1",
      timeStamp: "today",
    },
    {
      name: "Test-2",
      lastMessage: "Last Messsage - 2",
      timeStamp: "today",
    },
    {
      name: "Test-3",
      lastMessage: "Last Messsage - 3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="main-container">
      <Sidebar />
      <CreateGroups />
      {/* <WelCome /> */}
      {/* <ChatArea props={conversations[0]} /> */}
    </div>
  );
};

export default MainContainer;
