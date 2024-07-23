import React from 'react';
import './Job.css';

function Job({ imgSrc, alt, title, description }) {
    return (
      <div className='job-container'> 
            <img id="job-image" src={imgSrc} alt={alt} />
            <div className='job-title subsection-title'>
                {title}
            </div>
            <div className='job-description section-description'>
                {description}
            </div>
      </div>
    );
  }
  
  export default Job;