import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import LOGO from "../../assets/salo-logo-bg.png";

import "./header.css";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="section__header">
      <div className="container__header">
        <Link to="/" className="header__logo">
          <img className="logo__image" src={LOGO} alt="logotipo Salo Loyo" />
        </Link>
        <nav className={`header__nav ${showMenu === false ? "showMenu" : ""}`}>
          <ul className="nav__list">
            <li className="list__item">
              <Link to="masterclass" className="item__link">
                Masterclass
              </Link>
            </li>
            <li className="list__item">
              <Link to="checkout" className="item__link">
                Tickets
              </Link>
            </li>
          </ul>
          <div className="nav__socilas">
            <a href="#" className="socials__item" target="blank">
              <FaFacebookSquare />
            </a>

            <a href="#" className="socials__item" target="blank">
              <FaInstagramSquare />
            </a>
          </div>
        </nav>
        <div className="header__btnMenu" onClick={() => setShowMenu(!showMenu)}>
          {showMenu === false ? <AiOutlineClose /> : <MdOutlineMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
