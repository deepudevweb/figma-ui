import React from 'react'
import './Header.css'
import { VscBellDot } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Header() {
    return (
        <div className='header'>
            <div className="search-container">
                <input type="text" placeholder='Search' className='header-input' />
                <CiSearch className="search-icon" />
            </div>
            <div className="user-profile">
                <VscBellDot />
                <RiMessage2Line />
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" height="40px" width="40px" />
                <p className='user-name'>John Doe</p>
                <FaAngleDown />
            </div>
        </div>
    )
}

export default Header
