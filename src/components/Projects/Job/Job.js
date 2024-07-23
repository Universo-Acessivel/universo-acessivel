import React from 'react';
import './Job.css';

function Job({ imgSrc, alt, title, description, link }) {
    return (
      <div className='job-container'> 
            <img id="job-image" src={imgSrc} alt={alt} />
            <div className='job-title subsection-title'>
                {link ? (
                    <a href={link} target='_blank' rel='noreferrer noopener' title={`Ver ${title}`}>{title}</a>
                ) : (
                    <span>{title}</span>
                )}
            </div>
            <div className='job-description section-description'>
                {description}
            </div>
      </div>
    );
  }
  
  export default Job;