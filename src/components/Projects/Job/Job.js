import React, { useContext } from 'react';
import './Job.css';
import { TextReaderContext } from '../../../context/TextReaderContext';

function Job({ imgSrc, alt, title, description, link }) {
    const { isTextReaderEnabled } = useContext(TextReaderContext);

    const handleTextRead = (text) => {
        if (isTextReaderEnabled) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
      <div className='job-container'> 
            <img id="job-image" src={imgSrc} alt={alt} />
            <div className='job-title subsection-title'>
                {link ? (
                    <a 
                        href={link} 
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
            <div 
                className='job-description section-description'
                onClick={() => handleTextRead(description)}
                onMouseEnter={() => handleTextRead(description)}
            >
                {description}
            </div>
      </div>
    );
  }
  
  export default Job;