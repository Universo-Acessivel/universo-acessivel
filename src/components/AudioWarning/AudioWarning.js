import React, { useState, useEffect, useRef } from 'react';
import './AudioWarning.css';

const AudioWarning = () => {
    // Verifica se o usuário já viu o aviso antes
    const [isVisible, setIsVisible] = useState(() => !localStorage.getItem('audioWarningShown'));
    const closeButtonRef = useRef(null);

    const handleClose = () => {
        setIsVisible(false);
        // Marca que o usuário já viu o aviso
        localStorage.setItem('audioWarningShown', 'true');
    };

    useEffect(() => {
        if (!isVisible) return;

        // O aviso abre sozinho no primeiro acesso e cobre a página inteira, então
        // o foco precisa entrar nele e Esc precisa fechar. Sem isso quem usa
        // teclado continua tabulando no conteúdo atrás do overlay.
        closeButtonRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };

        document.addEventListener('click', handleClose);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleClose);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className='overlay'>
            <div
                className='warning-container'
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="warning-title"
            >
                <button
                    className='close-button'
                    onClick={handleClose}
                    ref={closeButtonRef}
                    aria-label="Fechar aviso"
                >
                    ×
                </button>
                <h2 className='warning-title' id="warning-title">
                    O nosso site é acessível!
                </h2>
                <p className='warning-text'>
                    Você pode aumentar ou diminuir o texto e ativar ou desativar o leitor de tela no menu lateral à esquerda. Para ler um texto, passe o cursor sobre ele, clique nele ou navegue até ele com a tecla Tab. Para tradução em Libras, use o botão azul no canto inferior direito.
                </p>
            </div>
        </div>
    );
};

export default AudioWarning;
