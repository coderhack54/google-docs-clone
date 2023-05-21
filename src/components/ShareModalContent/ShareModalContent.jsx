import React from 'react'
import "./ShareModalContent.scss"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import profilelogo from "../../assets/images/account_logo.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import Button from '../Button/Button';

const ShareModalContent = () => {
    const muiIconStyle = { color: "#1f1f1f", height: "20px", width: "20px" };
  return (
    <div className='sharecontent'>
        <div className="sharecontent__header">
            <h2>Share "Bhhhjgghujhgifd"</h2>
            <div>
                <span><HelpOutlineIcon  style={muiIconStyle}/></span>
                <span><SettingsOutlinedIcon style={muiIconStyle}/></span>
            </div>
        </div>
        <div className="sharecontent__input">
            <input type="text" placeholder='Add people and Groups'/>
        </div>
        <div className="sharecontent__access__sec">
          <div className='title'>People with access</div>
          <div className="sharecontent__access">
            <div className="wrapper">
            <div className='logo'>
                <span>
                    <img src={profilelogo} alt="" />
                </span>
            </div>
            <div>
                <strong>anmol srivastava (you)</strong>
                <p>anmolsrivastava0102@gmail.com</p>
            </div>
            </div>
            <div className='right'>
                Owner
            </div>
          </div>
        </div>
        <div className="sharecontent__access__sec second">
          <div className='title'>General access</div>
          <div className="sharecontent__access">
            <div className="wrapper">
            <div className='logo'>
                <span>
                  <LockOutlinedIcon />
                </span>
            </div>
            <div>
                <strong>Restricted</strong>
                <p>Only people with access can open with the link</p>
            </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="sharecontent__buttons">
            <div>
            <Button className="copybtn">
                <span>
                    <InsertLinkOutlinedIcon />
                </span>
                    Copy link
            </Button>
            </div>
            <div>
            <Button className="donebtn">        
                Done
            </Button>
            </div>
        </div>
    </div>
  )
}

export default ShareModalContent