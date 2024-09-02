import React, { useState } from 'react';
import './AudioWarning.css';

function AudioWarning() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null; // Não renderiza nada se o aviso não estiver visível

    return (
        <div className='overlay'>
            <div className='warning-container'>
                <button className='close-button' onClick={handleClose}>×</button>
                <h1 className='warning-title'>
                    O nosso site é acessível!
                </h1>
                <p className='warning-text'>
                    Você pode aumentar ou diminuir o texto e ativar ou desativar o leitor de tela no menu lateral à esquerda. Para ler um texto, basta passar o cursor sobre o texto ou clicar nele.
                </p>
            </div>
        </div>
    );
}

export default AudioWarning;
