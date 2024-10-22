import { FaMagic } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dropDownButton.css"; // Importar o arquivo CSS

const DropDownButton = () => {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic" title="IA">
        <FaMagic /> {/* Ícone FaMagic */}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: "#0056b3" }}>
        <Dropdown.Item
          onClick={() => navigate("/action-2")}
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
  );
};

export default DropDownButton;
