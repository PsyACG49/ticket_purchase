import { useState } from "react";

import IMG from "../../assets/img6.jpg";

import "./payment.css";

const initialForm = {
  nombres: "",
  apellido: "",
  locacion: "",
  dia: "",
  correo: "",
  telefono: "",
  cantidad: 0,
  price: 0,
};

const data = [
  {
    locacion: "Quintana Roo",
    dias: ["20-mar", "21-mar", "22-mar"],
    price: 2000,
  },
  {
    locacion: "Aguascalientes",
    dias: ["20-abr", "21-abr", "22-abr"],
    price: 2000,
  },
  {
    locacion: "Guadalajara",
    dias: ["20-sep", "21-sep", "22-sep"],
    price: 2500,
  },
  {
    locacion: "Merida",
    dias: ["20-ene", "21-ene", "22-ene"],
    price: 2000,
  },
];

const Payment = () => {
  const [form, setForm] = useState(initialForm);
  const [dates, setDates] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setForm(initialForm);
    window.location.href = data.url;
  };

  const handleChange = (e) => {
    if (e.target.name === "locacion") {
      const currentDates = data.find((el) => el.locacion === e.target.value);
      console.log(currentDates);
      setDates(currentDates.dias);
      setForm({
        ...form,
        price: currentDates.price,
        [e.target.name]: e.target.value,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleless = () => {
    if (form.cantidad >= 1) {
      setForm({
        ...form,
        cantidad: form.cantidad - 1,
      });
    }
  };

  const handleMore = () => {
    setForm({
      ...form,
      cantidad: form.cantidad + 1,
    });
  };

  return (
    <section className="section__ticketPurchase">
      <div className="container__ticketPurchase">
        <div className="ticketPurchase__image">
          <img
            src={IMG}
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
                {data?.map((el, i) => (
                  <option key={i} value={el.locacion}>
                    {el.locacion}
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
