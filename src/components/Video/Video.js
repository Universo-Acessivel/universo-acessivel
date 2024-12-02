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
                    <div 
                        className='video-title section-title'
                        onClick={() => handleTextRead('Confira nossos vídeos no YouTube')}
                        onMouseEnter={() => handleTextRead('Confira nossos vídeos no YouTube')}
                    >
                        Confira nossos vídeos no YouTube
                    </div>
                    <div 
                        className='video-description section-description'
                        onClick={() => handleTextRead('Alguns dos nossos conteúdos estão disponíveis no YouTube. Inscreva-se e explore nosso acervo de vídeos!')}
                        onMouseEnter={() => handleTextRead('Alguns dos nossos conteúdos estão disponíveis no YouTube. Inscreva-se e explore nosso acervo de vídeos!')}
                    >
                        Alguns dos nossos conteúdos estão disponíveis no YouTube. Inscreva-se e explore nosso acervo de vídeos!
                    </div>
                    <div 
                        className='video-description section-description'
                        onClick={() => handleTextRead('Você pode encontrar todos os nossos conteúdos aqui!')}
                        onMouseEnter={() => handleTextRead('Você pode encontrar todos os nossos conteúdos aqui!')}
                    >
                        Você pode encontrar todos os nossos conteúdos <a href="https://drive.google.com/drive/folders/1DB2tin4sbTMt5KBpCSzZEDf0YkzyhAZo?usp=sharing">aqui!</a>
                    </div>
                </div>
                <iframe id='YT-video' src="https://www.youtube.com/embed/drZg5yoYHqk?si=qnypPDpnv-rOL6Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </React.Fragment>
    );
  }
  
  export default Video;