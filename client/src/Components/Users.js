import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import logo from "../icons/chat.png";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [refresh, setRefresh] = useState(true);
  const lightTheme = useSelector((state) => state.themeKey);
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();
  if (!userData) {
    console.log("User Not Authenticated");
    navigate(-1);
  }

  useEffect(() => {
    console.log("User refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
      console.log("User Data from API ", data);
      setUsers(data.data);
    });
  }, [refresh]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <div>
            {/* <IconButton> */}
            <img
              src={logo}
              style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            />
            <p className={"ug-title" + (lightTheme ? "" : " dark")}>
              Available Users
            </p>
            {/* </IconButton> */}
            <IconButton
              className={"icon" + (lightTheme ? "" : " dark")}
              onClick={() => {
                setRefresh(!refresh);
              }}
            >
              <RefreshIcon />
            </IconButton>
          </div>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton>
            <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <input
            placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
        </div>
        <div className="ug-list">
          {users.map((user, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-item" + (lightTheme ? "" : " dark")}
                key={index}
                onClick={() => {
                  console.log("Creating chat with ", user.name);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.token}`,
                    },
                  };
                  axios.post(
                    "https://localhost:8080/chat/",
                    {
                      userId: user._id,
                    },
                    config
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {user.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Users;
