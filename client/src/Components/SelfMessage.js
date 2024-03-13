import React from "react";

const SelfMessage = () => {
  var props2 = { name: "You", message: "This is Sample" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p className="con-lastMessage">{props2.message}</p>
        <p className="self-timeStamp">12.00am</p>
      </div>
    </div>
  );
};

export default SelfMessage;
