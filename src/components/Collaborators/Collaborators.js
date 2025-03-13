import * as React from 'react';
import './Collaborators.css';
import IBC_Logo from '../../assets/IBCLogo.svg';
import ciencia_Logo from '../../assets/cienciaLogo.svg';
import Planetario_Logo from '../../assets/PlanetarioLogo.svg';
import Institutions from './Institutions/Institutions.js';
import { useContext } from 'react';
import { TextReaderContext } from '../../context/TextReaderContext';

function Collaborators(){
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
        <div id="colaboradores" className='collaborators-wrapper'>
            <div className="collaborators-container">
                <div 
                    className='collaborators-title section-title'
                    onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                   Parcerias
                </div>
            </div>
            <div className='institutions-wrapper'>
                <Institutions
                    image={IBC_Logo}
                    name='Instituto Benjamin Constant'/>
  
                <Institutions
                    image={ciencia_Logo}
                    name='Ciência ao Alcance das Mãos'/>

                <Institutions
                    image={Planetario_Logo}
                    name='Espaço Nave - Planetário de Maricá'/>
            </div>    
        </div>
    )
}

export default Collaborators;