import React, { useContext } from 'react';
import './Projects.css';
import Job from './Job/Job.js';
import KitMarte from '../.././assets/kitmarte.jpg';
import KitLua from '../.././assets/kitlua.jpg';
import Jogos from '../.././assets/jogos.jpg';
import CadernosTateis from '../.././assets/cadernosTateis.jpg'
import LivrosFalados from '../.././assets/livros.jpg'

import { TextReaderContext } from '../../context/TextReaderContext.js';

function Projects() {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-BR";
          window.speechSynthesis.speak(utterance);
      }
  };
  
  // Dados dos trabalhos (jobs)
  const jobsData = [
    {
      imgSrc: CadernosTateis,
      alt: "Foto da página sobre Eclipses Lunares.",
      title: "Cadernos Táteis",
      description: "Desenvolvemos textos com figuras táteis associados a material 3D para fixar o aprendizado. O material produzido tem como diretriz a BNCC. Os cadernos táteis devem ser solicitados ao IBC.",
      link: "https://drive.google.com/drive/folders/14eBDu8FBGdR4tjfgtNsKkQNnzRfd1DRM?usp=sharing"
    },
    {
      imgSrc: LivrosFalados,
      alt: "Foto do estúdio utilizado para gravação de livros falados no Instituto Benjamin Constant",
      title: "Livros Falados",
      description: "O livro falado é um recurso de tecnologia assistiva para pessoas com deficiência visual proporcionando autonomia e liberdade de pensamento ao leitor, através de uma leitura branca, voz clara e bem pontuada.",
      link: "https://drive.google.com/drive/folders/1tlMAdZHOj8Ovdag7lfZqhEUlcLejBV0r?usp=sharing"
    },
    {
      imgSrc: KitMarte,
      alt: "Foto da equipe montando o Kit Marte.",
      title: "Kit-Marte",
      description: "O Kit-Marte é um manual para produzir um mapa topográfico tátil de Marte. Nele você encontra moldes para a produção do mapa, bem como a localização das principais missões espaciais que visitaram o planeta. O Kit-Marte também descreve missões espaciais que estudaram Marte e seus resultados.",
      link: "https://drive.google.com/drive/folders/1DXd7M6s_u2V_GhfzIg5IQTXPyZJB4iFV?usp=sharing"
    },
    {
      imgSrc: KitLua,
      alt: "Foto da equipe montando a Lua tátil. Duas garotas estão acrescentando tecido em uma bola que representa a superfície lunar.",
      title: "Kit-Lua",
      description: "O Kit-Lua foi desenvolvido para que, quem desejar, possa criar uma Lua tátil. Nesse kit além de instruções para a confecção da Lua, seguem também um mapa da Lua, em forma de gomos e um texto descrevendo desde a formação da Lua, suas fases, eclipses e missões observacionais que visitaram nosso satélite.",
      link: "https://drive.google.com/drive/folders/1EgeXsQKbcdyx1ZaZ48d279cV7Z1OKcer?usp=sharing"
    },
    {
      imgSrc: Jogos,
      alt: "Foto do tabuleiro do jogo Astrodicas.",
      title: "Jogos",
      description: "Os jogos didáticos têm se mostrado uma poderosa ferramenta de apoio para o ensino de ciências há muito tempo. O jogo pedagógico ou didático é aquele produzido com o objetivo de proporcionar determinadas aprendizagens, diferenciando-se do material pedagógico, por conter o aspecto lúdico. É uma alternativa interessante para melhorar o desempenho dos estudantes em alguns conteúdos de difícil aprendizagem. Desenvolvemos quatro jogos em nosso projeto.",
      link: "https://drive.google.com/drive/u/0/folders/1WG_RuCatV0rdC3TITFb66pSXjcF1UYQs"
    }
  ];

  return (
    <div id="materiais" className='projects-container'>
      <div 
        className='projects-title section-title'
        onClick={(e) => handleTextRead(e.currentTarget.textContent)}
        onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
      >
        Material produzido
      </div>
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
    </div>
  );
}

export default Projects;
