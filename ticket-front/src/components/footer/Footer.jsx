import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import LOGOFULL from "../../assets/salo-logo-full.png";
import "./footer.css";

const Footer = () => {
  return (
    <section className="section__footer">
      <div className="footer__top">
        <img src={LOGOFULL} alt="logotipo Salo Loyo" className="top__logo" />
        <div className="top__colum">
          <h3 className="colum__title">Contacto</h3>
          <ul className="colum__list">
            <li className="list__item">correo@correo.com</li>
            <li className="list__item">55 55000000</li>
          </ul>
        </div>
        <div className="top__colum">
          <h3 className="colum__title">FAQs</h3>
          <ul className="colum__list">
            <li className="list__item">Privacidad</li>
            <li className="list__item">Terminos</li>
          </ul>
        </div>
        <div className="top__colum">
          <h3 className="colum__title">Redes</h3>
          <div className="colum__socials">
            <a href="#" className="socials__item" target="blank">
              <FaFacebookSquare />
            </a>

            <a href="#" className="socials__item" target="blank">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__down">
        <p>© Copyright saloloyo.com</p>
      </div>
    </section>
  );
};

export default Footer;
