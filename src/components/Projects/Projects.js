import React, { useState, useEffect } from 'react';
import './Projects.css';
import Job from './Job/Job.js';
import Image from '../.././assets/default-image.png';

function Projects() {
  const breakpoint = 976;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === numberOfSlides - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1);
  };

  const numberOfSlides = 3; // Update this with the actual number of slides

  // Dados dos trabalhos (jobs)
  const jobsData = [
    {
      imgSrc: Image,
      alt: "texto alternativo",
      title: "Kit-Lua",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imgSrc: Image,
      alt: "texto alternativo",
      title: "Relevo da Lua",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imgSrc: Image,
      alt: "texto alternativo",
      title: "Exposição",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Verifica se a largura da janela é maior que o breakpoint
  const isDesktop = windowWidth > breakpoint;

  return (
    <div className='projects-container'>
      <div className='projects-title'>Nosso Trabalho</div>
      {isDesktop ? 
      // se a largura é grande
      (
        <div className='jobs'>
          {jobsData.map((job, index) => (
            <Job
              key={index}
              imgSrc={job.imgSrc}
              alt={job.alt}
              title={job.title}
              description={job.description}
            />
          ))}
        </div>
      ) : 
      //se a largura é pequena
      (
        <div className="carousel">
          {jobsData.map((job, index) => (
            <div key={index} className={`carousel-item ${currentSlide === index ? "carousel-item-visible" : ""}`}>
              <Job
                imgSrc={job.imgSrc}
                alt={job.alt}
                title={job.title}
                description={job.description}
              />
            </div>
          ))}
          <div className="carousel-actions">
            <button onClick={handlePrevSlide} aria-label="Previous">{'<'}</button>
            <button onClick={handleNextSlide} aria-label="Next">{'>'}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
