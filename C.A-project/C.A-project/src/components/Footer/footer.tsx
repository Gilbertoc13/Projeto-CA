

import logo from "../../assets/Logo.svg"
import "./style.css"


function Footer() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
            <p>Copyright © UEPB</p>
          </div>
          <div className="links-container">
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
