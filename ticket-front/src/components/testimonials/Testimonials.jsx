import TestimonialCard from "../testimonialCard/TestimonialCard";
import { getTestimonials } from "../../services/testimonials";
import { useFetchData } from "../../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import LOADER from "../../assets/loader.svg";
import IMG from "../../assets/img4.jpg";
import "./testimonials.css";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const { data, loading, error } = useFetchData(getTestimonials);

  return (
    <section className="section__testimonials">
      <h3 className="testimonials__title">
        <b className="testimonials__title-2">NUESTROS</b> TESTIMONIOS
      </h3>
      <p className="testimonials__subtitle">
        Conoce las experincia y opinion de algunos usuarios
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
            {loading ? (
              <img src={LOADER} alt="loader" />
            ) : error ? (
              <p className="errorMessage">Content not found</p>
            ) : (
              data.map((el) => (
                <SwiperSlide key={el.id}>
                  <TestimonialCard testimonialData={el} />
                </SwiperSlide>
              ))
            )}
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
