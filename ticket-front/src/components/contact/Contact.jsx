import { useContact } from "../../hooks/useContact";

import LOADER from "../../assets/loader.svg";

import "./contact.css";

const Contact = () => {
  const { form, loader, message, error, handleChange, handleSubmit } =
    useContact();

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
            <img
              src="https://i.ibb.co/LrYL705/montage3.png"
              alt="teclado musical"
              className="image__img"
            />
          </div>
          <form className="main__form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="correo@correo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="phone">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+55 55000000"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="message">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="mensaje"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button className="form__btn">Enviar</button>
          </form>
        </div>
        <div className="contact__success">
          {error && <p>Not message sended</p>}
          {message && <p>Mensaje Enviado</p>}
          {loader && <img src={LOADER} alt="loader blanco" />}
        </div>
      </div>
    </section>
  );
};

export default Contact;
