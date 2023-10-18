import { MdMovieFilter } from "react-icons/md";
// import { FiDownload } from "react-icons/fi";
import "./courseCard.css";

const CourseCard = ({ courseData }) => {
  const { name, description, link } = courseData;
  return (
    <article className="course">
      <MdMovieFilter className="course__icon" />
      <div className="course__line"></div>
      <h4 className="course__title">{name}</h4>
      <p className="course__description">{description}</p>
      {/* <a href={link} className="course__download" target="blank">
        <FiDownload />
      </a> */}
    </article>
  );
};

export default CourseCard;
