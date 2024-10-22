import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaSearch, FaBolt, FaMagic } from "react-icons/fa";
import Header from "./components/Header";
import Login from "./components/Login/Login.jsx";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import CompanyTable from "./components/CompanyTable.jsx";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/action-2" element={<Home />} />
        <Route path="/action-3" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import Navbar from "./components/NavBar1";
// import "./App1.css"; // Importando o arquivo CSS

// function App() {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Estado para controlar o Navbar

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen); // Alterna o estado ao clicar no botão
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>Meu Sistema</h1>
//         <button
//           className="navbar-toggler"
//           onClick={toggleNavbar}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span> {/* Ícone do menu */}
//         </button>
//       </header>

//       {/* Renderização condicional do Navbar */}
//       <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

//       {/* Conteúdo principal da página */}
//       <main className="content">
//         <h2>Bem-vindo ao sistema Fornecedor360</h2>
//         <p>Este é o conteúdo principal da página.</p>
//       </main>
//     </div>
//   );
// }

// export default App;
