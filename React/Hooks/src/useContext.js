import React, {useContext, useEffect, useState} from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    const [theme, setTheme] = useState(themes.dark)
    useEffect(() => {
        console.log('useContext App useEffect emit');
        const timer = setTimeout(() => setTheme(pre => pre === themes.dark ? themes.light : themes.dark), 1000);
        return () => clearInterval(timer);
    }, []);

    console.log('useContext App render');
    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

export default App;


