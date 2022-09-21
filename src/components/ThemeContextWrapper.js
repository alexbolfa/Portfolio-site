import React, { useState, useEffect } from "react";
import {ThemeContext, themes} from "../contexts/ThemeContext";

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function toggleTheme() {
        setTheme(theme === themes.light
                    ? themes.dark
                    : themes.light
        );
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-theme');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-theme');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}