import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Testimonial.css"

import { Pagination } from 'swiper/modules';
import Testimonialtitle from './Testimonialtitle';

const Testimonial = () => {
  return (
    <>
    <Testimonialtitle/>
     <div className="swiper-container">
     <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              
            
              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },
            
       
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
            
             
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            
    
              1440: {
                slidesPerView: 3,
                spaceBetween: 30
              }

          }}
      >
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/person_1.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/women-1.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/person_2.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/person_1.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/women-2.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide-detail">
                <div className="profile">
                    <img src="./images/person_3.jpg" alt="" />
                    <i class="fa-solid fa-quote-left"></i>

                </div>
                <div className="person-detail">
                    <p>Roger Scott</p>
                    <span>MARKETING MANAGER</span>
                </div>
            </div>
        <div className="detail">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  )
}

export default Testimonial
