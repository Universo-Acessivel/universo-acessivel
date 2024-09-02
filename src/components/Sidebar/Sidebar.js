import React, { useState, useContext } from 'react';
import './Sidebar.css';

import leftArrow from "../../assets/leftarrow.svg";
import lupaMais from "../../assets/lupaMais.svg";
import lupaMenos from "../../assets/lupaMenos.svg";
import audioIcon from "../../assets/audioIcon.svg";
import notAudioIcon from "../../assets/notAudioIcon.svg";

import { TextReaderContext } from '../../context/TextReaderContext';

const Sidebar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [fontSize, setFontSize] = useState(0); // Tamanho de fonte inicial
    const [fontChangeCount, setFontChangeCount] = useState(0); // Contador de alterações de fonte

    const { isTextReaderEnabled, toggleTextReader } = useContext(TextReaderContext);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const increaseFontSize = () => {
        if (fontChangeCount < 2) { // Limitar a duas alterações
            setFontSize(prevSize => prevSize + 2);
            setFontChangeCount(prevCount => prevCount + 1);
        }
    };

    const decreaseFontSize = () => {
        if (fontChangeCount > -2) { // Limitar a duas alterações
            setFontSize(prevSize => prevSize - 2);
            setFontChangeCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="sidebar">
            <div className={`sidebar-container ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <div className='sidebar-buttons'>
                    <img className="lupaMaisIcon" src={lupaMais} alt="Ícone de lupa para aumentar" title='Aumentar a fonte' onClick={increaseFontSize}></img>
                    <img className="lupaMenosIcon" src={lupaMenos} alt="Ícone de lupa para diminuir" title='Diminuir a fonte' onClick={decreaseFontSize}></img>
                    <img className="audioIcon" src={isTextReaderEnabled ? audioIcon : notAudioIcon} alt="Ícone de áudio" title={isTextReaderEnabled ? 'Pausar áudio' : 'Reproduzir áudio'} onClick={toggleTextReader}></img>
                </div>
      </div>
      <div className={`back-button ${sidebarVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebar} title={`${sidebarVisible ? 'Fechar menu de acessibilidade' : 'Abrir menu de acessibilidade'}`}>
        <img className="arrow" src={leftArrow} alt="Seta para a esquerda"></img>
      </div>

      <style>{`
        .section-title{
            font-size: ${ fontSize + 48 }px;
        }
        
        .section-description{
            font-size: ${ fontSize + 20 }px;
        }
        
        .subsection-title{
            font-size: ${ fontSize + 30 }px;
        }
        
        .social-icons a {
            font-size: ${ fontSize + 24 }px;
          }
        
        
        .title{
            font-size: ${ fontSize + 64 }px;
        }
        
        .subtitle-1,
        .subtitle-2 {
          font-size: ${ fontSize + 26 }px;
        }
        
        .project-description{
            font-size: ${ fontSize + 32 }px;
        }
        
        .teacher-info{
            font-size: ${ fontSize + 20 }px;
        }
        
        /* Footer */
        .footer-text{
            font-size: ${ fontSize + 20 }px;
        }
        
        @media screen and (max-width: 1350px) {
            .title {
                font-size: ${ fontSize + 48 }px;
            }
            
            .subtitle-1,
            .subtitle-2 {
                font-size: ${ fontSize + 20 }px;
            }
        
            .video-title{
                font-size: ${ fontSize + 36 }px;
            }
        }
        
        @media (max-width: 1020px) {
            .title {
              font-size: ${ fontSize + 38 }px;
            }
          
            .subtitle-1,
            .subtitle-2 {
              font-size: ${ fontSize + 18 }px;
            }
        }
        
        @media screen and (max-width: 976px) {
            .section-description{
                font-size: ${ fontSize + 18 }px;
            }
        }
        
        @media screen and (max-width: 650px) {
            .project-description, .link-IBC{
                font-size: ${ fontSize + 26 }px;
            }
        }

      `}</style>

    </div>
  );
};

export default Sidebar;
