import React, { createContext, useState } from 'react';

export const TextReaderContext = createContext();

export const TextReaderProvider = ({ children }) => {
    const [isTextReaderEnabled, setIsTextReaderEnabled] = useState(false);

    const toggleTextReader = () => {
        setIsTextReaderEnabled(prevState => !prevState);
        window.speechSynthesis.cancel();
    };

    return (
        <TextReaderContext.Provider value={{ isTextReaderEnabled, toggleTextReader }}>
            {children}
        </TextReaderContext.Provider>
    );
};
