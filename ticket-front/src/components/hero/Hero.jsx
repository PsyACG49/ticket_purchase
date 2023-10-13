import SALO from "../../assets/saloloyo.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="section__hero">
      <div className="container__hero">
        <div className="hero__content">
          <div className="content__image">
            <img
              className="image__img"
              src={SALO}
              alt="Salo Loyo con teclados"
            />
          </div>
          <h2 className="content__text">Music Academy</h2>
        </div>
      </div>
      <img
        src={"https://i.ibb.co/tDfDG83/montage7.jpg"}
        alt="teclado musical"
        className="hero__image"
      />
    </section>
  );
};

export default Hero;
