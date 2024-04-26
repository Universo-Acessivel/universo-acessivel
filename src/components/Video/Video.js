import React from 'react';
import './Video.css';

function Video() {
    return (
        <React.Fragment>
            <div className='video-container'>
                <div className='video-text'>
                    <div className='video-title section-title'>Confira nossos vídeos no YouTube</div>
                    <div className='video-description section-description'>Alguns dos nossos conteúdos estão disponíveis no YouTube. Inscreva-se e explore nosso acervo de vídeos!</div>
                </div>
                <iframe id='YT-video' src="https://www.youtube.com/embed/drZg5yoYHqk?si=qnypPDpnv-rOL6Xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </React.Fragment>
    );
  }
  
  export default Video;