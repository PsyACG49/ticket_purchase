import { TbMessage2Heart } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

import "./testimonialcard.css";

const TestimonialCard = ({ testimonialData }) => {
  const { avatar, text, name } = testimonialData;
  return (
    <article className="cardTest">
      <img src={avatar} alt="usuario posando" className="cardTest__image" />
      <TbMessage2Heart className="cardTest__icon" />
      <p className="cardTest__text">{text}</p>

      <div className="cardTest__sec">
        <p className="sec__useName">
          <i>{name}</i>
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
