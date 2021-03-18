import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div onClick={() => {setThemeMode(themeMode === "light" ? "dark" : "light")}}>
            <p>{themeMode === "light" ? "Happy dark mode" : "Lights are on"}</p>
        </div>
    )

}

export default ThemeToggler;