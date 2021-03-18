import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import Colors from '../Colors';

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const CurrentTheme = Colors[theme];

    return(
        <div style={{
            padding: "50px",
            backgroundColor: `${CurrentTheme.backgroundColor}`,
            color: `${CurrentTheme.textColor}`,
            textAlign: 'center' 
        }}>
            <h1>Context API theme toggler</h1>
            <p>This is a nice paragraph</p>
            <button>CLick me</button>
        </div>
    )
}

export default HeroSection;