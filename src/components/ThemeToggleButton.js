import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () =>{
    const themeToggle = useContext(ThemeContext)
    const themeName = themeToggle.theme === 'light' ? 'dark' : 'light'
    return (
       <>
            <button className={`btn btn-${themeToggle.theme} txt-${themeToggle.theme}`}
            onClick={() => themeToggle.setTheme(themeName)} id="global-theme-toggler">Switch to { themeName } theme</button>
       </>       
    )
}
export {ThemeToggleButton} 
