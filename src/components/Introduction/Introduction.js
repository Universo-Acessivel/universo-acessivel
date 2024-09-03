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
            window.speechSynthesis.speak(utterance);
        }
    };

  return (
    <div id="home" className="gradient-container">
      <div className="intro-text">
        <div 
          className="title"
          onClick={() => handleTextRead('Universo Acessível')}
          onMouseEnter={() => handleTextRead('Universo Acessível')}
        >
          <b>Universo Acessível</b>
        </div>
        <div 
          className="subtitle-1" 
          onClick={() => handleTextRead('Extensão de Acessibilidade UFRJ')}
          onMouseEnter={() => handleTextRead('Extensão de Acessibilidade UFRJ')}
        >
          Extensão de Acessibilidade UFRJ
        </div>
        <div 
          className="subtitle-2"
          onClick={() => handleTextRead('Astronomia para pessoas com deficiência visual')}
          onMouseEnter={() => handleTextRead('Astronomia para pessoas com deficiência visual')}
        >
          Astronomia para pessoas cegas e de baixa visão
        </div>
        <div className="logos">
          <img src={ov_logo} alt="Logo do Observatório do Valongo."></img>
          <img src={UFRJ_logo} alt="Logo da UFRJ."></img>
        </div>
      </div>
      <div className="intro-img">
        <img id="logo" src={logo} alt="Logotipo do projeto."></img>
      </div>

    </div>
  );
};

export default Introduction;
