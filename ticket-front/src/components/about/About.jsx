import IMG from "../../assets/img3.jpg";

import "./about.css";

const About = () => {
  return (
    <section className="section__about">
      <div className="about__info">
        <h3 className="info__title">!Un poco de Salo Academy!</h3>
        <p className="info__text">
          Salo Loyo es un destacado tecladista y músico mexicano con una carrera
          excepcional en la industria musical. Originario de Ciudad de México,
          Salo Loyo proviene de una destacada familia de músicos, los ❝Loyo❞,
          donde la música fluye en sus raíces. Comenzó su propia trayectoria en
          la década de 1980 y a lo largo de los años, ha participado en
          innumerables proyectos y colaboraciones con algunos de los artistas
          más influyentes de la música latina, incluyendo notoriamente su
          destacada contribución como tecladista en las giras y grabaciones de
          Luis Miguel, uno de los iconos más importantes de la música en
          español. Su destreza musical y habilidad para adaptarse a diversos
          géneros lo han convertido en un músico altamente solicitado en la
          industria. Reconocido por su compromiso con la excelencia musical y su
          visión de la música como forma de expresión universal, Salo Loyo sigue
          siendo una figura fundamental en la música latina contemporánea,
          inspirando a músicos y amantes de la música en todo el mundo.
        </p>
      </div>
      <div className="about__image">
        <img className="image__img" src={IMG} alt="tecladista de espaldas" />
      </div>
    </section>
  );
};

export default About;
