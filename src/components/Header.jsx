import React, { useState } from "react";
import NavBar1 from "./NavBar1";
import "font-awesome/css/font-awesome.min.css"; // Certifique-se de que o Font Awesome está instalado
import "bootstrap/dist/css/bootstrap.min.css"; // Certifique-se de que o Bootstrap está instalado
import logopcrj from "../images/logo-pcrj-iplan-2.png"; // Atualize para o caminho correto
import fornecedor360 from "../images/logo-fornecedor360-2.png"; // Atualize para o caminho correto

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Estado para controlar o Navbar
  const toggleNavbar = () => {
    console.log("Mostra", isNavbarOpen);
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav
      className="navbar fixed-top navbar-dark bg-blue custom-navbar"
      // aria-label="Dark offcanvas navbar"
    >
      <div className="container-fluid" style={{ height: "100%" }}>
        <div
        // className="navbar-brand"
        // style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <button
            className="navbar-toggler me-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDark"
            aria-controls="offcanvasNavbarDark"
            aria-label="Toggle navigation"
            // style={{ height: "20px", width: "60px", backgroundColor: "red" }}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img
            src={logopcrj}
            style={{ width: "120px", height: "40px" }}
            alt="logo"
          />
        </div>
        <div>
          <img src={fornecedor360} style={{ width: "110px" }} alt="logo" />
        </div>
        {isNavbarOpen && (
          <NavBar1 isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        )}
      </div>
    </nav>
  );
};

export default Header;
