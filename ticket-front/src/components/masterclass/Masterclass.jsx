import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import LocationCard from "../locationCard/LocationCard";
import { getMasterclasses } from "../../services/masterclasses";

import LOADER from "../../assets/loader.svg";
import IMG from "../../assets/teaching.svg";

import "./masterclass.css";

const Masterclass = () => {
  const { data, loading, error } = useFetchData(getMasterclasses);
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
          {loading ? (
            <img src={LOADER} alt="loader" />
          ) : error ? (
            <p className="errorMessage">Content not found</p>
          ) : (
            data.map((el) => <LocationCard key={el.id} dataLocation={el} />)
          )}
        </div>

        <div className="masterclass__get">
          <span className="get__registertxt">
            No lo pienses mas, registrate y paga tu masterclass{" "}
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
