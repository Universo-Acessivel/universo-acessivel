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

    const mencoes = [
        { src: Material_MH, alt: "Certificado do trabalho: Material", text: "Visitação à coleção de instrumentos científicos do Observatório do Valongo/UFRJ: inclusão de material tátil para visitantes portadores de deficiência visual - SIAc 2014" },
        { src: Caderno_Tatil_MH, alt: "Certificado do trabalho: Caderno Tátil", text: "CADERNO TÁTIL DE ASTRONOMIA, VOLUME II: SISTEMA SOLAR E SISTEMAS EXTRASSOLARES - SIAc 2019" },
        { src: Lua_MH, alt: "Certificado do trabalho: Lua Tátil", text: "DESENVOLVIMENTO DE MATERIAL TÁTIL PARA ENSINO DE ASTRONOMIA PARA PESSOAS CEGAS E COM BAIXA VISÃO: A LUA - SIAc 2019" },
        { src: Astrodicas_MH, alt: "Certificado do trabalho: Astrodicas", text: "ASTRODICAS E UNIDADE ATRONÔMICA: ENSINO DE ASTRONOMIA INCLUSIVO - SIAc 2022" },
        { src: LivroFalado_MH, alt: "Certificado do trabalho: Livro Falado", text: "LIVRO FALADO COMO FERRAMENTA EDUCACIONAL INCLUSIVA NA ASTRONOMIA - SIAc 2022" },
        { src: Pequenos_Corpos_MH, alt: "Certificado do trabalho: Pequenos Corpos", text: "CONHECENDO OS PEQUENOS CORPOS DO SISTEMA SOLAR - SIAc 2023" },
        { src: Tateando_Marte_MH, alt: "Certificado do trabalho: Tateando Marte", text: "TATEANDO MARTE - SIAc 2023" },
        { src: Site_Acessivel_MH, alt: "Certificado do trabalho: Site Acessível", text: "UM SITE ACESSÍVEL PARA O UNIVERSO ACESSÍVEL - SIAc 2024" },
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
                    <div className='mh-image-and-text' key={index}>
                        <img 
                            src={mencao.src} 
                            className='mh-image' 
                            alt={mencao.alt}
                            onClick={(e) => handleTextRead(e.currentTarget.alt)}
                            onMouseEnter={(e) => handleTextRead(e.currentTarget.alt)}
                        />
                        <p
                            className='mh-text'
                            onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                            onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                        >
                            {mencao.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MencoesHonrosas;
