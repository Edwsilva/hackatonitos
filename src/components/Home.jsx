import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBolt, FaMagic } from "react-icons/fa";
import Header from "./Header";

// import Header from "./components/Header/Header";
import Footer from "./Footer/Footer";
import CompanyTable from "./CompanyTable";
// import Navbar from "./Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Estado para controlar o Navbar
  const [empresas, setEmpresas] = useState([]);
  const [numEmpresas, setNumEmpresas] = useState(0);

  const empresasFiltradas = empresas.filter(
    (empresa) => empresa.empresa.toLowerCase().includes(search.toLowerCase()) // Converte para minúsculas para busca case insensitive
  );

  useEffect(() => {
    fetch("http://localhost:3001/empresas")
      .then((response) => response.json())
      .then((data) => {
        setEmpresas(data);
        setNumEmpresas(data.length); // Atualiza o número de empresas
      })
      .catch((error) => console.error("Erro ao buscar empresas:", error));
  }, []);
  // console.log("DATA ", data);
  return (
    <main className="pb-2 pt-5">
      <Header />
      {/* <NavBar1 isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} /> */}

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
                  <small style={{ color: "black" }}>
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
                  <h5>Pesquise pelo nome da empresa ou serviço desejado:</h5>
                </label>

                <div className="input-group">
                  <input
                    className="form-control form-control-lg border border-primary"
                    type="text"
                    id="q"
                    name="q"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary custom-button"
                      type="button"
                    >
                      <FaSearch />
                    </button>
                    <button
                      className="btn btn-primary custom-button"
                      type="button"
                    >
                      <FaBolt />
                    </button>
                    {/* <button
                      className="btn btn-primary custom-button"
                      type="button"
                    >
                      <FaMagic />
                    </button> */}
                  </div>
                </div>
              </div>
            </form>

            <section className="intro">
              <div
                className="bg-image h-100"
                style={{ backgroundColor: "#f5f7fa", color: "black" }}
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
                            {numEmpresas} empresas encontradas
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
                    <CompanyTable empresas={empresasFiltradas} />{" "}
                    {/* Passa as empresas como props */}
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;