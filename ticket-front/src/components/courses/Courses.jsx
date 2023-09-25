import { FaMusic } from "react-icons/fa";
import IMG from "../../assets/ilustration.svg";
import "./courses.css";

const Courses = () => {
  return (
    <section className="section__courses">
      <h3 className="courses__title">
        NUESTROS <b className="courses__title-2">CURSOS</b>
      </h3>
      <p className="courses__subtitle">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="container__courses">
        <div className="courses__image">
          <img
            src={IMG}
            alt="Persona reproduciodo musica"
            className="image__img"
            loading="lazy"
          />
        </div>
        <div className="courses__list">
          <article className="course">
            <FaMusic className="course__icon" />
            <div className="course__line"></div>
            <h4 className="course__title">TITLE</h4>
            <p className="course__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </article>
          <article className="course">
            <FaMusic className="course__icon" />
            <div className="course__line"></div>
            <h4 className="course__title">TITLE</h4>
            <p className="course__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </article>
          <article className="course">
            <FaMusic className="course__icon" />
            <div className="course__line"></div>
            <h4 className="course__title">TITLE</h4>
            <p className="course__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Courses;
