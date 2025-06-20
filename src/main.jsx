import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  // note the '/client'
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
