import React, { useContext } from 'react';
import './Job.css';
import { TextReaderContext } from '../../../context/TextReaderContext';

function Job({ imgSrc, alt, title, description, link }) {
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
      <div className='job-container'> 
            <img 
                id="job-image" 
                src={imgSrc} 
                alt={alt} 
                onClick={() => handleTextRead(`${alt}`)}
                onMouseEnter={() => handleTextRead(`${alt}`)}/>
            <div className='job-title subsection-title'>
                {link ? (
                    <a 
                        href={link} 
                        className='job-title'
                        target='_blank' 
                        rel='noreferrer noopener' 
                        title={`Ver ${title}`}
                        onClick={() => handleTextRead(title)}
                        onMouseEnter={() => handleTextRead(title)}
                    >
                        {title}
                    </a>
                ) : (
                    <span 
                        onClick={() => handleTextRead(title)}
                        onMouseEnter={() => handleTextRead(title)}
                    >
                        {title}
                    </span>
                )}
            </div>
            <p 
                className='job-description'
                onClick={() => handleTextRead(description)}
                onMouseEnter={() => handleTextRead(description)}
            >
                {description}
            </p>
      </div>
    );
  }
  
  export default Job;