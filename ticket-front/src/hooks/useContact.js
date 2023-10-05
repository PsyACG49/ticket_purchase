import { useState } from "react";
import { sendEmail } from "../services/email";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const useContact = () => {
  const [form, setForm] = useState(initialForm);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const resEmail = await sendEmail(form);
      if (resEmail.success) {
        setLoader(false);
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 2000);
      }
    } catch (error) {
      setLoader(false);
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 2000);
    } finally {
      setForm(initialForm);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return {
    form,
    loader,
    message,
    error,
    handleChange,
    handleSubmit,
  };
};
