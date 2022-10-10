import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar.png';

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Sbusiso Jiyane',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae eveniet, dolorum autem repellendus iure distinctio. Officiis placeat pariatur dolores delectus nihil, esse deleniti, quod expedita fugiat, sint necessitatibus alias!'
  },
  {
    avatar: AVTR1,
    name: 'Obakeng Phikiso',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae eveniet, dolorum autem repellendus iure distinctio. Officiis placeat pariatur dolores delectus nihil, esse deleniti, quod expedita fugiat, sint necessitatibus alias!'
  },
  {
    avatar: AVTR1,
    name: 'Lulu Nkosapantsi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae eveniet, dolorum autem repellendus iure distinctio. Officiis placeat pariatur dolores delectus nihil, esse deleniti, quod expedita fugiat, sint necessitatibus alias!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from References</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials