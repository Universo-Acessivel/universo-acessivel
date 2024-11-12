import React, { useContext } from 'react';
import './Material.css';
import { TextReaderContext } from '../../../context/TextReaderContext';

function Material({ imgSrc, alt, size, title, text, linkText, className, downloadLink }){
  const imageSize = {
    'min-width': size,
    'min-height': size
  };

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
        <img id="icons" src={imgSrc} alt={alt} style={imageSize} />
        <div 
          className='material-title subsection-title'
          onClick={() => handleTextRead(title)}
          onMouseEnter={() => handleTextRead(title)}
        >
          {title}
        </div>
        <br></br>
        <div 
          className='material-text section-description'
          onClick={() => handleTextRead(text)}
          onMouseEnter={() => handleTextRead(text)}
        >
          {text}
        </div>
        <br></br>
        <a 
          className="section-description" 
          href={downloadLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseEnter={() => handleTextRead(linkText)} // decidi tirar o onClick porque não quero que o texto seja reproduzido quando o usuário quer acessar de fato o material
        >
          {linkText}
        </a>
    </div>
  );
};

export default Material;