import React, { useEffect, useState } from "react";

const CompanyTable = ({ empresas }) => {
  console.log(empresas);

  return (
    <div
      className="table-responsive"
      style={{ position: "relative", height: "400px", overflowY: "auto" }}
    >
      <table>
        <thead style={{ borderSpacing: "10px", padding: "5px" }}>
          <tr
            style={{
              backgroundColor: "#004A80",
              color: "white",
            }}
          >
            <th
              style={{
                borderRadius: "5px 0 0 0",
                color: "white",
              }}
              scope="col"
            >
              CNPJ
            </th>
            <th scope="col">Empresa</th>
            <th scope="col">Contatos</th>
            <th scope="col">Email</th>
            <th scope="col">Site</th>
            <th scope="col">Avaliação</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa.cnpj}>
              <td>{empresa.cnpj}</td>
              <td>{empresa.empresa}</td>
              <td>{empresa.contato}</td>
              <td>{empresa.email}</td>
              <td>{empresa.site}</td>
              <td>
                <span className="badge text-bg-light">
                  <span className="text-warning">
                    {empresa.avaliacao.comentario}
                  </span>{" "}
                  {empresa.avaliacao.estrelas}
                </span>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                >
                  <i className="fa fa-list-alt" aria-hidden="true"></i> Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
