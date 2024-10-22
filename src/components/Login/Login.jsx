import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logofornecedor from "../../images/logo-fornecedor.png";
import logopcrj from "../../images/logo-pcrj-iplan-2.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAccess = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    // Validação do formato de email
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    // Se ambos os campos estão preenchidos, navega para a rota Home
    setError(""); // Limpa a mensagem de erro
    navigate("/action-2");
  };

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
                        placeholder="Seu email .rio ou matrícula"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="input-group">
                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        id="password"
                        className="input-field"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="action-group">
                      <button
                        className="btn-primary"
                        type="submit"
                        onClick={handleAccess}
                      >
                        Acessar
                      </button>
                      <button className="btn-link" type="button">
                        Recuperar acesso?
                      </button>
                    </div>

                    <div className="account-actions">
                      <p style={{ color: "black" }}>Não tem uma conta?</p>
                      <button className="btn-secondary">
                        Solicite seu acesso
                      </button>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
