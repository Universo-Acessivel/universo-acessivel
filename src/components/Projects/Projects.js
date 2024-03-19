import React, { useState, useEffect } from 'react';
import './Projects.css';
import Job from './Job/Job.js';
import Image from '../.././assets/default-image.png';

function Projects() {
  // Largura onde há a quebra para slides arrastáveis
  const breakpoint = 976;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Ir salvando a largura da página
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextSlide = () => {
    // se estiver no último slide, volta para o primeiro, se não vai para o próximo
    setCurrentSlide(currentSlide === numberOfSlides - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevSlide = () => {
    // se estiver no primeiro slide, volta para o último, se não volta 1 normalmente
    setCurrentSlide(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1);
  };

  const handleDragStart = (e) => {
    // Captura a posição inicial do mouse no início do arrasto
    e.dataTransfer.setData("startX", e.clientX);
  };

  const handleDragEnd = (e) => {
    // Captura a posição final do mouse no final do arrasto
    const endX = e.clientX;
    const startX = parseInt(e.dataTransfer.getData("startX"));
    e.preventDefault();

    // Calcula a diferença entre a posição inicial e final
    const deltaX = endX - startX;

    // Define o limiar para considerar como arrasto
    const dragThreshold = 50;

    // Verifica se o arrasto atende ao limiar mínimo
    if (deltaX > dragThreshold) {
      handleNextSlide();
    } else if (deltaX < -dragThreshold) {
      handlePrevSlide();
    }
    
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
      // Se a largura é grande
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
      // Se a largura é pequena
      (
        <div 
          className="carousel" 
          onDragStart={handleDragStart} 
          onDragEnd={handleDragEnd}
          draggable={true}
        >
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
            <button id="prev" onClick={handlePrevSlide} aria-label="Anterior">◀</button>
            <button id="next" onClick={handleNextSlide} aria-label="Próximo">▶</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
