// import React from "react";
// import "font-awesome/css/font-awesome.min.css"; // Certifique-se de que o Font Awesome está instalado
// import "bootstrap/dist/css/bootstrap.min.css"; // Certifique-se de que o Bootstrap está instalado

// const Footer = () => {
//   return (
//     <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue mb- justify-content-center">
//       <div className="container justify-content-center">
//         <div className="row mx-2 my-2">
//           <div className="col text-white small">
//             <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
//             <b>Prefeitura do Rio</b> | Todos os direitos reservados{" "}
//             <span className="badge text-bg-light">Versão 1.1.0</span> 2024
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Footer;

import React from "react";
import { FaInfoCircle } from "react-icons/fa"; // Importando o ícone do react-icons
import "./Footer.css"; // Importando um arquivo CSS local para estilização

const Footer = () => {
  return (
    <nav className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col text">
            <FaInfoCircle aria-hidden="true" /> <b>Prefeitura do Rio</b> | Todos
            os direitos reservados{" "}
            <span className="version-badge">Versão 1.1.0</span> 2024
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
