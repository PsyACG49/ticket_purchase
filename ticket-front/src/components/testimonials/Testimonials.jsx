import TestimonialCard from "../testimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import IMG from "../../assets/img4.jpg";
import "./testimonials.css";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="section__testimonials">
      <h3 className="testimonials__title">
        <b className="testimonials__title-2">NUESTROS</b> TESTIMONIOS
      </h3>
      <p className="testimonials__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="container__testimonials">
        <div className="testimonials__slider">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="slider__container"
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="testimonials__image">
          <img
            src={IMG}
            alt="tecladista tocando con iluminacion amarilla"
            className="image__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;