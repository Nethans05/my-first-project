// src/index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the updated import
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
