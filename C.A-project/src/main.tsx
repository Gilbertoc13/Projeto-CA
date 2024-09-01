import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import './index.css';
import About from './pages/About/about';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Cadastro from './pages/Cadastro/cadastro'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Cadastro'element={<Cadastro />} />
        <Route path='/About'element={<About />} />
        
      </Routes>
    </Router>
  </StrictMode>,
);
