import React from "react";
import "./login.css";
import logofornecedor from "../../images/logo-fornecedor.png";
import logopcrj from "../../images/logo-pcrj-iplan-2.png";

const Login = () => {
  return (
    <section className="fullscreen">
      <div className="container-full">
        <div className="row-center">
          <div className="card-full">
            <div className="row-no-gutter">
              <div className="col-half">
                <div className="card-content">
                  <div className="text-center">
                    <img src={logofornecedor} className="logo" alt="logo" />
                    <h4 className="welcome-text">Seja Bem-vindo(a)!</h4>
                  </div>

                  <form method="post" action="main.html">
                    <p>Informe abaixo, os dados de acesso:</p>

                    <div className="input-group">
                      <label htmlFor="email">Usuário</label>
                      <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="seu email .rio ou matricula"
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        id="password"
                        className="input-field"
                      />
                    </div>

                    <div className="action-group">
                      <button className="btn-primary" type="submit">
                        Acessar
                      </button>
                      <a className="btn-link" href="#!">
                        Recuperar acesso?
                      </a>
                    </div>

                    <div className="account-actions">
                      <p style={{ marginTop: "10px" }}>Não tem uma conta?</p>
                      <button className="btn-secondary">
                        Solicite seu acesso
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-half bg-gradient">
                <div className="info-box">
                  <img src={logopcrj} className="info-logo" alt="logo" />
                  <hr />
                  <h4 className="info-heading">
                    Nós somos mais que um sistema! Somos uma Solução!
                  </h4>
                  <p className="info-text">
                    O <b>FORNECEDOR360</b> faz parte do <b>LICITA360</b>,
                    solução completa e modular que automatiza e simplifica todas
                    as fases do processo de licitação, desde o requerimento da
                    solicitação do produto ou serviço até o contrato. Com uma
                    interface intuitiva e ferramentas integradas, o sistema
                    otimiza a gestão, proporcionando mais transparência e
                    eficiência em cada etapa.
                  </p>
                  <p className="info-lead">
                    <b>
                      LICITA360: sua gestão de licitações transformada, da
                      solicitação ao contrato.
                    </b>
                  </p>
                  <small className="version-tag">Versão 1.1.0</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
