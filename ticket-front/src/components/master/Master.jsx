import "./master.css";
import { Link } from "react-router-dom";

const Master = () => {
  return (
    <section className="section__master">
      <img
        src={"https://i.ibb.co/C0RcK4R/motage2.jpg"}
        alt="manos sobre uin teclado musical"
        className="master__image"
      />
      <div className="master__info">
        <h3 className="info__title">INSCRIBETE</h3>
        <h3 className="info__subtitle">Conoce nuestra proxima Masterclass</h3>
        <p className="info__text">Consulta horarios y locaciones</p>
        <Link to="masterclass" className="info__btn">
          mas informacion
        </Link>
      </div>
    </section>
  );
};

export default Master;
