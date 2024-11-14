import { useEffect, useRef, useState } from "react";
import './header_Home.css'
import home from '../../assets/icons8-home.svg'
import notificacao from '../../assets/icons8-notification (1).svg'
import configuracao from '../../assets/icons8-services.svg'
import perfil from '../../assets/4715007_avatar_detective_people_person_profile_icon.svg'
import logout from '../../assets/logout-svgrepo-com.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement | null> (null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    };

}, []);
  
return (
    <header>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav>
        <ul ref={menuRef} className={`menu ${isOpen ? "show" : ""}`}>
          <a href="home"><img src={home} /></a>
          <a href="notificação"><img src={notificacao} /></a>
          <a href="configuração"><img src={configuracao} /></a>
          <a href="/"><img src={logout}/></a>
        </ul>
      </nav>
      <div className="profile-icon">
          <img src={perfil} alt="Perfil" />
      </div>
    </header>
  );
}
  
  export default Header;