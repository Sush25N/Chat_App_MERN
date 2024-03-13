import React from "react";

const ConversationsItem = ({ props }) => {
  const { name, lastMessage, timeStamp } = props; //destructuring of props
  return (
    <div className="conversation-container">
      <p className="con-icon">{name[0]}</p>
      <p className="con-title">{name}</p>
      <p className="con-lastMessage">{lastMessage}</p>
      <p className="con-timeStamp">{timeStamp}</p>
    </div>
  );
};

export default ConversationsItem;
