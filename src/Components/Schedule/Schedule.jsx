import React from 'react'
import { Dropdown } from 'flowbite-react'
import { BsThreeDots } from "react-icons/bs";
import './Schedule.css'


function Schedule() {
  return (
    <div className='announcement'>
    <div className="announcement-top">
      <h3>Upcoming Schedule</h3>
      <p>Today, 13 Sep 2021 </p> 
    </div>
    <p className='upper-para'>Priority</p>
    <div className='pinned'>
      <div className="content">
          <h3>Review candidate application</h3>
          <p>Today - 11.30 AM</p>
      </div>
        <div className="ddd">
        <BsThreeDots />
        </div>
    </div>
    <p className='upper-para'>Other</p>
    <div className='pinned'>
      <div className="content">
          <h3>Interview with candidates</h3>
          <p>Today - 10.30 AM</p>
      </div>
        <div className="ddd">
        <BsThreeDots />
        </div>
    </div>
    <div className='pinned'>
      <div className="content">
          <h3>Short meeting with product designer from It Department</h3>
          <p>Today - 09.15 AM</p>
      </div>
        <div className="ddd">
        <BsThreeDots />
        </div>
    </div>
  </div>
  )
}

export default Schedule
