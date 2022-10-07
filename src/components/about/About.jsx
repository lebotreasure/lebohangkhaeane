import React from 'react';
import './about.css';
import ME from '../../assets/myimage.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt='About Me' />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_card_icon' />
                <h5>Experience</h5>
                <small>1+ years</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_card_icon' />
                <h5>Clients</h5>
                <small>20+ clients</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_card_icon' />
                <h5>Projects</h5>
                <small>10+ projects</small>
              </article>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam animi dolorum, ad ipsa eius reprehenderit fugit optio necessitatibus harum dolorem iste corrupti nam amet debitis, quae quas cumque vitae ipsam?</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About