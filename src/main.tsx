import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css';
import React from 'react'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
