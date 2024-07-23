import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from "../.././assets/Horizontal Branca RGB.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone da sandwich bar

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <img id="logoHeader" src={logo} alt="Logotipo do projeto." />
        <div className="nav-links">
          <div className="text-box">
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Home
            </a>
          </div>
          <div className="text-box">
            <a
              href="#materiais"
              className={activeSection === 'materiais' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#materiais')}
            >
              Materiais
            </a>
          </div>
          <div className="text-box">
            <a
              href="#sobreNos"
              className={activeSection === 'sobreNos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#sobreNos')}
            >
              Sobre Nós
            </a>
          </div>
          <div className="text-box">
            <a
              href="#nossosTrabalhos"
              className={activeSection === 'nossosTrabalhos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#nossosTrabalhos')}
            >
              Nossos Trabalhos
            </a>
          </div>
          <div className="text-box">
            <a
              href="#equipe"
              className={activeSection === 'equipe' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#equipe')}
            >
              Equipe
            </a>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '40px' }}>
          <div className="social-icons">
            <a href="https://www.instagram.com/universo.acessivel/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{color: "#FFFFFF",}} />
            </a> 
            <a href="https://www.facebook.com/universo.acessivel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{color: "#FFFFFF"}} />
            </a>
            <a href="https://www.youtube.com/@universoacessivel8272" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} style={{color: "#FFFFFF",}} />
            </a>
          </div>

          <div className="sandwich-bar" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} style={{color: "#FFFFFF"}} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="text-box">
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#home')}
            >
              Home
            </a>
          </div>
          <div className="text-box">
            <a
              href="#materiais"
              className={activeSection === 'materiais' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#materiais')}
            >
              Materiais
            </a>
          </div>
          <div className="text-box">
            <a
              href="#sobreNos"
              className={activeSection === 'sobreNos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#sobreNos')}
            >
              Sobre Nós
            </a>
          </div>
          <div className="text-box">
            <a
              href="#nossosTrabalhos"
              className={activeSection === 'nossosTrabalhos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#nossosTrabalhos')}
            >
              Nossos Trabalhos
            </a>
          </div>
          <div className="text-box">
            <a
              href="#equipe"
              className={activeSection === 'equipe' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#equipe')}
            >
              Equipe
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
