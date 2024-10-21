import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Certifique-se de que o Font Awesome está instalado
import "bootstrap/dist/css/bootstrap.min.css"; // Certifique-se de que o Bootstrap está instalado

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue mb- justify-content-center">
      <div className="container justify-content-center">
        <div className="row mx-2 my-2">
          <div className="col text-white small">
            <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
            <b>Prefeitura do Rio</b> | Todos os direitos reservados{" "}
            <span className="badge text-bg-light">Versão 1.1.0</span> 2024
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
