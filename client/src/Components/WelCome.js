import React from "react";
import logo from "../icons/chat.png";

const WelCome = () => {
  return (
    <div className="welcome-container">
      <img src={logo} alt="Logo" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};

export default WelCome;
