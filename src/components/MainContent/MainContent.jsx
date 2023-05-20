import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import "./MainContent.scss"
import Sidebar from '../Sidebar/Sidebar'

const MainContent = () => {
  return (
    <div className='maincontent'>
        <TextEditor />
        <Sidebar />
    </div>
  )
}

export default MainContent