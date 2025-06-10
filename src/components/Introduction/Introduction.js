// Introduction.js
import React, { useContext } from 'react';
import { TextReaderContext } from '../../context/TextReaderContext';
import './Introduction.css';
import logo from "../.././assets/Horizontal Branca RGB.png";
import ov_logo from "../.././assets/OV-Logo.svg";
import UFRJ_logo from "../.././assets/UFRJ-Logo.svg";

const Introduction = () => {
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
    <div id="home" className="gradient-container">
      <div className="intro-text">
        <img 
          src={logo} 
          alt="Logotipo Universo Acessível"
          className="main-logo"
          onClick={(e) => handleTextRead("Universo Acessível")}
          onMouseEnter={(e) => handleTextRead("Universo Acessível")}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleTextRead("Universo Acessível");
            }
          }}
        />
        <div 
          className="subtitle-1" 
          onClick={(e) => handleTextRead(e.currentTarget.textContent)}
          onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleTextRead(e.currentTarget.textContent);
            }
          }}
        >
          Extensão de Acessibilidade UFRJ
        </div>
        <div 
          className="subtitle-2"
          onClick={(e) => handleTextRead(e.currentTarget.textContent)}
          onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleTextRead(e.currentTarget.textContent);
            }
          }}
        >
          Astronomia para pessoas com deficiência visual
        </div>
        <div className="logos">
          <a 
            href="https://ov.ufrj.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            tabIndex="0"
          >
            <img 
              src={ov_logo} 
              alt="Logo do Observatório do Valongo"
            />
          </a>
          <a 
            href="https://ufrj.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            tabIndex="0"
          >
            <img 
              src={UFRJ_logo} 
              alt="Logo da UFRJ"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
