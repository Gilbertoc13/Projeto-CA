import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import './index.css';
import About from './pages/About/about';
import Home from './pages/Home/home';
import Cadastro from './pages/Cadastro/cadastro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro'element={<Cadastro />} />
        <Route path='/about'element={<About />} />
        
      </Routes>
    </Router>
  </StrictMode>,
);
