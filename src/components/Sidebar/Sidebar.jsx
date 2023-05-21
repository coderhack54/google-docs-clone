import React, { useState } from "react";
import "./Sidebar.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// This is the sidebar component on the right side which contains links to other apps

const Sidebar = ({ toggleOpen, handletoggleAriaExpanded }) => {
  return (
    <div className="sidebar" aria-expanded={toggleOpen}>
      <div className="sidebar__icons">
        <div className="sidebar__icons__icon">
          <a
            href="https://calendar.google.com/calendar/u/0/r"
            target="_blank"
            title="Calendar"
          >
            <img
              src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
              alt="Calendar"
            />
          </a>
        </div>
        <div className="sidebar__icons__icon">
          <a href="https://keep.google.com/u/0/" target="_blank" title="Keep">
            <img
              src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
              alt="Keep"
            />
          </a>
        </div>
        <div className="sidebar__icons__icon">
          <a href="https://tasksboard.com/" target="_blank" title="Tasks">
            <img
              src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
              alt="Tasks"
            />
          </a>
        </div>
        <div className="sidebar__icons__icon">
          <a
            href="https://contacts.google.com/"
            target="_blank"
            title="Contacts"
          >
            <img
              src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
              alt="Contacts"
            />
          </a>
        </div>

        <div id="divider" />

        <div className="sidebar__icons__icon" title="Get Add-ons">
          <a href="">
            <img
              src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png"
              alt="Get Add-ons"
            />
          </a>
        </div>
      </div>
      <div className={`sidebar__toggle`}>
        <button onClick={handletoggleAriaExpanded} title="Hide side panel">
          <ArrowForwardIosIcon
            className={toggleOpen ? "icon-close" : "icon-open"}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
