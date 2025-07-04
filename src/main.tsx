import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Films from './components/Films';
import Contact from './components/Contact';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
); 