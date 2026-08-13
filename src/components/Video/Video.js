import React, { useContext } from 'react';
import './Video.css';
import { TextReaderContext } from '../../context/TextReaderContext';

function Video() {
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
        <React.Fragment>
            <div className='video-container'>
                <div className='video-text'>
                    <h2
                        className='video-title section-title'
                        onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                        onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                    >
                        Confira nossos vídeos no YouTube
                    </h2>
                    <div 
                        className='video-description section-description'
                        onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                        onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                    >
                        Alguns dos nossos conteúdos estão disponíveis no YouTube. Inscreva-se e explore nosso acervo de vídeos!
                    </div>
                    <div 
                        className='video-description section-description'
                        onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                        onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                    >
                        Você pode encontrar e baixar todos os nossos conteúdos <a href="https://drive.google.com/drive/folders/1DB2tin4sbTMt5KBpCSzZEDf0YkzyhAZo?usp=sharing">aqui!</a>
                    </div>
                </div>
                <iframe id='YT-video' src="https://www.youtube.com/embed/drZg5yoYHqk?si=qnypPDpnv-rOL6Xw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </React.Fragment>
    );
  }
  
  export default Video;