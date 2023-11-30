import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
      const themeToggle = useContext(ThemeContext)
    return(
        <div className={`container bg-${themeToggle.theme}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${themeToggle.theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className="btn" id="themed-button">Sup</button>
            <LocalThemedBox />
        </div>
    )
}
export { Page }
