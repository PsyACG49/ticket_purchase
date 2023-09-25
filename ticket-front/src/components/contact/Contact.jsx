import LOADER from "../../assets/loader.svg";
import IMG from "../../assets/img1.jpg";

import "./contact.css";

const Contact = () => {
  return (
    <section className="section__contact">
      <div className="container__contact">
        <h3 className="contact__title">
          <i>CONTACTANOS</i>
        </h3>
        <p className="contact__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="contact__main">
          <div className="main__image">
            <img src={IMG} alt="teclado musical" className="image__img" />
          </div>
          <form className="main__form">
            <label htmlFor="name">
              <input type="text" name="name" id="name" placeholder="Nombre" />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="correo@correo.com"
              />
            </label>
            <label htmlFor="phone">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+55 55000000"
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="mensaje"
              ></textarea>
            </label>
            <button className="form__btn">Enviar</button>
          </form>
        </div>
        <div className="contact__success">
          <p>Mensaje Enviado</p>
          <img src={LOADER} alt="loader blanco" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
