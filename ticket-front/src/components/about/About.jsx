import IMG from "../../assets/img3.jpg";

import "./about.css";

const About = () => {
  return (
    <section className="section__about">
      <div className="about__info">
        <h3 className="info__title">!Un poco de Salo Academy!</h3>
        <p className="info__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          et. Veniam minus consectetur error illo fuga laborum officiis ea
          inventore molestias voluptate nisi earum mollitia praesentium autem,
          asperiores ullam quia? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita natus amet illo doloribus modi sit vel
          possimus ullam quod, corporis aliquid et dolorum culpa iure, quia
          reiciendis blanditiis minus soluta?
        </p>
      </div>
      <div className="about__image">
        <img className="image__img" src={IMG} alt="tecladista de espaldas" />
      </div>
    </section>
  );
};

export default About;
