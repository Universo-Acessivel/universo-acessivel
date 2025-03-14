import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import logo from "../.././assets/Horizontal Branca RGB.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TextReaderContext } from '../../context/TextReaderContext';

const Header = () => {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-BR";
          window.speechSynthesis.speak(utterance);
      }
  };

  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [linkDropdownActive, setLinkDropdownActive] = useState(false);

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
    const element = document.querySelector(sectionId);
  
    if (element) {
      const headerOffset = parseFloat(getComputedStyle(document.documentElement).fontSize) * 5; // 5em: header height + 1em margin
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  
    setMenuOpen(false);
    setLinkDropdownActive(false);
  };
  
  const handleDropdown = (e) => {
    e.preventDefault();
    setLinkDropdownActive(!linkDropdownActive); // Toggle dropdown visibility
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
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Home
            </a>
          </div>
          <div className="text-box">
            <a
              href="#trabalhos"
              className={activeSection === 'trabalhos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#trabalhos')}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Trabalhos
            </a>
          </div>
          <div className="text-box">
            <a
              href="#sobreNos"
              className={activeSection === 'sobreNos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#sobreNos')}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Sobre Nós
            </a>
          </div>
          <div className="text-box">
            <a
              href="#materiais"
              className={activeSection === 'materiais' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#materiais')}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Materiais
            </a>
          </div>
          <div className="text-box">
            <a
              href="#equipe"
              className={activeSection === 'equipe' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#equipe')}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Equipe
            </a>
          </div>
          <div className="text-box">
            <a
              href="#colaboradores"
              className={activeSection === 'colaboradores' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#colaboradores')}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Parcerias
            </a>
          </div>
          <div className="text-box">
            <a
              href="#links"
              className={activeSection === 'links' ? 'active' : ''}
              onClick={handleDropdown}
              onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
              Links
              <FontAwesomeIcon icon={linkDropdownActive ? faChevronUp : faChevronDown} style={{ paddingLeft: '5px' }} />
            </a>
            {linkDropdownActive && (
              <div className="dropdown-menu">
                <a 
                  href="https://www.gov.br/ibc/pt-br"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                Instituto Benjamin Constant
                </a>
                <a 
                  href="https://www.instagram.com/cienciaaoalcancedasmaos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                Ciência ao Alcance das Mãos
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '40px' }}>
          <div className="social-icons">
            <a href="https://www.instagram.com/universo.acessivel/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleTextRead('Nosso Instagram')}>
              <FontAwesomeIcon icon={faInstagram} style={{color: "#FFFFFF"}} />
            </a> 
            <a href="https://www.facebook.com/universo.acessivel" target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleTextRead('Nosso Facebook')}>
              <FontAwesomeIcon icon={faFacebook} style={{color: "#FFFFFF"}} />
            </a>
            <a href="https://www.youtube.com/@universoacessivel8272" target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleTextRead('Nosso YouTube')}>
              <FontAwesomeIcon icon={faYoutube} style={{color: "#FFFFFF"}} />
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
              href="#trabalhos"
              className={activeSection === 'trabalhos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#trabalhos')}
            >
              Trabalhos
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
              href="#materiais"
              className={activeSection === 'materiais' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#materiais')}
            >
              Materiais
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
          <div className="text-box">
            <a
              href="#colaboradores"
              className={activeSection === 'colaboradores' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#colaboradores')}
            >
              Colaboradores
            </a>
          </div>
          <div className="text-box">
            <a href="#links" onClick={handleDropdown}>
              Links
              <FontAwesomeIcon icon={linkDropdownActive ? faChevronUp : faChevronDown} style={{ paddingLeft: '5px' }} />
            </a>
            </div>
              {linkDropdownActive && (
                <div className="mobile-dropdown-menu">
                  <a href="https://www.gov.br/ibc/pt-br" target="_blank" rel="noopener noreferrer">
                    Instituto Benjamin Constant
                  </a>
                  <a href="https://www.instagram.com/cienciaaoalcancedasmaos"  target="_blank" rel="noopener noreferrer">Ciência ao Alcance das Mãos</a>
                </div>)}
        </div>
      )}
    </div>
  );
};

export default Header;
