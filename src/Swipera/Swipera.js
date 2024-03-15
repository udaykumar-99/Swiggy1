import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';




import './Swipera.css'


function Swipera() {
  
  return (
      <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
        grabCursor={true}
        className='swiper image'
    >
        <SwiperSlide>
          <img src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.imgacademy.com/sites/default/files/img-bs-img-academy-2023.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp' alt='' />
        </SwiperSlide>
      
    </Swiper>
      
    </div>
  )
}

export default Swipera
