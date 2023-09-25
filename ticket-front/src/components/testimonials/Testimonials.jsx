import { TbMessage2Heart } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

import USER from "../../assets/user.jpg";
import IMG from "../../assets/img4.jpg";

import "./testimonials.css";

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
          <article className="cardTest">
            <img src={USER} alt="usuario posando" className="cardTest__image" />
            <TbMessage2Heart className="cardTest__icon" />
            <p className="cardTest__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              dolores, sapiente saepe repellendus id
            </p>

            <div className="cardTest__sec">
              <p className="sec__useName">
                <i>User Name</i>
              </p>
              <div className="sec__ranking">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </article>
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
