import { FaMapLocationDot } from "react-icons/fa6";
import "./locationCard.css";

const LocationCard = () => {
  return (
    <article className="schedule">
      <FaMapLocationDot className="schedule__icon" />
      <p className="schedule__state">
        <i>MONTERREY</i>
      </p>
      <p className="schedule__date">12/10/22</p>
      <p className="schedule__address">torreto 44 col. Alvaro obregon</p>
    </article>
  );
};

export default LocationCard;
