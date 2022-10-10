import React from 'react';
import './services.css';
import { BsCheck } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
    <div className="container services_container">
      <article className='service'>
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          {/* END OF UI/UX */}
        </ul>
      </article>

      <article className='service'>
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem ipsum
            </p>
          </li>
          {/* END OF Web development */}
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Services