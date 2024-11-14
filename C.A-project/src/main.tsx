import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import './index.css';
import About from './pages/Sobre/about';
import Contato from './pages/Contato/contact'
import Logo from './pages/logo/logo';
import Cadastro from './pages/Cadastro/cadastro'
import Home from './pages/Home/home';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
     <Routes>
    <Route path="/" element={<Logo />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/Sobre" element={<About />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/home" element={<Home />} />
</Routes>

    </Router>
  </StrictMode>,
);
