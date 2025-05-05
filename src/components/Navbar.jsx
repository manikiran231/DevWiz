import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ mode }) {
  const navbarStyle = {
    background: mode === 'light' ? '#f8f9fa' : '#1b1446', // Light or Dark mode background
    color: mode === 'light' ? '#000' : '#fff', // Light or Dark mode text color
    transition: 'background-color 0.3s ease', // Smooth transition for background color change
    position: 'sticky',
    zIndex: 1000, // Ensure the navbar is above other content
    top: 0,
  };

  const dropdownStyle = {
    backgroundColor: mode === 'light' ? '#f8f9fa' : '#2a1b6d', // Light or Dark mode background for dropdown
    color: mode === 'light' ? '#000' : '#fff', // Light or Dark mode text color for dropdown
    transition: 'background-color 0.3s ease',
  };

  const dropdownItemStyle = {
    color: mode === 'light' ? '#000' : '#fff', // Light or Dark mode text color for dropdown items
    backgroundColor: 'transparent', // Transparent background for dropdown items
    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid mx-5">
        {/* Brand name aligned to the left */}
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontFamily: 'Dancing Script, cursive', color: mode === 'light' ? '#000' : '#fff' }}
        >
          DevWiz
        </Link>

        {/* Toggler button for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links aligned to the right */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/" style={{ color: mode === 'light' ? '#000' : '#fff' }}>Dashboard</Link>
            </li>

            {/* Dropdown for Tools */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3" href="/" id="toolsDropdown" role="button" data-bs-toggle="dropdown" style={{ color: mode === 'light' ? '#000' : '#fff' }}>
                Tools
              </a>
              <ul className="dropdown-menu" style={dropdownStyle}>
                <li><Link className="dropdown-item" to="/textutils" style={dropdownItemStyle}>📝 Text Analyser</Link></li>
                <li><Link className="dropdown-item" to="/colorpicker" style={dropdownItemStyle}>🎨 Color Picker</Link></li>
                <li><Link className="dropdown-item" to="/jsonformatter" style={dropdownItemStyle}>📄 JSON Formatter</Link></li>
                <li><Link className="dropdown-item" to="/typingtest" style={dropdownItemStyle}>⌨️ Typing Test</Link></li>
                <li><Link className="dropdown-item" to="/passwordgenerator" style={dropdownItemStyle}>🔑 Password Generator</Link></li>
                <li><Link className="dropdown-item" to="/loremgenerator" style={dropdownItemStyle}>📝 Lorem Generator</Link></li>
                <li><Link className="dropdown-item" to="/todoapp" style={dropdownItemStyle}>📝 To Do List</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about" style={{ color: mode === 'light' ? '#000' : '#fff' }}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
