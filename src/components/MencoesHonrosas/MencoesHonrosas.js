import React, { useContext } from 'react';
import "./MencoesHonrosas.css";
import { TextReaderContext } from '../../context/TextReaderContext';
import Astrodicas_MH from "../../assets/Astrodicas_UA_MH.jpg";
import Caderno_Tatil_MH from "../../assets/Caderno_Tatil_MH.jpg";
import LivroFalado_MH from "../../assets/LivroFalado_MH.jpg";
import Lua_MH from "../../assets/Lua_MH.jpg";
import Material_MH from "../../assets/Material_MH.jpg";
import Pequenos_Corpos_MH from "../../assets/Pequenos_Corpos_MH.jpg";
import Tateando_Marte_MH from "../../assets/Tateando_Marte_MH.jpg";
import Site_Acessivel_MH from "../../assets/Site_Acessivel_MH.png";
import Maquetes_MH from "../../assets/Maquetes_MH.png";
import Pequenos_Corpos_MH_1 from "../../assets/Pequenos_corpos_MH_1.png";

function MencoesHonrosas() {
    const { isTextReaderEnabled } = useContext(TextReaderContext);

    const handleTextRead = (text) => {
        if (isTextReaderEnabled) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "pt-BR";
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleMencaoClick = (link) => {
        window.open(link, '_blank');
    };

    const mencoes = [
        {
            src: Maquetes_MH,
            alt: "Certificado do trabalho: Maquetes",
            title: "Caminhando No Observatório Do Valongo Através de Maquetes Táteis",
            event: "SIAc 2025",
            year: 2025,
            link: "https://drive.google.com/file/d/1H8SoEhh8yC5UVZMo4TMAv_f6oFD1KnLo/view?usp=sharing"
        },
        {
            src: Pequenos_Corpos_MH_1,
            alt: "Certificado do trabalho: Pequenos Corpos",
            title: "Conhecendo Os Pequenos Corpos Do Sistema Solar",
            event: "SIAc 2025",
            year: 2025,
            link: "https://drive.google.com/file/d/15ZBYUluxpJMW5XJfFRuo7XEJFvUJ4UYG/view?usp=sharing"
        },
        { 
            src: Site_Acessivel_MH, 
            alt: "Certificado do trabalho: Site Acessível", 
            title: "Um Site Acessível Para O Universo Acessível", 
            event: "SIAc 2024",
            year: 2024,
            link: "https://drive.google.com/file/d/1HkAUEvuTDwa7-e2RcDXKKJkiw5cqAYPc/view?usp=sharing" 
        },
        { 
            src: Pequenos_Corpos_MH, 
            alt: "Certificado do trabalho: Pequenos Corpos", 
            title: "Conhecendo Os Pequenos Corpos Do Sistema Solar", 
            event: "SIAc 2023",
            year: 2023,
            link: "https://drive.google.com/file/d/1Mx2dB7gawLTWuRqDUnWLivIESKb362hv/view?usp=sharing" 
        },
        { 
            src: Tateando_Marte_MH, 
            alt: "Certificado do trabalho: Tateando Marte", 
            title: "Tateando Marte", 
            event: "SIAc 2023",
            year: 2023,
            link: "https://drive.google.com/file/d/1XlFWCiadQbY1xNW5RS5-dgr4zUeAQ-Ud/view?usp=sharing" 
        },
        { 
            src: Astrodicas_MH, 
            alt: "Certificado do trabalho: Astrodicas", 
            title: "Astrodicas E Unidade Astronômica: Ensino De Astronomia Inclusivo", 
            event: "SIAc 2022",
            year: 2022,
            link: "https://drive.google.com/file/d/1ijetuYL_ZugS2OW7OpbwFXMaFji8Du4r/view?usp=sharing" 
        },
        { 
            src: LivroFalado_MH, 
            alt: "Certificado do trabalho: Livro Falado", 
            title: "Livro Falado Como Ferramenta Educacional Inclusiva Na Astronomia", 
            event: "SIAc 2022",
            year: 2022,
            link: "https://drive.google.com/file/d/14umAK-tSn2WyB57-E2DzCCz9rOo2CB0q/view?usp=sharing" 
        },
        { 
            src: Caderno_Tatil_MH, 
            alt: "Certificado do trabalho: Caderno Tátil", 
            title: "Caderno Tátil De Astronomia, Volume II: Sistema Solar E Sistemas Extrassolares", 
            event: "SIAc 2019",
            year: 2019,
            link: "https://drive.google.com/file/d/10UpzuXUuY1f_BiCtMppMeuNKVqLOoc2b/view?usp=sharing"
        },
        { 
            src: Lua_MH, 
            alt: "Certificado do trabalho: Lua Tátil", 
            title: "Desenvolvimento De Material Tátil Para Ensino De Astronomia Para Pessoas Cegas E Com Baixa Visão: A Lua", 
            event: "SIAc 2018",
            year: 2018,
            link: "https://drive.google.com/file/d/1BAz1pPI4BUoySWW_PtZJ7YX1Fv0p19jC/view?usp=sharing"
        },
        { 
            src: Material_MH, 
            alt: "Certificado do trabalho: Material", 
            title: "Visitação À Coleção De Instrumentos Científicos Do Observatório Do Valongo/UFRJ: Inclusão De Material Tátil Para Visitantes Portadores De Deficiência Visual", 
            event: "SIAc 2014",
            year: 2014,
            link: "https://drive.google.com/file/d/1amAJiSE_pbbRyDBXrV0VaGEa23mzcFhB/view?usp=sharing" 
        },
    ];

    return (
        <div className='mh-container'>
            <div className='mh-title section-title'>
                <p 
                    onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                Menções Honrosas
                </p>
            </div>
            <div 
                className='mh-description-container section-description'
                onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
            >
            Abaixo, temos alguns certificados de apresentações acadêmicas que reconheceram a excelência e importância do Universo Acessível. Confira!
            </div>
            <div className='mh-images-container'>
                {mencoes.map((mencao, index) => (
                    <div 
                        className='mh-image-and-text' 
                        key={index}
                        onClick={() => handleMencaoClick(mencao.link)}
                    >
                        <img 
                            src={mencao.src} 
                            className='mh-image' 
                            alt={mencao.alt}
                            onMouseEnter={(e) => handleTextRead(e.currentTarget.alt)}
                        />
                        <div className='mh-text-container'>
                            <h3 
                                className='mh-title-text'
                                onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                            >
                                {mencao.title}
                            </h3>
                            <p 
                                className='mh-event-text'
                                onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                            >
                                {mencao.event}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MencoesHonrosas;
