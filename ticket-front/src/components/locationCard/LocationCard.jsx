import { FaMapLocationDot } from "react-icons/fa6";
import "./locationCard.css";

const LocationCard = ({ dataLocation }) => {
  const { location, date, price, active } = dataLocation;
  return (
    <article className="schedule">
      <FaMapLocationDot className="schedule__icon" />
      <p className="schedule__state">
        <i>{location.toUpperCase()}</i>
      </p>
      {active ? (
        <div>
          <p className="schedule__address">{`$ ${price}.00`}</p>
          <p className="schedule__date">{date}</p>
        </div>
      ) : (
        <p className="schedule__soon">Proximamente</p>
      )}
    </article>
  );
};

export default LocationCard;
