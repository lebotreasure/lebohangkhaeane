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
                <small>10+ clients</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_card_icon' />
                <h5>Projects</h5>
                <small>5+ projects</small>
              </article>
            </div>
            <p>I am a motivated individual with a Bachelor’s Degree in Information Technology. I’m also a good listener and observer. I make it a point to know all that
I can about my job and responsibilities as well as the people that I work with. I enjoy working as part of a team and collaborating with associates to
achieve shared goals.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About
