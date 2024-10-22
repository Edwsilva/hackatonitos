import React, { useState } from 'react';
import Navbar from './Navbar';
import logopcrj from '../images/logo-pcrj-iplan-2.png';
import fornecedor360 from '../images/logo-fornecedor360-2.png';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Navbar state

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    console.log('Navbar Open:', !isNavbarOpen);
  };

  return (
    <>
      {/* Navbar always stays on top */}
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

      {/* Overlay to darken the rest of the page */}
      <div
        className={`overlay ${isNavbarOpen ? 'open' : ''}`}
        onClick={toggleNavbar}
      ></div>

      <nav className="navbar fixed-top navbar-dark bg-blue custom-navbar">
        <div className="container-fluid" style={{ height: '100%' }}>
          <div>
            <button
              className="navbar-toggler me-1"
              type="button"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img
              src={logopcrj}
              style={{ width: '120px', height: '40px' }}
              alt="logo"
            />
          </div>
          <div>
            <img src={fornecedor360} style={{ width: '110px' }} alt="logo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
