import React, { createContext, useCallback, useEffect, useState } from 'react';

export const TextReaderContext = createContext();

// Mesma ordem de precedência que um leitor de tela usa: rótulo explícito
// primeiro, conteúdo visível como fallback.
const accessibleText = (el) => {
    if (!el || el === document.body) return '';
    const label =
        el.getAttribute('aria-label') ||
        el.getAttribute('alt') ||
        el.getAttribute('title');
    return (label || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 300);
};

export const TextReaderProvider = ({ children }) => {
    const [isTextReaderEnabled, setIsTextReaderEnabled] = useState(false);

    const speak = useCallback((text) => {
        if (!isTextReaderEnabled || !text) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }, [isTextReaderEnabled]);

    const toggleTextReader = () => {
        setIsTextReaderEnabled(prevState => !prevState);
        window.speechSynthesis.cancel();
    };

    // Os componentes já falam no onMouseEnter, então quem usa mouse é atendido.
    // Este listener dá a mesma resposta a quem navega por teclado, que é o
    // público do leitor. Fica em um lugar só porque focusin sobe até o document.
    useEffect(() => {
        if (!isTextReaderEnabled) return;
        const handleFocusIn = (e) => speak(accessibleText(e.target));
        document.addEventListener('focusin', handleFocusIn);
        return () => document.removeEventListener('focusin', handleFocusIn);
    }, [isTextReaderEnabled, speak]);

    return (
        <TextReaderContext.Provider value={{ isTextReaderEnabled, toggleTextReader, speak }}>
            {children}
        </TextReaderContext.Provider>
    );
};
