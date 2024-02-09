import React from 'react'
import './Sidebar.css'
import Vasitum from '../../assets/Vasitum.jpeg'
import { TbLayoutDashboard } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa6";
import { RiCalendarEventFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <img src={Vasitum} alt="Company logo" height="65px" width="130px" />
            </div>
            <div className='menu-heading'>MAIN MENU</div>

            <div className='menu'>
                <ul className='menu-list'>
                    <li> <TbLayoutDashboard /> <a href="">Dashboard</a></li>
                    <li> <FaUserPlus /> <a href="">Recruitment</a></li>
                    <li> <RiCalendarEventFill />  <a href="">Scheldule</a></li>
                    <li> <PiUsersThreeFill /> <a href="">Employee</a></li>
                    <li> <FaBuilding /> <a href="">Department</a></li>
                    <p>Other</p>
                    <div className='other'>
                        <ul className='other-list'>
                            <li> <BiSupport /> <a href="">Support</a></li>
                            <li><IoSettings /><a href="">Setting</a></li>
                        </ul>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
