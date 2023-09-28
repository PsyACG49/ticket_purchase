import CourseCard from "../courseCard/CourseCard";

import COURSES from "../../utils/courses.json";
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
          {COURSES.map((el) => (
            <CourseCard key={el.id} courseData={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
