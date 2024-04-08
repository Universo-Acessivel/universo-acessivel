import React from 'react';
import './Description.css';

function Description() {
  return (
    <div className='description-container'>
        <div className='project-description'>
            “O Universo Acessível tem enfoque na produção de recursos didáticos adaptados em diferentes 
            formatos servindo de apoio para alunos do Ensino Fundamental com deficiência visual, buscando 
            estimular o conhecimento nessa área. Desenvolvemos objetos 3D, feitos com material de baixo 
            custo que podem ser replicados mediante instruções disponibilizadas pelo projeto, cadernos táteis, 
            jogos e livros falados. O público-alvo de nossa ação são pessoas cegas e com baixa visão, em especial 
            os alunos do <a id="link-IBC" href="https://www.gov.br/ibc/pt-br" target='blank' referrerPolicy='no-referrer'>Instituto Benjamin Constant (IBC)</a>. No entanto, atingimos estudantes de todo o Brasil, 
            uma vez que o IBC distribui o material criado pelo nosso grupo. Testes iniciais, realizados em sala 
            de aula mostram a eficiência na utilização desse material como apoio para o ensino de astronomia e 
            motivador para estudantes seguirem a carreira em ciências.”
        </div>
        <div className='teacher-info'>
            Silvia Lorenz-Martins
            <br></br>
            <br></br>
            Professora e Coordenadora Acadêmica - slorenz@ov.ufrj.br
        </div>
    </div>
  );
}

export default Description;