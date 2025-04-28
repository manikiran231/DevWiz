import React, { useState } from 'react';

export default function LoremGenerator({ mode }) {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState('');

  const generateLorem = (numParagraphs) => {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Proin ac dui dui. Integer et nulla sit amet felis fermentum cursus et vel justo. Fusce mollis nisl non felis accumsan, ac consequat erat suscipit. Donec congue volutpat dui et tincidunt. Cras quis hendrerit justo. Suspendisse potenti.\n\nCurabitur sollicitudin vestibulum eros, vitae fringilla ipsum aliquet at. Sed vel massa id sapien fringilla facilisis. Mauris a mi felis. Donec sollicitudin, metus nec vestibulum egestas, ex nulla tristique ante, eget luctus ipsum justo at ligula.\n\nPhasellus dictum lectus ut velit malesuada, et fermentum felis facilisis. Nam quis rhoncus turpis. Duis feugiat sollicitudin magna id lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Morbi id neque ac risus feugiat faucibus ac sed augue.`;

    let newLoremText = '';
    for (let i = 0; i < numParagraphs; i++) {
      newLoremText += lorem + '\n\n';
    }

    setLoremText(newLoremText.trim());
  };

  // Dark gradient background for the page in dark mode
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    minHeight: '100vh',
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground, // Apply the background gradient based on mode
    color: mode === 'light' ? '#000' : '#fff',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  // Styles for input fields (number of paragraphs) and textarea (output)
  const inputFieldStyle = {
    backgroundColor: mode === 'light' ? 'rgb(68, 60, 105)' : '#rgb(68, 60, 105)',
    color: mode === 'light' ? 'black' : 'black',
    borderColor: mode === 'light' ? '#ced4da' : '#555',
  };

  const outputFieldStyle = {
    backgroundColor: mode === 'light' ? '#ffffff' : '#444',
    color: mode === 'light' ? 'black' : '#fff',
    borderColor: mode === 'light' ? '#ced4da' : '#555',
  };

  return (
    <div style={containerStyle}>
      <div className="container text-center">
        <h2 className="mb-4">📝 Lorem Ipsum Generator</h2>

        <div className="mb-3">
          <label className="form-label">Number of Paragraphs:</label>
          <input
            type="number"
            className="form-control"
            value={paragraphs}
            onChange={(e) => setParagraphs(e.target.value)}
            min="1"
            max="10"
            style={inputFieldStyle} // Apply styles for input field
          />
        </div>

        <button
          className="btn btn-primary my-3"
          onClick={() => generateLorem(paragraphs)}
        >
          Generate Lorem Ipsum
        </button>

        {loremText && (
          <div className="mt-4">
            <h4>Generated Lorem Ipsum</h4>
            <textarea
              className="form-control"
              rows="8"
              value={loremText}
              readOnly
              style={{ ...outputFieldStyle, resize: 'none' }} // Apply styles for output field
            />
            <button
              className="btn btn-success mt-3"
              onClick={() => { navigator.clipboard.writeText(loremText); alert('Copied to clipboard!'); }}
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
