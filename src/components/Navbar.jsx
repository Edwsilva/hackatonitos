// import React from "react";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-blue mb-0">
//       <div className="container-fluid">
//         {/* Menu offcanvas que aparece ao clicar no ícone de sanduíche */}
//         <div
//           className="offcanvas offcanvas-start text-bg-blue"
//           tabIndex="-1"
//           id="offcanvasNavbarDark"
//           aria-labelledby="offcanvasNavbarDarkLabel"
//         >
//           <div className="offcanvas-header">
//             {/* Título ajustado para duas linhas */}
//             <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
//               Fornecedor
//               <br />
//               <b>360</b>
//             </h5>
//             <button
//               type="button"
//               className="btn-close btn-close-white"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>

//           {/* Corpo do offcanvas com os links do menu */}
//           <div className="offcanvas-body">
//             <ul className="navbar-nav flex-column">
//               {/* Dropdown de usuário */}
//               <li className="nav-item dropdown mb-2">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Usuário: <b>Leonardo Silva</b>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       <i className="fa fa-user" aria-hidden="true"></i> Meu
//                       Perfil
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="index.html">
//                       <i className="fa fa-sign-out" aria-hidden="true"></i>{" "}
//                       Efetuar Logoff
//                     </a>
//                   </li>
//                 </ul>
//               </li>

//               {/* Links dispostos verticalmente */}
//               <li className="nav-item mb-2">
//                 <a className="btn btn-primary w-100" href="#">
//                   <i className="fa fa-home" aria-hidden="true"></i> Principal
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a className="btn btn-primary w-100" href="#">
//                   <i className="fa fa-search" aria-hidden="true"></i> Pesquisa
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a className="btn btn-primary w-100" href="#">
//                   <i className="fa fa-truck" aria-hidden="true"></i>{" "}
//                   Fornecedores
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a className="btn btn-primary w-100" href="#">
//                   <i className="fa fa-users" aria-hidden="true"></i> Usuários
//                 </a>
//               </li>
//               <li className="nav-item mb-2">
//                 <a className="btn btn-primary w-100" href="#">
//                   <i className="fa fa-question-circle" aria-hidden="true"></i>{" "}
//                   Ajuda
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
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
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar a exibição do dropdown

  const toggleDropdown = () => {
    console.log("togleDropDown ", isDropdownOpen);
    setDropdownOpen(!isDropdownOpen); // Alterna o estado
  };

  return (
    // <div className={`navbar-container ${isOpen ? "open" : ""}`}>

    <div
      className={`navbar-container ${isOpen ? "open" : ""}`} // Adiciona a classe "open" se isOpen for true
    >
      <div className="header">
        <h5>Fornecedor360</h5>
        <button className="close-button" onClick={toggleNavbar}>
          <MdClose size={24} /> {/* Tamanho do ícone */}
        </button>
      </div>

      <nav className="navbar">
        <div className="navbar-header">
          <ul className="navbar-nav">
            <a
              className="nav-link"
              href="#"
              role="button"
              //   aria-expanded="true"
              aria-expanded={isDropdownOpen} // Atualiza a propriedade aria-expanded com base no estado
              onClick={toggleDropdown} // Chama a função de alternar o dropdown
            >
              Usuário: <b>Edwilson da Silva</b>
              <FaCaretDown style={{ marginLeft: "5px" }} />
              <FaTimes
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={toggleNavbar}
              />
            </a>
            {isDropdownOpen && ( // Renderiza o dropdown somente se isDropdownOpen for true
              <div className="dropdown-menu show dropdown-container">
                <a className="dropdown-item" href="#">
                  <FaUser aria-hidden="true" /> Meu Perfil
                </a>
                <hr className="dropdown-divider" />
                <a className="dropdown-item" href="index.html">
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
