// Introduction.js
import React from 'react';
import './Introduction.css';
import logo from "../.././assets/Horizontal Branca RGB.png";
import ov_logo from "../.././assets/OV-Logo.svg";
import UFRJ_logo from "../.././assets/UFRJ-Logo.svg";

const Introduction = () => {
  return (
    <div className="gradient-container">
      <div className="intro-text">
        <div className="title"><b>Universo Acessível</b></div>
        <div className="subtitle-1">Extensão de Acessibilidade UFRJ</div>
        <div className="subtitle-2">Astronomia para pessoas cegas e de baixa visão</div>
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
