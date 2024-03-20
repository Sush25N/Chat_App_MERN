import React from "react";
import { IconButton } from "@mui/material";
import logo from "../icons/chat.png";
import SearchIcon from "@mui/icons-material/Search";

const Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <div>
          <IconButton>
            <img
              src={logo}
              style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
            />
            <p className="ug-title">Available Groups</p>
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test Groups </p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
