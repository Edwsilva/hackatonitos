import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Importar o CSS para o efeito de deslizamento
import {
  FaHome,
  FaSearch,
  FaCar,
  FaPhone,
  FaQuestionCircle,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaCaretDown,
} from "react-icons/fa";

import { MdClose } from "react-icons/md";

function Navbar({ isOpen, toggleNavbar }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoff = () => {
    // Redireciona para a tela de Login
    navigate("/");
  };

  const toggleDropdown = () => {
    console.log("togleDropDown ", isDropdownOpen);
    setDropdownOpen(!isDropdownOpen); // Alterna o estado
  };

  return (
    // <div className={`navbar-container ${isOpen ? "open" : ""}`}>

    <div
      className={`navbar-container ${isOpen ? "open" : ""}`}
      // Adiciona a classe "open" se isOpen for true
    >
      <nav className="navbar">
        <div className="navbar-header">
          <ul className="navbar-nav">
            <a
              aria-expanded={isDropdownOpen} // Atualiza a propriedade aria-expanded com base no estado
              onClick={toggleDropdown} // Chama a função de alternar o dropdown
            >
              Usuário: <b>Edwilson da Silva</b>
              <FaCaretDown style={{ marginLeft: "5px" }} />
            </a>
            {isDropdownOpen && ( // Renderiza o dropdown somente se isDropdownOpen for true
              <div className="dropdown-menu show dropdown-container">
                <a className="dropdown-item" href="#">
                  <FaUser aria-hidden="true" /> Meu Perfil
                </a>
                <hr className="dropdown-divider" />
                <a className="dropdown-item" href="" onClick={handleLogoff}>
                  <FaSignOutAlt aria-hidden="true" /> Efetuar Logoff
                </a>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaHome /> Principal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaSearch /> Pesquisa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaCar /> Fornecedores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaPhone /> Usuários
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaQuestionCircle /> Ajuda
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
