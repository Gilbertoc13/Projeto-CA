import { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="header">
        <nav>
          <ul className={`menu ${isOpen ? 'show' : 'hide'}`}>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <ul className="acess">
            <li><Link to="/cadastro">Cadastro</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

      




      </header>
      
    );
  }
  
  export default Header;