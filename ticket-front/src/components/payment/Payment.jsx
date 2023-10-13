import { usePayment } from "../../hooks/usePayment";

import "./payment.css";

const Payment = () => {
  const {
    form,
    location,
    dates,
    handleSubmit,
    handleChange,
    handleMore,
    handleless,
  } = usePayment();

  return (
    <section className="section__ticketPurchase">
      <div className="container__ticketPurchase">
        <div className="ticketPurchase__image">
          <img
            src="https://i.ibb.co/LJjBLKt/img6.jpg"
            alt="tecladista fondo luz azul"
            className="image__img"
          />
        </div>
        <h2 className="ticketPurchase__title">
          <i className="ticketPurchase__title-2">Selecciona tu </i>
          MASTERCLASS
        </h2>
        <form className="ticketPurchase__form" onSubmit={handleSubmit}>
          <div className="form__section">
            <label htmlFor="nombres">
              Nombre(s):
              <br />
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={form.nombres}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="apellido">
              Apellido:
              <br />
              <input
                type="text"
                id="nombre"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form__section">
            <label htmlFor="locacion">
              Locacion:
              <br />
              <select
                name="locacion"
                id="locacion"
                value={form.locacion}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                {location?.map((el, i) => (
                  <option key={i} value={el.location}>
                    {el.location}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="dia">
              Dia:
              <br />
              <select
                name="dia"
                id="dia"
                value={form.dia}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                {dates?.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form__section">
            <label htmlFor="correo">
              Correo:
              <br />
              <input
                type="text"
                id="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="telefono">
              Telefono:
              <br />
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form__section">
            <div className="form__counter">
              <span className="counter__title">Cantidad:</span>
              <div className="counter__container">
                <div className="counter__less" onClick={handleless}>
                  <span>-</span>
                </div>
                <span className="counter__count">{form.cantidad}</span>
                <div className="counter__more" onClick={handleMore}>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="form__price">
              <span className="price__cost">{`Costo: $${form.price}`}</span>
              <span className="price__total">{`Total: $${
                form.price * form.cantidad
              }`}</span>
            </div>
          </div>

          <button
            type="submit"
            className="form__btn"
            disabled={form.cantidad > 0 ? false : true}
          >
            Pagar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
