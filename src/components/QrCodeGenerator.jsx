import React, { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function QrCodeGenerator(props) {
  const [text, setText] = useState('https://example.com');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvasRef.current = canvas;
    }
  }, [text]);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      toast.error('QR code not ready yet.');
      return;
    }

    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    toast.success('QR code downloaded!');
  };

  // Backgrounds from your Textform component
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';
  const lightPurpleCardBackground = 'rgba(255, 255, 255, 0.08)';

  // Container style matching Textform background + text color based on mode prop
  const containerStyle = {
    background: darkGradientBackground,
    color: props.mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '40px 20px',
    transition: 'all 0.5s ease',
  };

  // Card style similar to Textform card styling
  const cardStyle = {
    background: lightPurpleCardBackground,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '2rem auto',
  };

  // Input style aligned with Textform input
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.5rem',
    borderRadius: '10px',
    border: '2px solid',
    borderColor: props.mode === 'light' ? '#ced4da' : '#6c757d',
    fontSize: '1rem',
    backgroundColor: props.mode === 'light' ? '#ffffff' : '#495057',
    color: props.mode === 'light' ? '#212529' : '#f8f9fa',
    transition: 'all 0.3s ease',
  };

  // Button style matching Textform buttons
  const buttonStyle = {
    backgroundColor: '#6c5ce7', // same purple
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold' }}>
          📱 QR Code Generator
        </h2>

        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={inputStyle}
        />

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <QRCodeCanvas
            value={text || ' '}
            size={220}
            bgColor={props.mode === 'light' ? '#ffffff' : '#2a1b6d'}
            fgColor={props.mode === 'light' ? '#000000' : '#fff'}
            level="H"
            includeMargin={true}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={downloadQRCode} style={buttonStyle}>
            Download QR Code
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  );
}
