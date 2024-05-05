import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/Context.jsx';
import { FaWhatsapp } from "react-icons/fa";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <div className="whatsappp-sidebar">
        <a href='https://wa.me/918790595858' target='_blank'><FaWhatsapp style={{ color: '#fff' }} /></a>
      </div>
    </ThemeProvider>
    <ToastContainer />

  </React.StrictMode>,
)
