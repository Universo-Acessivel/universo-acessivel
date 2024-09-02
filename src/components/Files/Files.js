import React, { useContext } from 'react';
import './Files.css';
import './Material/Material.js';
import Material from './Material/Material.js';
import Touch from '../.././assets/Touch-Icon.svg'
//import Puzzle from '../.././assets/Puzzle-Icon.svg'
import Book from '../.././assets/Book-Icon.svg'
import Article from '../.././assets/Article-Icon.svg'
import { TextReaderContext } from '../../context/TextReaderContext.js';

function Files(){
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
      }
  };

  return (
    <>
      <div 
        id="materiais" 
        className='files-title section-title'
        onClick={() => handleTextRead('Materiais')}
        onMouseEnter={() => handleTextRead('Materiais')}
      >
        Materiais
      </div> 
        <div className='files-container'>
          <Material 
              imgSrc={Touch} 
              alt={"Ícone representando um toque."}
              size={54}
              title={"Cadernos Táteis"}
              text={"Desenvolvemos textos com figuras táteis associados a material 3D para fixar o aprendizado. O material produzido tem como diretriz a BNCC. Os cadernos táteis devem ser solicitados ao IBC. Aqui temos as versões em pdf que podem ser usadas por todos. Nosso material é inclusivo, mas não exclusivo."}
              className="touch-icon" // classe personalizada para mexer na margem
              downloadLink="https://drive.google.com/drive/folders/14eBDu8FBGdR4tjfgtNsKkQNnzRfd1DRM?usp=sharing" // link do drive
          />
          {/*       
          NO MOMENTO, MANTER ESCONDIDO! MUDAR APENAS QUANDO A PROFESSORA PERMITIR

          <Material 
              imgSrc={Puzzle}
              alt={"Ícone de um quebra-cabeça."}
              size={40}
              title={"Jogos"}
              text={"São jogos didáticos com propósito do ensino da Astronomia."}
              downloadLink="" // link do drive
          />*/}
          <Material 
              imgSrc={Book} 
              alt={"Ícone de um livro."}
              size={48}
              title={"Livros"}
              text={"O livro falado é um recurso de tecnologia assistiva para pessoas com deficiência visual proporcionando autonomia e liberdade de pensamento ao leitor, através de uma leitura branca, voz clara e bem pontuada. "}
              className="book-icon" // classe personalizada para mexer na margem
              downloadLink="https://drive.google.com/drive/folders/1tlMAdZHOj8Ovdag7lfZqhEUlcLejBV0r?usp=sharing" // link do drive
          />
          <Material 
              imgSrc={Article} 
              alt={"Ícone de um artigo."}
              size={41}
              title={"Artigos"}
              text={"Artigos desenvolvidos pelo projeto, como capítulos de livros e resenhas que apresentam o trabalho produzido pela equipe e que podem ser utilizados como referências por outros pesquisadores e profissionais interessados no tema."}
              downloadLink="https://drive.google.com/drive/folders/1ECSC4wG24xgIcph_F8MkoyrnV8L-GAcl?usp=sharing" // link do drive
          />
        </div>
      </>
  );
};

export default Files;
