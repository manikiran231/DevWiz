import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color'; // Make sure react-color is installed
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ColorPicker({ mode }) {
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    minHeight: '100vh',
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  // Function to copy color and show toast
  const copyColorToClipboard = () => {
    navigator.clipboard.writeText(color);
    toast.success('Color code copied to clipboard!');
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
        <div
          className="p-3 my-3 rounded"
          style={{ backgroundColor: color, color: '#fff' }}
        >
          {color}
        </div>
        <button className="btn btn-primary" onClick={copyColorToClipboard}>
          Copy Color Code
        </button>
      </div>
      {/* Toast container to show toast notifications */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}
