import React, { useContext } from 'react';
import './Files.css';
import Material from './Material/Material.js';
import Article from '../.././assets/Article-Icon.svg';
import Book from '../.././assets/Book-Icon.svg';
import Moon from '../.././assets/moonIcon.svg';
import Poster from '../.././assets/posterIcon.png'
import { TextReaderContext } from '../../context/TextReaderContext.js';

function Files(){
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-BR";
          window.speechSynthesis.speak(utterance);
      }
  };

  const materials = [
    {
      imgSrc: Article,
      alt: "Ícone representando um artigo.",
      size: 54,
      title: "Artigos",
      text: "Artigos desenvolvidos pelo projeto, como capítulos de livros e resenhas que apresentam o trabalho produzido pela equipe e que podem ser utilizados como referências por outros pesquisadores e profissionais interessados no tema.",
      linkText: "Acessar",
      className: "touch-icon", // classe personalizada para mexer na margem
      downloadLink: "https://drive.google.com/drive/folders/1ECSC4wG24xgIcph_F8MkoyrnV8L-GAcl?usp=sharing"
    },
    {
      imgSrc: Book,
      alt: "Ícone de um livro.",
      size: 48,
      title: "TCC",
      text: "O Universo Acessível já produziu dois Trabalhos de conclusão de curso. Um do Instituto de Física e outro do Observatório do Valongo, ambos da UFRJ. Se interessou? Pode baixar!",
      linkText: "Acessar",
      className: "book-icon",
      downloadLink: "https://drive.google.com/drive/folders/1-JJY-kN49pNIcyHGQMniq0XS1s8jqDFk?usp=sharing"
    },
    {
      imgSrc: Moon,
      alt: "Ícone de Lua.",
      size: 42,
      title: "Cadernos de astronomia",
      text: "Aqui você encontra os textos revistos e atualizados em pdf, do material criado, para ser usado por crianças videntes.",
      linkText: "Acessar",
      className: "book-icon", // classe personalizada para mexer na margem
      downloadLink: "https://drive.google.com/drive/folders/1n3PZnwTPaeBsgtFBq4p9Oiok3M_W_hbI?usp=sharing"
    },
    {
      imgSrc: Poster,
      alt: "Ícone representando um poster.",
      size: 50,
      title: "Trabalhos apresentados",
      text: "Confira alguns trabalhos apresentados na Sociedade Astronômica Brasileira!",
      linkText: "Acessar",
      className: "book-icon", // classe personalizada para mexer na margem
      downloadLink: "https://drive.google.com/drive/folders/1_qYQwtfOwH3S3vIITK7nmqf8lJEOM-7M?usp=sharing"
    },
  ]

  return (
    <>
      <div 
        id="trabalhos" 
        className='files-title section-title'
        onClick={(e) => handleTextRead(e.currentTarget.textContent)}
        onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
      >
        Trabalhos
      </div> 
        <div className='files-container'>
          {materials.map((material) => (
            <Material 
              imgSrc={material.imgSrc}
              alt={material.alt}
              size={material.size}
              title={material.title}
              text={material.text}
              linkText={material.linkText}
              className={material.className}
              downloadLink={material.downloadLink}
            />
          ))}
        </div>
      </>
  );
};

export default Files;
