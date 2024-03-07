import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

/* 
* ATENÇÃO: FALTA FAZER 3 COISAS COM O HEADER: 
* 1 - Botar o header na porção direita da tela (página)
* 2 - Fazer com que o header permaneça no topo conforme o usuário rola a página pra baixo e pra cima
* 3 - Fazer com que o texto no header referente à seção que o usuário está fique destacada (isto é, com a font-family: 'Gravity' em vez da fonte 'Gravity-Light)
* Ex: Se o usuário está na parte de "Arquivos", a palavra "Arquivos" no header deverá estar com a fonte 'Gravity' e as demais estarão em 'Gravity-Light'.
*/

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="nav-links">
          <div className="text-box">
            <a href="#home">Home</a>
          </div>
          <div className="text-box">
            <a href="#arquivos">Arquivos</a>
          </div>
          <div className="text-box">
            <a href="#sobre-nos">Sobre Nós</a>
          </div>
          <div className="text-box">
            <a href="#contato">Contato</a>
          </div>
          <div className="text-box">
            <a href="#equipe">Equipe</a>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Header;
