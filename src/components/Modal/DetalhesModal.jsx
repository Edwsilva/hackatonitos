import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./detalhesModal.css";

const DetalhesModal = ({ show, handleClose, data }) => {
  const [time, setTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ color: "write", backgroundColor: "#2c14c9" }}>
          <Modal.Title>Detalhes do Processo</Modal.Title>
        </Modal.Header>

        {data && time ? (
          <Modal.Body style={{ color: "write", backgroundColor: "#2c14c9" }}>
            <div>
              <p>
                <strong>Título:</strong> {data.titulo}
              </p>
              <p>
                <strong>Objeto Processo Rio:</strong> {data.objeto_processo_rio}
              </p>
              <p>
                <strong>Quantidade:</strong> {data.quantidade}
              </p>
              <p>
                <strong>Preço Unitário:</strong> {data.preco_unitario}
              </p>
              <p>
                <strong>Preço Total:</strong> {data.preco_total}
              </p>
              <p>
                <strong>Unidade:</strong> {data.unidade || "N/A"}
              </p>
              <p>
                <strong>Validade:</strong> {data.validade}
              </p>
            </div>
          </Modal.Body>
        ) : (
          <p style={{ color: "black" }}>Carregando...</p>
        )}
        <Modal.Footer style={{ color: "write", backgroundColor: "#2c14c9" }}>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalhesModal;
