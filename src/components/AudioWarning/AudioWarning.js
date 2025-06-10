import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import './AudioWarning.css';

const AudioWarning = forwardRef((props, ref) => {
    // Verifica se o usuário já viu o aviso antes
    const [isVisible, setIsVisible] = useState(() => {
        const hasSeenWarning = localStorage.getItem('audioWarningShown');
        return !hasSeenWarning;
    });

    useImperativeHandle(ref, () => ({
        showWarning() {
            setIsVisible(true);
        }
    }));

    const handleClose = () => {
        setIsVisible(false);
        // Marca que o usuário já viu o aviso
        localStorage.setItem('audioWarningShown', 'true');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isVisible) {
                console.log("closing");
                handleClose();
            }
        };

        // Só adiciona o event listener se o warning estiver visível
        if (isVisible) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className='overlay'>
            <div className='warning-container' onClick={(e) => e.stopPropagation()}>
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
});

export default AudioWarning;
