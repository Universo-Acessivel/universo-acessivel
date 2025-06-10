import React, { useContext } from 'react';
import './Material.css';
import { TextReaderContext } from '../../../context/TextReaderContext';

function Material({ imgSrc, alt, size, title, text, linkText, className, downloadLink }){
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
    <div className={`material-container ${className}`}>
        <div className="material-icon-wrapper">
          <img id="icons" src={imgSrc} alt={alt} />
        </div>
        
        <div 
          className='material-title subsection-title'
          onClick={() => handleTextRead(title)}
          onMouseEnter={() => handleTextRead(title)}
        >
          {title}
        </div>
        
        <div 
          className='material-text section-description'
          onClick={() => handleTextRead(text)}
          onMouseEnter={() => handleTextRead(text)}
        >
          {text}
        </div>
        
        <a 
          className="material-link" 
          href={downloadLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => handleTextRead(linkText)}
        >
          {linkText}
        </a>
    </div>
  );
};

export default Material;