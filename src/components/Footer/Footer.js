import React, { useContext } from 'react';
import './Footer.css';
import { TextReaderContext } from '../../context/TextReaderContext';

function Footer() {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
      }
  };
    return (
      <div className='footer-container'> 
        <div 
          className='footer-text'
          onClick={() => handleTextRead('Copyright 2024 Universo Acessível')}
          onMouseEnter={() => handleTextRead('Copyright 2024 Universo Acessível')}
        >
          Copyright © 2024 Universo Acessível
        </div>
      </div>
    );
  }
  
export default Footer;