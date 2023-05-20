import React from 'react'
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__icons">
            <div> 
                <a href="https://calendar.google.com/calendar/u/0/r" target='_blank'>
                <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="Calendar" />
                </a>
            </div>
            <div>
                <a href="https://keep.google.com/u/0/" target='_blank'>
                <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="Keep" />
                </a>
            </div>
            <div>
                <a href="https://tasksboard.com/" target='_blank'>
                <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="Tasks" />
                </a>
            </div>
            <div>
                <a href="https://contacts.google.com/" target='_blank'>
                <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="Contacts" />
                </a>
            </div>

            <div id="divider" /> 
         
            <div>
                <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="Get Add-ons" />
            </div>
        </div>
    </div>
  )
}

export default Sidebar