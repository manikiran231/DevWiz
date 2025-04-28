import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ mode, toggleTheme }) {
  const navigate = useNavigate();

  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)'; // based on your uploaded image

  const containerStyle = {
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  const cardBaseStyle = {
    background: mode === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.08)', // slightly lighter than before
    border: mode === 'light' ? '1px solid #ddd' : '1px solid rgba(255,255,255,0.15)',
    color: mode === 'light' ? '#000' : '#fff',
    borderRadius: '12px',
    boxShadow: mode === 'light'
      ? '0 4px 8px rgba(0, 0, 0, 0.1)'
      : '0 4px 15px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: mode === 'light'
      ? '0 8px 16px rgba(0, 0, 0, 0.2)'
      : '0 8px 20px rgba(0, 0, 0, 0.8)',
  };

  const buttonStyle = {
    backgroundColor: mode === 'light' ? '#0d6efd' : '#6c5ce7',
    border: 'none',
    marginTop: '10px',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  const handleNavigation = (tool) => {
    navigate(`/${tool}`);
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div style={containerStyle}>
      <div className="container text-center">
        <h1 className="mb-5">🛠️ Tools Dashboard</h1>

        <div className="row">
          {[
            { title: '📝 Text Analyzer', desc: 'Analyze your text for readability, word count, time taken to read, speech text and more.', route: 'textutils' },
            { title: '🎨 Color Picker', desc: 'Pick any color you need for your design or project.', route: 'colorpicker' },
            { title: '🔧 JSON Formatter', desc: 'Format and beautify your JSON data quickly and effectively.', route: 'jsonformatter' },
            { title: '⏱️ Typing Test', desc: 'Test your typing speed and improve your typing skills.', route: 'typingtest' },
            { title: '🔑 Password Generator', desc: 'Generate secure and random passwords for your accounts.', route: 'passwordgenerator' },
            { title: '📄 Lorem Ipsum Generator', desc: 'Generate dummy text for your design mockups and projects.', route: 'loremgenerator' }
          ].map((tool, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card mb-4"
                style={{
                  ...cardBaseStyle,
                  ...(hoveredIndex === idx ? cardHoverStyle : {})
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleNavigation(tool.route)}
              >
                <div className="card-body">
                  <h5 className="card-title">{tool.title}</h5>
                  <p className="card-text">{tool.desc}</p>
                  <button
                    className="btn btn-primary"
                    style={buttonStyle}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click trigger
                      handleNavigation(tool.route);
                    }}
                  >
                    Go to Tool
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
