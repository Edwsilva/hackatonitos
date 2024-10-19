import React from "react";

const CompanyTable = () => {
  return (
    <div className="card">
      <div className="card-body p-0">
        <div
          className="table-responsive"
          style={{ position: "relative", height: "400px", overflowY: "auto" }}
        >
          <table className="table table-striped table-hover mb-0">
            <thead className="table-blue">
              <tr>
                <th scope="col">CNPJ</th>
                <th scope="col">Empresa</th>
                <th scope="col">Contatos</th>
                <th scope="col">Email</th>
                <th scope="col">Site</th>
                <th scope="col">Avaliação</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  12.345.678/0001-90
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  Empresa Alfa
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  (21) 1234-5678
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  contato@empresa-alfa.com
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  www.empresa-alfa.com
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★☆</span> 4.5
                  </span>
                </td>
                <td style={{ whiteSpace: "nowrap", padding: "8px" }}>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>12.345.678/0001-90</td>
                <td>Empresa Alfa</td>
                <td>(21) 1234-5678</td>
                <td>contato@empresa-alfa.com</td>
                <td>www.empresa-alfa.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★☆</span> 4.5
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>23.456.789/0001-01</td>
                <td>Beta Solutions</td>
                <td>(11) 9876-5432</td>
                <td>info@betasolutions.com</td>
                <td>www.betasolutions.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★☆☆</span> 3.8
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>34.567.890/0001-12</td>
                <td>Gamma Tech</td>
                <td>(31) 3456-7890</td>
                <td>contato@gammatech.com</td>
                <td>www.gammatech.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★★</span> 4.7
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>45.678.901/0001-23</td>
                <td>Delta Innovators</td>
                <td>(41) 4567-8901</td>
                <td>info@delta-innovators.com</td>
                <td>www.delta-innovators.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★☆☆☆☆</span> 1.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>56.789.012/0001-34</td>
                <td>Empresa Epsilon</td>
                <td>(51) 5678-9012</td>
                <td>contato@epsilon.com</td>
                <td>www.epsilon.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★☆☆</span> 3.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>67.890.123/0001-45</td>
                <td>Omicron Corp</td>
                <td>(61) 6789-0123</td>
                <td>info@omicroncorp.com</td>
                <td>www.omicroncorp.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★☆</span> 4.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>78.901.234/0001-56</td>
                <td>Lambda Systems</td>
                <td>(71) 7890-1234</td>
                <td>contato@lambdasystems.com</td>
                <td>www.lambdasystems.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★☆</span> 4.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>89.012.345/0001-67</td>
                <td>Kappa Consulting</td>
                <td>(81) 8901-2345</td>
                <td>info@kappaconsulting.com</td>
                <td>www.kappaconsulting.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★★★</span> 5.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>90.123.456/0001-78</td>
                <td>Empresa Sigma</td>
                <td>(91) 9012-3456</td>
                <td>contato@sigmacorp.com</td>
                <td>www.sigmacorp.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★☆☆</span> 3.0
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
              <tr>
                <td>01.234.567/0001-89</td>
                <td>Theta Ventures</td>
                <td>(92) 0123-4567</td>
                <td>info@thetaventures.com</td>
                <td>www.thetaventures.com</td>
                <td>
                  <span className="badge text-bg-light">
                    <span className="text-warning">★★★☆☆</span> 3.7
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
