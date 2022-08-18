import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

import AVTR3 from '../../assets/avatar3.jpg'

import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar :AVTR1,
    title : 'Angelina jojo',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos nisi hic vero. Facilis necessitatibus minima laborum reiciendis molestiae recusandae facere, voluptatum exercitationem repellendus eos et est voluptatem labore debitis.',
    
    
  },
  {
    avatar :AVTR2,
    title : 'Angelina jojo',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos nisi hic vero. Facilis necessitatibus minima laborum reiciendis molestiae recusandae facere, voluptatum exercitationem repellendus eos et est voluptatem labore debitis.',
    
    
  },
  {
    avatar :AVTR3,
    title : 'Angelina jojo',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos nisi hic vero. Facilis necessitatibus minima laborum reiciendis molestiae recusandae facere, voluptatum exercitationem repellendus eos et est voluptatem labore debitis.',
    
    
  },
  {
    avatar :AVTR4,
    title: 'Angelina jojo',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos nisi hic vero. Facilis necessitatibus minima laborum reiciendis molestiae recusandae facere, voluptatum exercitationem repellendus eos et est voluptatem labore debitis.',
    
    
  },
  
]

function testimonials() {
  return (
    <section id='testimonials'>
      <div className='testimonials__heading'>
      <h1><b>Testimonials</b></h1>
</div>


      <Swiper className="container testimonials__container"
    
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
   
       
        {
          data.map(({avatar,title,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
             </div>
             <h5 className='client__name'>{title}</h5>
                <small className='client__review'>{review}
                </small>
                </SwiperSlide>
            )
            })
        }

          

          </Swiper>
    </section>
  )
}

export default testimonials