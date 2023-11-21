import React from 'react';
import './Nav.css';
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { useState } from 'react';


function Nav() {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#'? 'active':''} onClick={() => setActiveNav('#')}><IoIosHome /></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About'? 'active':''} ><FaUser /></a>
      <a href='#Portfolio' onClick={() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio'? 'active':''}><MdWork /></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact'? 'active':''}><LuMessagesSquare /></a>
    </nav>
  )
}

export default Nav