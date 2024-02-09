import { Dropdown } from 'flowbite-react'
import React from 'react'
import './Announcement.css'
import { TbPinnedFilled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
function Announcemnt() {
  return (
    <div className='announcement'>
      <div className="announcement-top">
        <h3>Announcemnt</h3>
        <p>Today, 30 Sep 2021 <Dropdown /></p> 
      </div>
      <div className='pinned'>
        <div className="content">
            <h3>Outinng schedule for every department</h3>
            <p>5 Minutes ago</p>
        </div>
          <div className="pin">
          <TbPinnedFilled className='pin-icon'/>
          <BsThreeDots />
          </div>
      </div>
      <div className='pinned'>
        <div className="content">
            <h3>Meeting HR Department</h3>
            <p>5 Minutes ago</p>
        </div>
          <div className="pin">
          <TbPinnedFilled className='pin-icon'/>
          <BsThreeDots />
          </div>
      </div>
      <div className='pinned'>
        <div className="content">
            <h3>IT Department needs two more talents for UX/UI Designer position</h3>
            <p>5 Minutes ago</p>
        </div>
          <div className="pin">
          <TbPinnedFilled className='pin-icon'/>
          <BsThreeDots />
          </div>
      </div>
    </div>
  )
}

export default Announcemnt
