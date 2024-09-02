import React, { useState, useContext } from 'react';
import './Sidebar.css';

import leftArrow from "../../assets/leftarrow.svg";
import lupaMais from "../../assets/lupaMais.svg";
import lupaMenos from "../../assets/lupaMenos.svg";
import audioIcon from "../../assets/audioIcon.svg";
import notAudioIcon from "../../assets/notAudioIcon.svg";
import infoIcon from "../../assets/infoIcon.webp";

import { TextReaderContext } from '../../context/TextReaderContext';

const Sidebar = ({ showWarning }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [fontSize, setFontSize] = useState(0);
    const [fontChangeCount, setFontChangeCount] = useState(0);

    const { isTextReaderEnabled, toggleTextReader } = useContext(TextReaderContext);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const increaseFontSize = () => {
        if (fontChangeCount < 2) {
            setFontSize(prevSize => prevSize + 2);
            setFontChangeCount(prevCount => prevCount + 1);
        }
    };

    const decreaseFontSize = () => {
        if (fontChangeCount > -2) {
            setFontSize(prevSize => prevSize - 2);
            setFontChangeCount(prevCount => prevCount - 1);
        }
    };

    const handleInfoClick = () => {
        showWarning();
    };

    return (
        <div className="sidebar">
            <div className={`sidebar-container ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <div className='sidebar-buttons'>
                    <img className="lupaMaisIcon" src={lupaMais} alt="Ícone de lupa para aumentar" title='Aumentar a fonte' onClick={increaseFontSize}></img>
                    <img className="lupaMenosIcon" src={lupaMenos} alt="Ícone de lupa para diminuir" title='Diminuir a fonte' onClick={decreaseFontSize}></img>
                    <img className="audioIcon" src={isTextReaderEnabled ? audioIcon : notAudioIcon} alt="Ícone de áudio" title={isTextReaderEnabled ? 'Pausar áudio' : 'Reproduzir áudio'} onClick={toggleTextReader}></img>
                    <img className="infoIcon" src={infoIcon} alt="Ícone de informação" title='Ler informações' onClick={handleInfoClick}></img>
                </div>
            </div>
            <div className={`back-button ${sidebarVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebar} title={`${sidebarVisible ? 'Fechar menu de acessibilidade' : 'Abrir menu de acessibilidade'}`}>
                <img className="arrow" src={leftArrow} alt="Seta para a esquerda"></img>
            </div>
        </div>
    );
};

export default Sidebar;
