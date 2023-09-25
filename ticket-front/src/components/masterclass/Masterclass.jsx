import { FaMapLocationDot } from "react-icons/fa6";
import IMG from "../../assets/teaching.svg";

import "./masterclass.css";
import { Link } from "react-router-dom";

const Masterclass = () => {
  return (
    <section className="section__masterclass">
      <div className="masterclass__hero">
        <h3 className="hero__title">
          Nuestra <b className="hero__title-2">Masterclass</b>
        </h3>
      </div>

      <div className="container__masterclass">
        <div className="masterclass__image">
          <img src={IMG} alt="persona dando clase" className="image__img" />
        </div>
        <p className="masterclasss__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          asperiores repudiandae at veniam assumenda. Voluptatum non cum atque!
          Provident, corporis explicabo facilis cum quibusdam consectetur
          eligendi laudantium? Vel, ducimus laudantium. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quam officiis omnis optio
          architecto aspernatur quia odit beatae, ratione vero porro, officia
          animi delectus nesciunt natus harum iure modi sint ipsum.
        </p>
      </div>

      <div className="masterclasss__schedules">
        <h3 className="schedules__title">
          <i>
            <b className="schedules__title-2">FECHAS Y</b> LOCACIONES
          </i>
        </h3>
        <div className="schedules__list">
          <article className="schedule">
            <FaMapLocationDot className="schedule__icon" />
            <p className="schedule__state">
              <i>MONTERREY</i>
            </p>
            <p className="schedule__date">12/10/22</p>
            <p className="schedule__address">torreto 44 col. Alvaro obregon</p>
          </article>
          <article className="schedule">
            <FaMapLocationDot className="schedule__icon" />
            <p className="schedule__state">
              <i>MONTERREY</i>
            </p>
            <p className="schedule__date">12/10/22</p>
            <p className="schedule__address">torreto 44 col. Alvaro obregon</p>
          </article>
          <article className="schedule">
            <FaMapLocationDot className="schedule__icon" />
            <p className="schedule__state">
              <i>MONTERREY</i>
            </p>
            <p className="schedule__date">12/10/22</p>
            <p className="schedule__address">torreto 44 col. Alvaro obregon</p>
          </article>
          <article className="schedule">
            <FaMapLocationDot className="schedule__icon" />
            <p className="schedule__state">
              <i>MONTERREY</i>
            </p>
            <p className="schedule__date">12/10/22</p>
            <p className="schedule__address">torreto 44 col. Alvaro obregon</p>
          </article>
        </div>

        <div className="masterclass__get">
          <span className="get__registertxt">
            No lo pienses mas, paga y registrate a tu masterclass{" "}
          </span>
          <Link to="/checkout" className="get__btn">
            OBTENER
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
