import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";


function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials