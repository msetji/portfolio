// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <span className="bold-text">MICHAEL SETJI</span>/PORTFOLIO
            </a>
          </li>
          <li className="nav-item nav-right">
            <a href="#about" className="nav-link">About Me</a>
          </li>
          <li className="nav-item nav-right">
            <a href="#experience" className="nav-link">Experience</a>
          </li>
          <li className="nav-item nav-right">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item nav-right">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;