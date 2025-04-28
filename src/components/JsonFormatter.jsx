import React, { useState } from 'react';
import ReactJson from 'react-json-view'; // Install react-json-view

export default function JsonFormatter({ mode }) {
  const [json, setJson] = useState('');
  const [formattedJson, setFormattedJson] = useState(null);

  // Dark gradient background for JSON Formatter
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  const handleJsonChange = (e) => {
    setJson(e.target.value);
  };

  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(json);
      setFormattedJson(parsedJson);
      alert('JSON formatted successfully!');
    } catch (e) {
      alert('Invalid JSON');
    }
  };

  return (
    <div style={containerStyle}>
      <div className="container">
        <h2 className="mb-4 text-center">📑 JSON Formatter</h2>
        
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="6"
            placeholder="Paste JSON here"
            value={json}
            onChange={handleJsonChange}
            style={{
              backgroundColor: mode === 'light' ? 'white' : 'rgb(68, 60, 105)', // Darker background for dark mode
              color: mode === 'light' ? 'black' : 'white',
              borderColor: mode === 'light' ? '#ced4da' : '#555',
            }}
          ></textarea>
        </div>
        
        <button className="btn btn-primary" onClick={handleFormatJson}>
          Format JSON
        </button>
        
        {formattedJson && (
          <div className="mt-4">
            <h4 className="mb-3">Formatted JSON</h4>
            <ReactJson src={formattedJson} theme={mode === 'light' ? 'rjv-default' : 'monokai'} />
          </div>
        )}
      </div>
    </div>
  );
}
