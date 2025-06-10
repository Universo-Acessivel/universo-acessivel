import React, { useState, useContext } from 'react';
import './Sidebar.css';

import lupaMais from "../../assets/lupaMais.svg";
import lupaMenos from "../../assets/lupaMenos.svg";
import audioIcon from "../../assets/audioIcon.svg";
import notAudioIcon from "../../assets/notAudioIcon.svg";

import { TextReaderContext } from '../../context/TextReaderContext';

const Sidebar = ({ showWarning }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [fontSize, setFontSize] = useState(0);
    const [fontChangeCount, setFontChangeCount] = useState(0);

    const { isTextReaderEnabled, toggleTextReader } = useContext(TextReaderContext);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleKeyDown = (e, action) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
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

    return (
        <div className="sidebar">
            <div className={`sidebar-container ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <div className='sidebar-buttons'>
                    <img 
                        className="sidebar-icon" 
                        id="lupaMaisIcon" 
                        src={lupaMais} 
                        alt="Aumentar fonte" 
                        title='Aumentar a fonte' 
                        onClick={increaseFontSize}
                        onKeyDown={(e) => handleKeyDown(e, increaseFontSize)}
                        tabIndex={sidebarVisible ? 0 : -1}
                        role="button"
                    />
                    <img 
                        className="sidebar-icon" 
                        id="lupaMenosIcon" 
                        src={lupaMenos} 
                        alt="Diminuir fonte" 
                        title='Diminuir a fonte' 
                        onClick={decreaseFontSize}
                        onKeyDown={(e) => handleKeyDown(e, decreaseFontSize)}
                        tabIndex={sidebarVisible ? 0 : -1}
                        role="button"
                    />
                    <img 
                        className="sidebar-icon" 
                        id="audioIcon" 
                        src={isTextReaderEnabled ? audioIcon : notAudioIcon} 
                        alt={isTextReaderEnabled ? 'Pausar leitor de tela' : 'Ativar leitor de tela'} 
                        title={isTextReaderEnabled ? 'Pausar áudio' : 'Reproduzir áudio'} 
                        onClick={toggleTextReader}
                        onKeyDown={(e) => handleKeyDown(e, toggleTextReader)}
                        tabIndex={sidebarVisible ? 0 : -1}
                        role="button"
                    />
                </div>
            </div>
            <div 
                className={`accessibility-toggle ${sidebarVisible ? 'visible' : 'hidden'}`} 
                onClick={toggleSidebar} 
                onKeyDown={(e) => handleKeyDown(e, toggleSidebar)}
                title={`${sidebarVisible ? 'Fechar menu de acessibilidade' : 'Abrir menu de acessibilidade'}`}
                tabIndex={0}
                role="button"
                aria-label={`${sidebarVisible ? 'Fechar' : 'Abrir'} menu de acessibilidade`}
            >
                {sidebarVisible ? (
                    <svg className="toggle-icon white-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg className="toggle-icon white-icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88" width="48" height="48">
                        <title>accessibility</title>
                        <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z" fill="white"/>
                    </svg>
                )}
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
          font-size: ${ fontSize + 36 }px;
        }
        
        .project-description{
            font-size: ${ fontSize + 32 }px;
        }

        .job-description{
            font-size: ${ fontSize + 18 }px;
        }
        
        .teacher-info{
            font-size: ${ fontSize + 20 }px;
        }

        /* Menções Honrosas */

        .mh-text {
            font-size: ${ fontSize + 16 }px;
        }

        .institutions-name{
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
                font-size: ${ fontSize + 32 }px;
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
              font-size: ${ fontSize + 26 }px;
            }
        }
        
        @media screen and (max-width: 976px) {
            .section-description{
                font-size: ${ fontSize + 18 }px;
            }
            .subtitle-1,
            .subtitle-2 {
              font-size: ${ fontSize + 20 }px;
            }

        }
        
        @media screen and (max-width: 650px) {
            .project-description, .link-IBC{
                font-size: ${ fontSize + 26 }px;
            }

            .mh-text {
                font-size: ${ fontSize + 14 }px;
            }
        }

        .toggle-icon.white-icon {
            color: white;
            width: 48px;
            height: 48px;
            min-width: 48px;
            min-height: 48px;
            display: inline-block;
            vertical-align: middle;
        }
      `}</style>
        </div>
    );
};

export default Sidebar;
