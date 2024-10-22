import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DropDownButton = () => {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Ações
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate("/")}>
          Detalhamento da Empresa
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/action-2")}>
          Perfil com IA
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/action-3")}>
          Resumo de Depoimentos com IA
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownButton;
