import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js';
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(

  <Router>
    <Routes>

      <Route path="/" element={<App />} />
 
    </Routes>
  </Router>,
)


