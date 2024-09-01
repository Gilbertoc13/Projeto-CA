import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="header">
        <nav>
          <ul className={`menu ${isOpen ? 'show' : 'hide'}`}>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <ul className="acess">
            <li><Link to="/Cadastro">Cadastro</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </nav>

      




      </header>
      
    );
  }
  
  export default Header;