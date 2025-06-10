import React, { useContext } from 'react';
import './Footer.css';
import { TextReaderContext } from '../../context/TextReaderContext';

function Footer() {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-BR";
          window.speechSynthesis.speak(utterance);
      }
  };
    return (
      <div className='footer-container'> 
        <div className='footer-content'>
          <div 
            className='footer-text'
            onClick={() => handleTextRead('Copyright 2025 Universo Acessível')}
            onMouseEnter={() => handleTextRead('Copyright 2025 Universo Acessível')}
          >
            Copyright © 2025 Universo Acessível
          </div>
          <div 
            className='footer-text developers'
            onClick={() => handleTextRead('Desenvolvido por Eduarda Marques, Gustavo Villar, Victor Pereira, Matheus Duque e Matheus Hack')}
            onMouseEnter={() => handleTextRead('Desenvolvido por Eduarda Marques, Gustavo Villar, Victor Pereira, Matheus Duque e Matheus Hack')}
          >
            Desenvolvido por Eduarda Marques, Gustavo Villar, Victor Pereira, Matheus Duque e Matheus Hack.
          </div>
        </div>
      </div>
    );
  }
  
export default Footer;