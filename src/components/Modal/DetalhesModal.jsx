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
        <Modal.Header style={{ color: "write", backgroundColor: "#0D6EFD" }}>
          <Modal.Title>Detalhes do Processo</Modal.Title>
        </Modal.Header>

        {data && time ? (
          <Modal.Body style={{ color: "write", backgroundColor: "#0D6EFD" }}>
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
          <div style={{ color: "write", backgroundColor: "#0D6EFD" }}>
            <p>Carregando...</p>
          </div>
        )}
        <Modal.Footer style={{ color: "write", backgroundColor: "#0D6EFD" }}>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetalhesModal;
