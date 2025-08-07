import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const toggleMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleNavState = () => {
    const menu = toggleMenuRef.current;
    if (!menu) return;
    const isActive = menu.classList.contains("active");

    if (isActive) {
      menu.classList.remove("active");
      menu.classList.add("inactive");
    } else {
      menu.classList.remove("inactive");
      menu.classList.add("active");
    }
  };

  // Cerrar si se hace clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleMenuRef.current &&
        !toggleMenuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        toggleMenuRef.current.classList.remove("active");
        toggleMenuRef.current.classList.add("inactive");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Cerrar el menú al redimensionar si se supera el ancho de 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && toggleMenuRef.current) {
        toggleMenuRef.current.classList.remove("active");
        toggleMenuRef.current.classList.add("inactive");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <img src="/assets/icons/hoja.png" alt="Inicio" title="Inicio" />
      </Link>
      
      <nav className="links">
        <ul>
          <li>
            <NavLink to="/tres-en-raya">3 en Linea</NavLink>
          </li>
          <li>
            <NavLink to="/memoria">Memoria</NavLink>
          </li>
          <li>
            <NavLink to="/snake">Serpiente</NavLink>
          </li>
        </ul>
      </nav>

      <button
        className="toggleButton"
        id="toggle-button"
        ref={toggleButtonRef}
        onClick={toggleNavState}
      >
        ☰
      </button>

      <div className="toggleMenu inactive" ref={toggleMenuRef}>
        <ul>
          <li>
            <NavLink to="/tres-en-raya">3 en Linea</NavLink>
          </li>
          <li>
            <NavLink to="/memoria">Memoria</NavLink>
          </li>
          <li>
            <NavLink to="/snake">Serpiente</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
