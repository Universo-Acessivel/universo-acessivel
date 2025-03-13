import React, { useContext } from 'react';
import './Description.css';
import { TextReaderContext } from '../../context/TextReaderContext';

function Description() {
  const { isTextReaderEnabled } = useContext(TextReaderContext);

  const handleTextRead = (text) => {
      if (isTextReaderEnabled) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "pt-BR";
          window.speechSynthesis.speak(utterance);
      }
  };

  return (
    <div id="sobreNos" className='description-container'>
        <p 
          className='project-description'
          onClick={(e) => handleTextRead(e.currentTarget.textContent)}
          onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
        >   
            “O Universo Acessível tem enfoque na produção de recursos didáticos adaptados em diferentes formatos 
            servindo de apoio para alunos do Ensino Fundamental com deficiência visual, buscando estimular o conhecimento 
            nessa área. Desenvolvemos objetos 3D, feitos com material de baixo custo que podem ser replicados mediante 
            instruções disponibilizadas pelo projeto, cadernos táteis, jogos e livros falados. O público-alvo de nossa 
            ação são pessoas cegas e com baixa visão, em especial os alunos do 
            <a class="link-IBC" href="https://www.gov.br/ibc/pt-br" target='blank' referrerPolicy='noopener noreferrer' title='Acessar Instituto Benjamin Constant'> Instituto Benjamin Constant (IBC)</a> 
            . No entanto, atingimos estudantes de todo o Brasil, uma vez que o IBC distribui o material criado pelo nosso 
            grupo. Testes iniciais, realizados em sala de aula mostram a eficiência na utilização desse material como 
            apoio para o ensino de astronomia e motivador para estudantes seguirem a carreira em ciências.
            <br></br>
            <br></br>
            Nossa parceria com o IBC se dá através do projeto “Ciência ao alcance das mãos”. Além do IBC  iniciamos 
            recentemente uma parceria com o Espaço Nave – Casa da Ciência/Planetário, Maricá, RJ, que irá 
            expor e compartilhar nossos produtos divulgando e atingindo um público maior e mais diverso. 
            Nosso projeto é inclusivo mas não exclusivo. Todos estão convidados a conhecer o universo através de 
            nossos materiais”
        </p>
        <p 
          className='teacher-info'
          onClick={() => handleTextRead('Silvia Lorenz-Martins. Professora e Coordenadora Acadêmica - s lorenz@o v ponto u f r j ponto b r')}
          onMouseEnter={() => handleTextRead('Silvia Lorenz-Martins. Professora e Coordenadora Acadêmica - s lorenz@o v ponto u f r j ponto b r')}
        >
            Silvia Lorenz-Martins
            <br></br>
            <br></br>
            Professora e Coordenadora Acadêmica - slorenz@ov.ufrj.br
        </p>
    </div>
  );
}

export default Description;