import IMG from "../../assets/ilustration.svg";
import CourseCard from "../courseCard/CourseCard";
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
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default Courses;
