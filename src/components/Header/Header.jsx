import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/docslogo.png";
import profilelogo from "../../assets/images/account_logo.png";
import "./Header.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VideoChatIcon from "../../assets/icons/VideoChatIcon.jsx";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [title, setTitle] = useState("Docs Clone");
  const inputref= useRef();
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }
  function adjustWidth() {
    var width = title.length * 8 + 15; // 8px per character
    inputref.current.style.width=width+"px";
 }
  useEffect(()=>{
    adjustWidth();
  },[title])

  return (
    <div className="header">
        <div className="header__logo">
          <a href="/">
          <img src={logo} alt="google docs logo" />
          </a>
        </div>
        <div className="header__wrapper">
      <div className="header__topbar">
        <div id="wrapper">
        <div className="header__topbar__docname">
          <input type="text" value={title} onChange={handleInputChange} ref={inputref} className="custom-tooltip"/>
          <div className="tooltip">Rename</div>
        </div>
        <div className="header__topbar__icons">
          <span>
            <StarBorderIcon sx={{color:"#444746",height:"20px",width:"20px"}}/>
          </span>
          <span>
            <DriveFileMoveOutlinedIcon sx={{color:"#444746",height:"20px",width:"20px"}}/>
          </span>
          <span>
            <CloudDoneOutlinedIcon sx={{color:"#444746",height:"20px",width:"20px"}}/>
          </span>
        </div>
        </div>
        <div className="header__topbar__buttons">
          <div className="header__topbar__buttons__icon">
          <span>
            <HistoryOutlinedIcon sx={{color:"#444746"}}/>
          </span>
          </div>
          <div className="header__topbar__buttons__icon">
          <span>
            <CommentOutlinedIcon sx={{color:"#444746"}}/>
          </span>
          </div>
          <div>
          <button className="header__topbar__buttons__button videobtn">
            <VideoChatIcon />
            <ArrowDropDownIcon sx={{width:"40%",color:"#444746"}}/>
          </button>
          </div>
          <div>
          <button className="header__topbar__buttons__button sharebtn">
          <LockOutlinedIcon sx={{width:"30%"}}/>
          <span>
          Share
          </span>
          </button>
          </div>
          <div>
            <a href="http://www.gmail.com" target="_blank" className="header__topbar__buttons__logo">
              <img src={profilelogo} alt="profile photo" />
            </a>
          </div>
        </div>
      </div>
      <div className="header__bottombar">
        <div className="header__bottombar__buttons">
          <div className="header__bottombar__buttons__button">
            File
          </div>
          <div className="header__bottombar__buttons__button">
            Edit
          </div>
          <div className="header__bottombar__buttons__button">
            View
          </div>
          <div className="header__bottombar__buttons__button">
            Insert
          </div>
          <div className="header__bottombar__buttons__button">
            Format
          </div>
          <div className="header__bottombar__buttons__button">
            Tools
          </div>
          <div className="header__bottombar__buttons__button">
            Extension
          </div>
          <div className="header__bottombar__buttons__button">
            Help
          </div>

        </div>
      </div>
        </div>
    </div>
  );
};

export default Header;
