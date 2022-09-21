import {createContext} from "react";

export const themes = {
    dark: "Dark",
    light: "Light"
};

export const ThemeContext = createContext ({
    theme: themes.dark,
    toggleTheme: () => { },
});