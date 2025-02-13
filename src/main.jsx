import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.js';
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';

createRoot(document.getElementById('root')).render(

  <Router>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
 
    </Routes>
  </Router>,
)


