import React, { useState } from 'react'
import TextEditor from '../TextEditor/TextEditor'
import "./MainContent.scss"
import Sidebar from '../Sidebar/Sidebar'

const MainContent = () => {
  const [toggleOpen,setToggleOpen] = useState(false);
  const handletoggleAriaExpanded = () =>{
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