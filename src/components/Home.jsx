import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBolt } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer/Footer";
import TabelaEmpresas from "./TabelaEmpresas";
import CompanyTable from "./CompanyTable";

const Home = () => {
  const [search, setSearch] = useState("");
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

  return (
    <main className="pb-2 pt-5">
      <Header style={{ marginBottom: "0.5rem" }} />{" "}
      {/* Ajusta a margem inferior do Header */}
      <div className="container my-10">
        <div className="bg-body-tertiary p-2 rounded">
          <div
            className="fixed-content"
            style={{
              position: "fixed",
              top: 100,
              left: "10%", // Definindo left e right como porcentagem para tornar responsivo
              right: "10%",
              zIndex: 999,
              backgroundColor: "white",
              maxWidth: "100%", // Para evitar que fique maior que a tela
            }}
          >
            <div className="col-sm-12 py-0 mx-auto">
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
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div style={{ width: "100%" }}>
              {/* <CompanyTable empresas={empresasFiltradas} /> */}
              <TabelaEmpresas empresas={empresasFiltradas} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
