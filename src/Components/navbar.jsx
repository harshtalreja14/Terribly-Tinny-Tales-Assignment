import React from 'react'
import navImg from '../Images/TTT logo_page-0001.jpg'
import './navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><a href="/"><img className='logo' src={navImg} alt="" /></a></li>
            <li><a href="/"><button>Courses</button></a></li>
        </ul>
    </div>
  )
}

export default Navbar
