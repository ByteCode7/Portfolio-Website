import React from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
// import ME from '../../Assets/Untitled design.jpg';

function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Zeeshan Muzaffar</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me' ></div>
        

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header