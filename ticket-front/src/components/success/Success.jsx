import { BsPatchCheckFill } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import "./success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="section__success">
      <div className="success__icon">
        <BsPatchCheckFill />
      </div>
      <h3 className="seccess__text">!Tu pago se a realizado exitosamente¡</h3>
      <span className="success__subtext">
        Nos veremos pronto en tu Masterclass
      </span>
      <Link to="/" className="success__btn">
        <IoMdArrowBack />
        <span>regresar al inicio</span>
      </Link>
    </section>
  );
};

export default Success;
