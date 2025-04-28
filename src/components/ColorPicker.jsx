import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color'; // You need to install react-color

export default function ColorPicker({ mode }) {
  const [color, setColor] = useState('#000000');

  // Dynamically change the background color of the page
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // Runs every time 'color' changes

  // Dark gradient background for the page in dark mode
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    minHeight: '100vh',
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground, // Apply the background gradient based on mode
    color: mode === 'light' ? '#000' : '#fff',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  return (
    <div style={containerStyle}>
      <div className="container text-center">
        <h2 className="mb-4">🎨 Pick a Color</h2>
        <div className="d-flex justify-content-center mb-4">
          <ChromePicker
            color={color}
            onChangeComplete={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>
        <h4>Selected Color:</h4>
        <div className="p-3 my-3 rounded" style={{ backgroundColor: color, color: '#fff' }}>
          {color}
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => { navigator.clipboard.writeText(color); alert('Color code copied to clipboard!'); }}
        >
          Copy Color Code
        </button>
      </div>
    </div>
  );
}
