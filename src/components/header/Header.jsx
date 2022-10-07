import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from "../../assets/mynewimage.png";
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lebohang Khaeane</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        <a href='#contact' className='scroll'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header