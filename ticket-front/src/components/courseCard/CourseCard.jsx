import { FaMusic } from "react-icons/fa";
import "./courseCard.css";

const CourseCard = () => {
  return (
    <article className="course">
      <FaMusic className="course__icon" />
      <div className="course__line"></div>
      <h4 className="course__title">TITLE</h4>
      <p className="course__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
    </article>
  );
};

export default CourseCard;
