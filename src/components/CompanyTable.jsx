import React, { useEffect, useState } from "react";
import DropDownButton from "./UI/Dropdown";

const CompanyTable = ({ empresas }) => {
  return (
    <div
      className="table-responsive"
      style={{
        position: "relative",
        height: "500px",

        display: "flex",
        overflowY: "auto",
        color: "black",
        padding: "10px",
      }}
    >
      <table>
        <thead style={{ borderSpacing: "10px", padding: "5px" }}>
          <tr
            style={{
              backgroundColor: "#0D6EFD",
              color: "white",
              marginTop: "10px",
            }}
          >
            <th
              style={{
                borderRadius: "5px 0 0 0",
                color: "white",
                padding: "10px",
                marginBottom: "10px",
              }}
              scope="col"
            >
              CNPJ
            </th>
            <th scope="col">Empresa</th>
            <th scope="col">Contatos</th>
            <th scope="col">Email</th>
            <th scope="col">Site</th>
            <th scope="col">Atualização</th>
            <th scope="col">Avaliação</th>
            <th scope="col"></th>
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
              <td>{empresa.data}</td>
              <td>{""}</td>
              <td>
                <span className="badge text-bg-light">
                  <span className="text-warning">
                    {empresa.avaliacao.comentario}
                  </span>{" "}
                  {empresa.avaliacao.estrelas}
                </span>
              </td>
              <td>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                  <DropDownButton />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
