import React from 'react'
import './testimonial.css'
import TestiImg1 from '../../assets/img_photo2.png'
import TestiImg2 from '../../assets/img_photo2.png'
import TestiImg3 from '../../assets/img_photo3.png'
import ImgStar from '../../assets/Rate.png'
// import Swiper core and required modules
import { Navigation, Pagination, } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data=[
  {
    icon:ImgStar,
    image:TestiImg1,
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    deks:'John Dee 32, Bromo',
  },
  {
    icon:ImgStar,
    image:TestiImg2,
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo. Quo exercitationem unde nostrum, dignissimos aperiam asperiores totam aliquid neque',
    deks:'John Dee 32, Bromo',
  },
  {
    icon:ImgStar,
    image:TestiImg3,
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo. Quo exercitationem unde nostrum, dignissimos aperiam asperiores totam aliquid neque',
    deks:'John Dee 32, Bromo',
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h2>Testimonial</h2>
      <p>Berbagai review positif dari para pelanggan kami</p>

      {/* <div className="container testimonial__items">
        <div className="testimonial__item">
          <img src={ImgStar} alt="" />
          <div className="testimonial__item1">
            <img src={TestiImg1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo. Quo exercitationem unde nostrum, dignissimos aperiam asperiores totam aliquid neque?</p>
          </div>
          <p>John Dee 32, Bromo</p>
        </div>
        <div className="testimonial__item">
          <img src={ImgStar} alt="" />
          <div className="testimonial__item1">
            <img src={TestiImg2} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo. Quo exercitationem unde nostrum, dignissimos aperiam asperiores totam aliquid neque?</p>
          </div>
          <p>John Dee 32, Bromo</p>
        </div>
        <div className="testimonial__item">
          <img src={ImgStar} alt="" />
          <div className="testimonial__item1">
            <img src={TestiImg3} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, illo. Quo exercitationem unde nostrum, dignissimos aperiam asperiores totam aliquid neque?</p>
          </div>
          <p>John Dee 32, Bromo</p>
        </div>
      </div> */}
      <Swiper className="container testimonials__container"
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // //  scrollbar={{ draggable: true }}
          //  onSwiper={(swiper) => console.log(swiper)}
          //  onSlideChange={() => console.log('slide change')}
          >
        {
          data.map(({icon,image,review,deks}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial__slide'>
                <div>
                  <div className="client__icon">
                    <img src={icon} alt="Avatar One" />
                  </div>
                </div>
               
               <div className="client__testimonial">
                  <div className="client__image">
                    <img src={image} alt="Avatar One" />
                  </div>  
                    <h5 className='client__review'>{review}</h5>
               </div>
                  <small className='client__deks'>{deks}</small>
              
            </SwiperSlide>
            )
          })
        }
    </Swiper>
    </section>
  )
}
export default Testimonial