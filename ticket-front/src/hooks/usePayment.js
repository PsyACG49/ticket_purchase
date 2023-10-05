import { useState } from "react";
import { getMasterclasses } from "../services/masterclasses";
import { manageDataLocations } from "../utils/form";
import { useFetchData } from "./useFetchData";
import { startPayment } from "../services/payment";

const initialForm = {
  nombres: "",
  apellido: "",
  locacion: "",
  dia: "",
  correo: "",
  telefono: "",
  cantidad: 0,
  price: 0,
  address: "",
  horario: "",
};

export const usePayment = () => {
  const { data } = useFetchData(getMasterclasses);
  const location = manageDataLocations(data);
  const [form, setForm] = useState(initialForm);
  const [dates, setDates] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const objPay = await startPayment(form);
    setForm(initialForm);
    window.location.href = objPay.url;
  };

  const handleChange = (e) => {
    if (e.target.name === "locacion") {
      const currentDates = location.find(
        (el) => el.location === e.target.value
      );
      setDates(currentDates.info.map((el) => el.date));
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "dia") {
      let currentPrice = location
        .find((el) => el.location === form.locacion)
        .info.find((el) => el.date === e.target.value);
      setForm({
        ...form,
        price: currentPrice.price,
        address: currentPrice.address,
        horario: currentPrice.schedule,
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
  return {
    form,
    location,
    dates,
    handleSubmit,
    handleChange,
    handleMore,
    handleless,
  };
};
