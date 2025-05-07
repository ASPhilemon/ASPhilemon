import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/latin-100.css';
import '@fontsource/roboto/latin-200.css';
import '@fontsource/roboto/latin-300.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-500.css';
import '@fontsource/roboto/latin-700.css';

import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
