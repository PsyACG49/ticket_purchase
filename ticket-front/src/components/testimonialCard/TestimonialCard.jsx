import { TbMessage2Heart } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

import USER from "../../assets/user.jpg";

import "./testimonialcard.css";

const TestimonialCard = () => {
  return (
    <article className="cardTest">
      <img src={USER} alt="usuario posando" className="cardTest__image" />
      <TbMessage2Heart className="cardTest__icon" />
      <p className="cardTest__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolores,
        sapiente saepe repellendus id
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
  );
};

export default TestimonialCard;
