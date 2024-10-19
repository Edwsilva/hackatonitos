import "./App.css";
// import gptLogo from "./assets/chatgpt.svg";

// function App() {
//   return (
//     <div className="App">
//       <div className="slideBar">
//         <div className="upperSide">
//           <div className="upperSideTop">
//             <img src={gptLogo} alt="Logo" className="logo" />
//             <span className="brand">ChatGPT</span>
//           </div>
//           <button className="midBtn">
//             <img src="" className="addBtn" />
//             New Chat
//           </button>
//           <div className="upperSideBottom">
//             <button className="query">
//               <img src="" alt="" />
//               What is Programming
//             </button>
//             <button className="query">
//               <img src="" alt="" />
//               What is Programming
//             </button>
//           </div>
//         </div>

//         <div className="lowerSide"></div>
//       </div>
//       <div className="main"></div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./components/Header";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import CompanyTable from "./components/CompanyTable";
import Navbar from "./components/Navbar";
// import logopcrj from "./images/logo-pcrj-iplan-2.png";
// import fornecedor360 from "./images/logo-fornecedor360-2.png";
//logo-pcrj-iplan-2.p
const App = () => {
  return (
    <main className="pb-2 pt-5">
      <Header />

      <div className="container my-5">
        <div className="bg-body-tertiary p-2 rounded">
          <div className="col-sm-12 py-4 mx-auto">
            <nav
              style={{
                "--bs-breadcrumb-divider":
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
              }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <small>
                    <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                    <b>Você está em:</b>
                  </small>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Principal
                </li>
              </ol>
            </nav>

            <hr />
            <h1 className="fw-normal">Seja bem-vindo(a)!</h1>
            <hr />

            <form>
              <div className="mb-3">
                <label htmlFor="q" className="form-label lead">
                  Pesquise pelo nome da empresa ou serviço desejado:
                </label>
                <div className="input-group">
                  <input
                    className="form-control form-control-lg border border-primary"
                    type="text"
                    id="q"
                    name="q"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-magic" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </form>

            <section className="intro">
              <div
                className="bg-image h-100"
                style={{ backgroundColor: "#f5f7fa" }}
              >
                <div className="mask d-flex align-items-center h-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <h5>
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Resultado da Pesquisa:{" "}
                          <span className="badge rounded-pill text-bg-primary">
                            10 empresas encontradas
                          </span>{" "}
                          |{" "}
                          <span className="badge rounded-pill text-bg-secondary">
                            <i
                              className="fa fa-database"
                              aria-hidden="true"
                            ></i>{" "}
                            Base de Fornecedores
                          </span>
                        </h5>
                      </div>
                    </div>
                    <CompanyTable />
                  </div>
                </div>
              </div>
            </section>

            {/* <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-blue mb-0">
              <div className="container">
                <div className="row mx-2 my-2">
                  <div className="col text-white small">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                    <b>Prefeitura do Rio</b> | Todos os direitos reservados{" "}
                    <span className="badge text-bg-light">Versão 1.1.0</span>{" "}
                    2024
                  </div>
                </div>
              </div>
            </nav> */}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
