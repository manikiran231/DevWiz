import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ mode }) {
  const navbarStyle = {
    background: mode === 'light' ? '#f8f9fa' : '#1b1446',
    color: mode === 'light' ? '#000' : '#fff',
    transition: 'background-color 0.3s ease',
    position: 'sticky',
    zIndex: 1000,
    top: 0,
  };

  const dropdownStyle = {
    backgroundColor: mode === 'light' ? '#f8f9fa' : '#2a1b6d',
    color: mode === 'light' ? '#000' : '#fff',
    transition: 'background-color 0.3s ease',
  };

  const dropdownItemStyle = {
    color: mode === 'light' ? '#000' : '#fff',
    backgroundColor: 'transparent',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid mx-5">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontFamily: 'Dancing Script, cursive', color: mode === 'light' ? '#000' : '#fff' }}
        >
          DevWiz
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/" style={{ color: mode === 'light' ? '#000' : '#fff' }}>
                Dashboard
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="/"
                id="toolsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: mode === 'light' ? '#000' : '#fff' }}
              >
                Tools
              </a>
              <ul className="dropdown-menu" style={dropdownStyle}>
                <li>
                  <Link className="dropdown-item" to="/textutils" style={dropdownItemStyle}>
                    📝 Text Analyzer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/todoapp" style={dropdownItemStyle}>
                    📋 Todo List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/markdowneditor" style={dropdownItemStyle}>
                    🖊️ Markdown Editor
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jsonformatter" style={dropdownItemStyle}>
                    🔧 JSON Formatter
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/spamemailgenerator" style={dropdownItemStyle}>
                    📬 Spam Email Generator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/passwordgenerator" style={dropdownItemStyle}>
                    🔑 Password Generator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/loremgenerator" style={dropdownItemStyle}>
                    📄 Lorem Ipsum Generator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/qrcodegenerator" style={dropdownItemStyle}>
                    🔳 QR Code Generator
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/colorpicker" style={dropdownItemStyle}>
                    🎨 Color Picker
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/typingtest" style={dropdownItemStyle}>
                    ⏱️ Typing Test
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-4"
                to="/about"
                style={{ color: mode === 'light' ? '#000' : '#fff' }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
