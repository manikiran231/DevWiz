import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SAMPLE_DOMAINS = [
  'spammycat.com',
  'junkmail.net',
  'trashmail.org',
  'fakemail.com',
  'dontspam.me',
  'temporary-email.com'
];

function randomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function SpamEmailGenerator(props) {
  const [emails, setEmails] = useState([]);

  const generateEmails = (count = 5) => {
    const newList = [];
    for (let i = 0; i < count; i++) {
      const namePart = randomString(6 + Math.floor(Math.random() * 4)); // 6–9 chars
      const domain = SAMPLE_DOMAINS[Math.floor(Math.random() * SAMPLE_DOMAINS.length)];
      newList.push(`${namePart}@${domain}`);
    }
    setEmails(newList);
  };

  // Backgrounds from your theme
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';
  const lightPurpleCardBackground = 'rgba(255, 255, 255, 0.08)';

  const containerStyle = {
    background: darkGradientBackground,
    color: props.mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '40px 20px',
    transition: 'all 0.5s ease',
  };

  const cardStyle = {
    background: lightPurpleCardBackground,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '2rem auto',
  };

  const inputStyle = {
    width: '60px',
    padding: '0.4rem',
    borderRadius: '10px',
    border: '2px solid',
    borderColor: props.mode === 'light' ? '#ced4da' : '#6c757d',
    fontSize: '1rem',
    backgroundColor: props.mode === 'light' ? '#ffffff' : '#495057',
    color: props.mode === 'light' ? '#212529' : '#f8f9fa',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    marginLeft: '1rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#6c5ce7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const emailItemStyle = {
    background: props.mode === 'light' ? '#fff' : '#3b3470',
    marginBottom: '0.7rem',
    padding: '0.6rem 1rem',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: props.mode === 'light' ? '1px solid #ddd' : '1px solid #5a5298',
    color: props.mode === 'light' ? '#000' : '#eee',
    fontWeight: '500',
  };

  const copyButtonStyle = {
    backgroundColor: '#6c5ce7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.4rem 0.8rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          📧 Spam Email Generator
        </h2>

        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <label style={{ fontWeight: '600' }}>
            How many emails?&nbsp;
            <input
              type="number"
              min="1"
              max="20"
              defaultValue={5}
              onChange={(e) => {
                const value = Math.min(Math.max(parseInt(e.target.value, 10) || 1, 1), 20);
                generateEmails(value);
              }}
              style={inputStyle}
            />
          </label>

          <button onClick={() => generateEmails(5)} style={buttonStyle}>
            Generate
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {emails.map((email, idx) => (
            <li key={idx} style={emailItemStyle}>
              <span>{email}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  toast.success(`Copied: ${email}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: props.mode === 'light' ? 'light' : 'dark',
                  });
                }}
                style={copyButtonStyle}
              >
                Copy
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}
