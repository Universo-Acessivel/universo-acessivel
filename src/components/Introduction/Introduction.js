// Introduction.js
import React from 'react';
import './Introduction.css';
import logo from "../.././assets/Horizontal Branca RGB.png";

const Introduction = () => {
  return (
    <div className="gradient-container">
      <div className="intro-text">
       <div className="title"><b>Universo Acessível</b></div>
       <div className="subtitle-1">Extensão de Acessibilidade UFRJ</div>
       <div className="subtitle-2">Astronomia para pessoas cegas e de baixa visão</div>       
      </div>
      <div className="intro-img">
        <img src={logo} alt="logo"></img>
      </div>
      
    </div>
  );
};

export default Introduction;
