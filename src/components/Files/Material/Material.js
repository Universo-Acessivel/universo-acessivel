import React from 'react';
import './Material.css';

function Material({ imgSrc, alt, size, title, text, className, downloadLink }){
  const imageSize = {
    'min-width': size,
    'min-height': size
  };

  return (
    <div className={`material-container ${className}`}>
        <img id="icons" src={imgSrc} alt={alt} style={imageSize} />
        <div className='material-title subsection-title'>{title}</div>
        <br></br>
        <div className='material-text section-description'>{text}</div>
        <br></br>
        <a className="section-description" href={downloadLink} target="_blank" rel="noopener noreferrer">Acessar</a>
    </div>
  );
};

export default Material;