import React, { useContext } from 'react';
import './Institutions.css';
import { TextReaderContext } from '../../../context/TextReaderContext';

function Institutions({image, name, link}){
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
        <div className='institutions-container'>
            <div className='institutions-images'>
                <img id="institutions-icons" src={image} alt={name}/>
            </div>
            <div 
                className='institutions-name'
                onClick={() => handleTextRead(name)}
                onMouseEnter={() => handleTextRead(name)}
            >
                <a href={link} target="_blank" rel='noopener noreferrer'>{name}</a>
            </div>
        </div>
    )
}

export default Institutions;