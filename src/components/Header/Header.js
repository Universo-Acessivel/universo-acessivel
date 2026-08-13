import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import logo from "../.././assets/Horizontal Branca RGB.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TextReaderContext } from '../../context/TextReaderContext';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'trabalhos', label: 'Trabalhos' },
  { id: 'sobreNos', label: 'Sobre Nós' },
  { id: 'materiais', label: 'Materiais' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'colaboradores', label: 'Parcerias' },
];

const EXTERNAL_LINKS = [
  { href: 'https://www.gov.br/ibc/pt-br', label: 'Instituto Benjamin Constant' },
  { href: 'https://www.instagram.com/cienciaaoalcancedasmaos', label: 'Ciência ao Alcance das Mãos' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/universo.acessivel/', icon: faInstagram, label: 'Nosso Instagram' },
  { href: 'https://www.facebook.com/universo.acessivel', icon: faFacebook, label: 'Nosso Facebook' },
  { href: 'https://www.youtube.com/@universoacessivel8272', icon: faYoutube, label: 'Nosso YouTube' },
];

const Header = () => {
  const { speak } = useContext(TextReaderContext);

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

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    }

    setMenuOpen(false);
    setLinkDropdownActive(false);
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    setLinkDropdownActive(!linkDropdownActive); // Toggle dropdown visibility
  };

  const sectionLink = ({ id, label }) => (
    <div className="text-box" key={id}>
      <a
        href={`#${id}`}
        className={activeSection === id ? 'active' : ''}
        aria-current={activeSection === id ? 'true' : undefined}
        onClick={(e) => handleLinkClick(e, `#${id}`)}
        onMouseEnter={(e) => speak(e.currentTarget.textContent)}
      >
        {label}
      </a>
    </div>
  );

  const dropdownToggle = (
    <button
      type="button"
      className="links-dropdown-toggle"
      onClick={handleDropdown}
      aria-expanded={linkDropdownActive}
      onMouseEnter={(e) => speak(e.currentTarget.textContent)}
    >
      Links
      <FontAwesomeIcon icon={linkDropdownActive ? faChevronUp : faChevronDown} style={{ paddingLeft: '5px' }} />
    </button>
  );

  const externalLink = ({ href, label }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => speak(e.currentTarget.textContent)}
    >
      {label}
    </a>
  );

  return (
    <header className="header-container">
      <div className="header-content">
        <img id="logoHeader" src={logo} alt="Universo Acessível" />
        <nav className="nav-links" aria-label="Navegação principal">
          {SECTIONS.map(sectionLink)}
          <div className="text-box">
            {dropdownToggle}
            {linkDropdownActive && (
              <div className="dropdown-menu">
                {EXTERNAL_LINKS.map(externalLink)}
              </div>
            )}
          </div>
        </nav>

        <div style={{ display: 'flex', gap: '40px' }}>
          <div className="social-icons">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={() => speak(label)}
              >
                <FontAwesomeIcon icon={icon} style={{ color: "#FFFFFF" }} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className="sandwich-bar"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" id="menu-mobile" aria-label="Navegação principal">
          {SECTIONS.map(sectionLink)}
          <div className="text-box">
            {dropdownToggle}
          </div>
          {linkDropdownActive && (
            <div className="mobile-dropdown-menu">
              {EXTERNAL_LINKS.map(externalLink)}
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
