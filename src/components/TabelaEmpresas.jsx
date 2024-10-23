import React, { useEffect, useState } from "react";
import "./tabelaEmpresas.css"; // Estilos CSS para a tabela
import DropDownButton from "./UI/Dropdown";
import { Modal, Button } from "react-bootstrap";
import DetalhesModal from "./Modal/DetalhesModal";

// const DetalhesModal = ({ show, handleClose, data }) => {
//   console.log("data", data);
//   return (
//     <div style={{ color: "black" }}>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title
//             style={{ color: "black", fontSize: "8px", fontStyle: "bold" }}
//           >
//             {data.titulo}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Renderize os dados aqui */}
//           {data ? (
//             <div>
//               <p>
//                 <strong style={{ color: "black", fontSize: "8px" }}>ID:</strong>
//                 {data.objeto_processo_rio}
//               </p>
//               <p>
//                 <strong>Nome:</strong> {data.preco_total}
//               </p>
//               {/* Mais campos de dados da API */}
//             </div>
//           ) : (
//             <p>Carregando...</p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Fechar
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

const TabelaEmpresas = ({ empresas }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");

  const handleShowModal = (processo) => {
    setData(processo); // Recebe o item do array

    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  console.log("empresas ", empresas);
  return (
    <div className="tabela-container">
      <table className="tabela">
        <thead>
          <th scope="col">CNPJ</th>
          <th scope="col">Empresa</th>
          <th scope="col">Contatos</th>
          <th scope="col">Email</th>
          <th scope="col">Site</th>
          <th scope="col">Atualização</th>
          <th scope="col">Avaliação</th>
          <th scope="col"></th>
          <th scope="col"></th>
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
                    onClick={() => handleShowModal(empresa.processos[0])}
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

      {showModal && (
        <DetalhesModal
          show={showModal}
          handleClose={handleCloseModal}
          data={data}
        />
      )}
    </div>
  );
};

export default TabelaEmpresas;
