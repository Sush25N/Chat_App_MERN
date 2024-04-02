// import React from "react";
// import logo from "../icons/chat.png";
// import { UseSelector, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const WelCome = () => {
//   const lightTheme = useSelector((state) => state.themeKey);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log(userData);
//   const nav = useNavigate();
//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }

//   return (
//     <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
//       <motion.img
//         drag
//         whileTap={{ scale: 1.05, rotate: 360 }}
//         src={logo}
//         alt="Logo"
//         className="welcome-logo"
//       >
//         <b>Hi , {userData.data.name} 👋🏼 </b>
//         <p>View and text directly to people present in the chat Rooms.</p>
//       </motion.img>
//     </div>
//   );
// };

// export default WelCome;

import React, { useEffect } from "react";
import logo from "../icons/chat.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelCome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      console.log("User not authenticated");
      navigate("/"); // Redirect to login page if user is not authenticated
    }
  }, [userData, navigate]);

  if (!userData || !userData.name) {
    // If userData is not available or does not contain name, prevent rendering
    return null;
  }

  return (
    <div className={`welcome-container${lightTheme ? "" : " dark"}`}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi, {userData.name} 👋🏼</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};

export default WelCome;
