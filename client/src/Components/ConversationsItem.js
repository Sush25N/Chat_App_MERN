import React from "react";
import { useNavigate } from "react-router-dom";

const ConversationsItem = ({ props }) => {
  const navigate = useNavigate();
  const { name, lastMessage, timeStamp } = props; //destructuring of props
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">{name[0]}</p>
      <p className="con-title">{name}</p>
      <p className="con-lastMessage">{lastMessage}</p>
      <p className="con-timeStamp">{timeStamp}</p>
    </div>
  );
};

export default ConversationsItem;
