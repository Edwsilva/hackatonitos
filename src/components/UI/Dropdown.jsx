import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import IA from "../../assets/IA.png";
import iaColorida from "../../assets/iaColorida.jpeg"
import chatgpt from "../../assets/chatgpt.svg";
import { FaMagic } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dropDownButton.css";
import "./typeWriterEffect.css"; // Importando o CSS

const TypeWriterModal = ({ show, handleClose }) => {
  const [text, setText] = useState("");
  const fullText =
    " Pesquisa feita por IA utilizada no projeto de protótipo  da equipe hackatônitos!";

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
      <Modal.Header className="corfundo" closeButton>
        {/* <Modal.Title>Efeito Máquina de Escrever</Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="corfundo">
        <div className="titulo-principal">
          <img
            src={IA}
            alt="Ícone"
            style={{ width: "50px", height: "50px", marginRight: "5px" }}
          />
          <p></p>
          {text}
          <span className="cursor"></span>
        </div>
      </Modal.Body>
      <Modal.Footer className="corfundo">
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
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
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
