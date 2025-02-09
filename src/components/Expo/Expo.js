import React, { useContext } from 'react';
import './Expo.css';
import Grupo from '../../assets/grupo.jpg'
import { TextReaderContext } from '../../context/TextReaderContext';

function Expo() {
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
        <div className='expo-container'>
            <div className='expo-title section-title'>
                <p 
                    onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                Exposições e Oficinas
                </p>
            </div>
            <div className='expo-image-container'>
                <img 
                    className='expo-group' 
                    src={Grupo} 
                    alt="Foto da equipe do Universo Acessível reunida: 8 pessoas de pé atrás de uma mesa com maquetes, como o Kit Marte e o Kit Lua."
                    onClick={(e) => handleTextRead(e.currentTarget.alt)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.alt)}>
                </img>
            </div>
            <div 
                className='expo-description-container section-description'
                onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
            A equipe também realiza palestras e exposições em eventos como o Festival do Conhecimento e a Semana de Integração Acadêmica, com o intuito de divulgar o projeto ao público geral.
                <a 
                    href='https://drive.google.com/drive/folders/180KtgmNxMRVIL7WyN1DReHxp-nwWlbh3?usp=sharing' 
                    target='blank' 
                    referrerPolicy='noopener noreferrer'
                    onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                Confira nossas fotos!
                </a>
            </div>
        </div>
    );
}
  
  export default Expo;