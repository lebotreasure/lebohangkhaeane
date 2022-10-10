import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frondend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS/SCSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>NextJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Frondend Development</h3>
          <div className="experience_content">
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Restful API</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience