import React, { useState } from 'react'
import TextEditor from '../TextEditor/TextEditor'
import "./MainContent.scss"
import Sidebar from '../Sidebar/Sidebar'

// A component wrapper for text editor and the sidebar.

const MainContent = () => {
  const [toggleOpen,setToggleOpen] = useState(false);
  const handletoggleAriaExpanded = () =>{                           // function to toggle the sidebar open close
      setToggleOpen(prev=>!prev)
  }
  return (
    <div className='maincontent'>
        <TextEditor toggleOpen={toggleOpen}/>
        <Sidebar toggleOpen={toggleOpen} handletoggleAriaExpanded={handletoggleAriaExpanded}/>
    </div>
  )
}

export default MainContent