
import { useState } from "react";
// import NavContact from "./NavContact";
// import { a } from "react-router-dom";

const HamburguerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [hambMenuActive, setHambMenuActive] = useState(false);

  const handleMenu = (ev) => {
    ev.preventDefault();
    setToggle(!toggle);
    setHambMenuActive(!hambMenuActive);
  };
  const handleClick = () => {
    setToggle(!toggle);
    setHambMenuActive(!hambMenuActive);
  };

  return (
    <>
      <a className="navbar" href="menu">
        <div
          className={`navbar__icon ${hambMenuActive ? "active" : ""}`}
          onClick={handleMenu}
        >
          <span className={`navbar__line--1 `} id="1"></span>
          <span className={`navbar__line--2 `}></span>
          <span className={`navbar__line--3 `}></span>
        </div>
      </a>
      {toggle && (
        <section className="index animate__animated animate__fadeInLeft">
          <div className="index__container">
            <ul className="index__items ">
              <li>
                <a
                  to="/"
                  target="_parent"
                  className="index__a"
                  onClick={handleClick}
                >
                  ¿Quienes somos?
                </a>
              </li>
              <li>
                <a
                  to="/about"
                  target="_parent"
                  className="index__a "
                  onClick={handleClick}
                >
                  ¿sabias que...?
                </a>
              </li>
              <li>
                <a
                  to="/projects"
                  target="_parent"
                  className="index__a"
                  onClick={handleClick}
                >
                  Estudio de mercado
                </a>
              </li>
              <li>
                <a
                  to="/projects"
                  target="_parent"
                  className="index__a"
                  onClick={handleClick}
                >
                  Ayuda
                </a>
              </li>
              <li>
                <a
                  to="/contact"
                  target="_parent"
                  className="index__a"
                  onClick={handleClick}
                >
                  contacto
                </a>
              </li>
            </ul>
           
          </div>
        </section>
      )}
    </>
  );
};

export default HamburguerMenu;