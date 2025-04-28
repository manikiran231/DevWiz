import React, { useState } from 'react';

export default function PasswordGenerator({ mode }) {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default password length
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const characters = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    specialChars: '!@#$%^&*()-_=+[]{}|;:,.<>?/',
  };

  const generatePassword = () => {
    let characterPool = '';

    if (includeUppercase) characterPool += characters.uppercase;
    if (includeLowercase) characterPool += characters.lowercase;
    if (includeNumbers) characterPool += characters.numbers;
    if (includeSpecialChars) characterPool += characters.specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }

    setPassword(newPassword);
  };

  // Styles for light/dark mode
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)'; // Gradient for dark mode
  const containerStyle = {
    minHeight: '100vh',
    background: mode === 'light' ? 'linear-gradient(45deg, #f8f9fa, #e0e0e0)' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  // Styles for form fields and buttons
  const inputFieldStyle = {
    backgroundColor: mode === 'light' ? '#rgb(68, 60, 105)' : '#rgb(68, 60, 105)',
    color: mode === 'light' ? 'black' : 'black',
    borderColor: mode === 'light' ? '#rgb(68, 60, 105)' : '#rgb(68, 60, 105)',
    borderRadius: '8px',
    padding: '10px',
    transition: 'all 0.3s ease',
  };

  const checkboxStyle = {
    color: mode === 'light' ? '#000' : '#fff',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const customCheckboxStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '4px',
    backgroundColor: mode === 'light' ? '#ddd' : '#444',
    marginRight: '10px',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: mode === 'light' ? '#007bff' : '#6c5ce7',
    color: '#fff',
    borderColor: mode === 'light' ? '#007bff' : '#6c5ce7',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: mode === 'light' ? '#0056b3' : '#444',
    borderColor: mode === 'light' ? '#0056b3' : '#444',
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
    e.target.style.borderColor = buttonHoverStyle.borderColor;
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
    e.target.style.borderColor = buttonStyle.borderColor;
  };

  return (
    <div style={containerStyle}>
      <div className="container text-center">
        <h2 className="mb-4">🔐 Random Password Generator</h2>

        <div className="mb-3">
          <label className="form-label">Password Length:</label>
          <input
            type="number"
            className="form-control"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="8"
            max="20"
            style={inputFieldStyle}
          />
        </div>

        <div className="form-check" style={checkboxStyle}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            style={customCheckboxStyle}
          />
          <label className="form-check-label">Include Uppercase Letters</label>
        </div>

        <div className="form-check" style={checkboxStyle}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            style={customCheckboxStyle}
          />
          <label className="form-check-label">Include Lowercase Letters</label>
        </div>

        <div className="form-check" style={checkboxStyle}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            style={customCheckboxStyle}
          />
          <label className="form-check-label">Include Numbers</label>
        </div>

        <div className="form-check" style={checkboxStyle}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            style={customCheckboxStyle}
          />
          <label className="form-check-label">Include Special Characters</label>
        </div>

        <button
          className="btn my-3"
          style={buttonStyle}
          onClick={generatePassword}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-3">
            <h4>Your Generated Password</h4>
            <input
              type="text"
              className="form-control"
              value={password}
              readOnly
              style={inputFieldStyle}
            />
            <button
              className="btn btn-success mt-3"
              onClick={() => {navigator.clipboard.writeText(password); alert('Copied to clipboard!');}}
              style={buttonStyle}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
