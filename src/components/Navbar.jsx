import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-blue mb-0">
      <div className="container-fluid">
        {/* Menu offcanvas que aparece ao clicar no ícone de sanduíche */}
        <div
          className="offcanvas offcanvas-start text-bg-blue"
          tabIndex="-1"
          id="offcanvasNavbarDark"
          aria-labelledby="offcanvasNavbarDarkLabel"
        >
          <div className="offcanvas-header">
            {/* Título ajustado para duas linhas */}
            <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
              Fornecedor
              <br />
              <b>360</b>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* Corpo do offcanvas com os links do menu */}
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-column">
              {/* Dropdown de usuário */}
              <li className="nav-item dropdown mb-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Usuário: <b>Leonardo Silva</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa fa-user" aria-hidden="true"></i> Meu
                      Perfil
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="index.html">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
                      Efetuar Logoff
                    </a>
                  </li>
                </ul>
              </li>

              {/* Links dispostos verticalmente */}
              <li className="nav-item mb-2">
                <a className="btn btn-primary w-100" href="#">
                  <i className="fa fa-home" aria-hidden="true"></i> Principal
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="btn btn-primary w-100" href="#">
                  <i className="fa fa-search" aria-hidden="true"></i> Pesquisa
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="btn btn-primary w-100" href="#">
                  <i className="fa fa-truck" aria-hidden="true"></i>{" "}
                  Fornecedores
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="btn btn-primary w-100" href="#">
                  <i className="fa fa-users" aria-hidden="true"></i> Usuários
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="btn btn-primary w-100" href="#">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>{" "}
                  Ajuda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
