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
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the menu after clicking a link
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
              onMouseEnter={() => handleTextRead('Home')}
            >
              Home
            </a>
          </div>
          <div className="text-box">
            <a
              href="#materiais"
              className={activeSection === 'materiais' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#materiais')}
              onMouseEnter={() => handleTextRead('Materiais')}
            >
              Materiais
            </a>
          </div>
          <div className="text-box">
            <a
              href="#sobreNos"
              className={activeSection === 'sobreNos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#sobreNos')}
              onMouseEnter={() => handleTextRead('Sobre nós')}
            >
              Sobre Nós
            </a>
          </div>
          <div className="text-box">
            <a
              href="#nossosTrabalhos"
              className={activeSection === 'nossosTrabalhos' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#nossosTrabalhos')}
              onMouseEnter={() => handleTextRead('Nossos Trabalhos')}
            >
              Nossos Trabalhos
            </a>
          </div>
          <div className="text-box">
            <a
              href="#equipe"
              className={activeSection === 'equipe' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, '#equipe')}
              onMouseEnter={() => handleTextRead('Equipe')}
            >
              Equipe
            </a>
          </div>
          <div className="text-box">
            <a
              href="#links"
              className={activeSection === 'links' ? 'active' : ''}
              onClick={handleDropdown}
              onMouseEnter={() => handleTextRead('Links')}
            >
              Links
              <FontAwesomeIcon icon={linkDropdownActive ? faChevronUp : faChevronDown} style={{ paddingLeft: '5px' }} />
            </a>
            {linkDropdownActive && (
              <div className="dropdown-menu">
                <a href="https://www.gov.br/ibc/pt-br"  target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleTextRead('Instituto Benjamin Constant')}>Instituto Benjamin Constant</a>
                <a href="https://www.instagram.com/cienciaaoalcancedasmaos"  target="_blank" rel="noopener noreferrer" onMouseEnter={() => handleTextRead('Ciência ao alcance das mãos')}>Ciência ao alcance das mãos</a>
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
                  <a href="https://www.instagram.com/cienciaaoalcancedasmaos"  target="_blank" rel="noopener noreferrer">Ciência ao alcance das mãos</a>
                </div>)}
        </div>
      )}
    </div>
  );
};

export default Header;
