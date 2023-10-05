import CourseCard from "../courseCard/CourseCard";
import { getCourses } from "../../services/courses";
import { useFetchData } from "../../hooks/useFetchData";

import IMG from "../../assets/ilustration.svg";
import LOADER from "../../assets/loader.svg";
import "./courses.css";

const Courses = () => {
  const { data, loading, error } = useFetchData(getCourses);

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
          {loading ? (
            <img src={LOADER} alt="loader" />
          ) : error ? (
            <p className="errorMessage">Content not found</p>
          ) : (
            data.map((el) => <CourseCard key={el.id} courseData={el} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
