import React, { useState, useEffect, useContext } from 'react';
import './Projects.css';
import Job from './Job/Job.js';
import KitLua from '../.././assets/kitlua.jpg';
import Jogos from '../.././assets/jogos.jpg';
import Expo from '../.././assets/expo.jpg';
import { TextReaderContext } from '../../context/TextReaderContext.js';

function Projects() {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
      }
  };

  // Largura onde há a quebra para slides arrastáveis
  const breakpoint = 976;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

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

  const handleTouchStart = (e) => {
    // Store the initial touch position
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    // Calculate the distance of touch movement
    const deltaX = touchStartX - e.changedTouches[0].clientX;
    const dragThreshold = 50;
  
    // Determine the direction of the swipe
    if (deltaX > dragThreshold) {
      handlePrevSlide();
    } else if (deltaX < -dragThreshold) {
      handleNextSlide();
    }
  };
  
  

  const numberOfSlides = 3; // Update this with the actual number of slides

  // Dados dos trabalhos (jobs)
  const jobsData = [
    {
      imgSrc: KitLua,
      alt: "Foto da equipe montando a Lua tátil.",
      title: "Kit-Lua",
      description: "O Kit-Lua foi desenvolvido para que, quem desejar, possa criar uma Lua tátil. Nesse kit além de instruções para a confecção da Lua, seguem também um mapa da Lua, em forma de gomos e um texto descrevendo desde a formação da Lua, suas fases, eclipses e missões observacionais que visitaram nosso satélite.",
      link: "https://drive.google.com/drive/folders/1EgeXsQKbcdyx1ZaZ48d279cV7Z1OKcer?usp=sharing"
    },
    {
      imgSrc: Jogos,
      alt: "Foto do tabuleiro do jogo Astrodicas.",
      title: "Jogos",
      description: "Os jogos didáticos têm se mostrado uma poderosa ferramenta de apoio para o ensino de ciências há muito tempo. O jogo pedagógico ou didático é aquele produzido com o objetivo de proporcionar determinadas aprendizagens, diferenciando-se do material pedagógico, por conter o aspecto lúdico. É uma alternativa interessante para melhorar o desempenho dos estudantes em alguns conteúdos de difícil aprendizagem. Desenvolvemos quatro jogos em nosso projeto."
    },
    {
      imgSrc: Expo,
      alt: "Foto da equipe fazendo uma exposição no Centro de Tecnologia, localizado no campus Fundão.",
      title: "Exposições",
      description: "A equipe também realiza palestras e exposições em eventos como o Festival do Conhecimento e a Semana de Integração Acadêmica, com o intuito de divulgar o projeto ao público geral.",
      link: "https://drive.google.com/drive/folders/180KtgmNxMRVIL7WyN1DReHxp-nwWlbh3?usp=sharing"
    }
  ];

  // Verifica se a largura da janela é maior que o breakpoint
  const isDesktop = windowWidth > breakpoint;

  return (
    <div id="nossosTrabalhos" className='projects-container'>
      <div 
        className='projects-title section-title'
        onClick={() => handleTextRead('Mais alguns trabalhos desenvolvidos')}
        onMouseEnter={() => handleTextRead('Mais alguns trabalhos desenvolvidos')}
      >
        Mais alguns trabalhos desenvolvidos
      </div>
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
              link={job.link}
            />
          ))}
        </div>
      ) : 
      // Se a largura é pequena
      (
        <div 
          className="carousel" 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {jobsData.map((job, index) => (
            <div key={index} className={`carousel-item ${currentSlide === index ? "carousel-item-visible" : ""}`}>
              <Job
                imgSrc={job.imgSrc}
                alt={job.alt}
                title={job.title}
                description={job.description}
                link={job.link}
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
