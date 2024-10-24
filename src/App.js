import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login.jsx";
// import Header from "./components/Header/Header";
import CompanyProfile from "./components/PerfilEmpresa/CompanyProfile.jsx";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

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
