import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import IA from "../../assets/IA.png";
import { FaMagic } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dropDownButton.css";
import "./typeWriterEffect.css"; // Importando o CSS

const TypeWriterModal = ({ show, handleClose }) => {
  const [text, setText] = useState("");
  const fullText =
    "Efeito Máquina de Escrever com React, utilize em seus projetos esse efeito bacana!";

  // Função para executar o efeito de digitação
  const typeWriter = () => {
    setText(""); // Reseta o texto antes de iniciar o efeito
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(type, 75); // Atraso entre cada letra
      }
    };

    type(); // Inicia o efeito de digitação
  };

  useEffect(() => {
    if (show) {
      typeWriter(); // Inicia a digitação quando o modal é exibido
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Efeito Máquina de Escrever</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="titulo-principal">
          {text}
          <span className="cursor">|</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DropDownButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" title="IA">
          {/* <FaMagic />  */}

          <img
            src={IA}
            alt="Ícone"
            style={{ width: "30px", height: "30px", marginRight: "5px" }}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "#0056b3" }}>
          <Dropdown.Item
            onClick={handleShow}
            style={{ color: "#ffffff" }}
            className="dropdown-item-hover"
          >
            Perfil com IA
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => navigate("/action-3")}
            style={{ color: "#ffffff" }}
            className="dropdown-item-hover"
          >
            Resumo de Depoimentos com IA
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <TypeWriterModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default DropDownButton;
