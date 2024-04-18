// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [countdata, setCountData] = useState(1);
    return (
        <ThemeContext.Provider value={{ countdata, setCountData }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useThemeData = () => useContext(ThemeContext);

export { ThemeProvider, useThemeData };
