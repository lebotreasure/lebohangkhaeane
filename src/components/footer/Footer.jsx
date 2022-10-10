import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href='#' className='footer_logo'>LEBO</a>

      <ul className='permalinks'>
        {/* eslint-disable-next-line */}
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com' target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; LEBO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
