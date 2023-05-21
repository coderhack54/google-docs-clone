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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ShareModalContent from "../ShareModalContent/ShareModalContent";

// This is the toolbar header of the google docs . It provides document name, different formatting options, and the ability to share the document.

const Header = () => {
  const [title, setTitle] = useState("Docs Clone");
  const [belowThreshold, setBelowThreshold] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for modal
  const inputref = useRef(); // ref for expanding the input on typing
  const containerRef = useRef(); // ref for the resize observer
  const muiIconStyle = { color: "#444746", height: "18px", width: "18px" };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const adjustWidth = () => {
    var width = title.length * 8 + 15; // 8px per character
    inputref.current.style.width = width + "px";
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    adjustWidth();
  }, [title]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      // create a resize observer tell screen size for responsiveness
      entries.forEach((entry) => {
        const containerWidth = entry.contentRect.width;
        const bottombar_btn = entry.target.querySelector(
          ".header__bottombar__buttons"
        );
        if (containerWidth < 842) {
          setBelowThreshold(true); // collapse the icon to show person icon
        }
        if (containerWidth > 887) {
          setBelowThreshold(false); // expand the icon
        }
        if (containerWidth < 779) {
          bottombar_btn.style.maxWidth = `${containerWidth * 0.38}px`;
        } else {
          bottombar_btn.style.maxWidth = `none`;
        }
        if (containerWidth < 555) {
          // file menu toolbar display none and doc title size adjust on screen below 555px
          bottombar_btn.style.display = `none`;
          inputref.current.style.maxWidth = `${containerWidth * 0.11}px`;
        } else {
          bottombar_btn.style.display = `flex`;
          inputref.current.style.maxWidth = `none`;
        }
        if (containerWidth < 420) {
          //doc title display none for screen below 420px
          inputref.current.style.display = `none`;
        } else {
          inputref.current.style.display = `block`;
        }
      });
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="header" ref={containerRef}>
      <div className="header__logo">
        <a href="/" title="Docs home">
          <img src={logo} alt="google docs logo" />
        </a>
      </div>
      <div className="header__wrapper">
        <div className="header__topbar">
          <div id="wrapper">
            <div className="header__topbar__docname">
              <input
                type="text"
                value={title}
                onChange={handleInputChange}
                ref={inputref}
                title="Rename"
              />
            </div>
            <div className="header__topbar__icons">
              <span title="Star">
                <StarBorderIcon sx={muiIconStyle} />
              </span>
              <span title="Move">
                <DriveFileMoveOutlinedIcon sx={muiIconStyle} />
              </span>
              <span title="See document status">
                <CloudDoneOutlinedIcon sx={muiIconStyle} />
              </span>
            </div>
          </div>
          <div className="header__topbar__buttons">
            <div className="header__topbar__buttons__icon">
              <span title="Last edit was 17hr ago">
                <HistoryOutlinedIcon sx={{ color: "#444746" }} />
              </span>
            </div>
            <div className="header__topbar__buttons__icon">
              <span title="Open comment history(Ctrl+Alt+Shift+A)">
                <CommentOutlinedIcon sx={{ color: "#444746" }} />
              </span>
            </div>
            <div>
              <Button
                className="header__topbar__buttons__button videobtn"
                title="Join a call here or present this tab to a call"
              >
                <VideoChatIcon />
                <ArrowDropDownIcon sx={{ width: "40%", color: "#444746" }} />
              </Button>
            </div>
            <div>
              {belowThreshold ? (
                <Button
                  className="header__topbar__buttons__button sharebtn circle"
                  title="Private to only me"
                  onClick={handleModalOpen}
                >
                  <PersonAddAltIcon />
                </Button>
              ) : (
                <Button
                  className="header__topbar__buttons__button sharebtn"
                  title="Private to only me"
                  onClick={handleModalOpen}
                >
                  <LockOutlinedIcon sx={{ width: "30%" }} />
                  <span>Share</span>
                </Button>
              )}
            </div>
            <div>
              <a
                href="http://www.gmail.com"
                target="_blank"
                className="header__topbar__buttons__logo"
              >
                <img src={profilelogo} alt="profile photo" />
              </a>
            </div>
          </div>
        </div>
        <div className="header__bottombar">
          <div className="header__bottombar__buttons">
            <div className="header__bottombar__buttons__button">File</div>
            <div className="header__bottombar__buttons__button">Edit</div>
            <div className="header__bottombar__buttons__button">View</div>
            <div className="header__bottombar__buttons__button">Insert</div>
            <div className="header__bottombar__buttons__button">Format</div>
            <div className="header__bottombar__buttons__button">Tools</div>
            <div className="header__bottombar__buttons__button">Extension</div>
            <div className="header__bottombar__buttons__button">Help</div>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={handleModalClose}>
        <ShareModalContent />
      </Modal>
    </header>
  );
};

export default Header;
