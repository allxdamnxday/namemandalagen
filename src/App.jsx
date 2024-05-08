import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import ColorPicker from './components/ColorPicker.jsx';
import FontSizePicker from './components/FontSizePicker.jsx';
import DisplayBox from './components/DisplayBox.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx'; // Import ThemeSwitcher component

// Create a context for theme state
export const ThemeContext = createContext();

function App() {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000'); // Simplified to a single color
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Simplified to a single color
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [theme, setTheme] = useState('light'); // State to manage theme

  const handleTextChange = (text) => {
    console.log(`Text changed: ${text}`);
    setText(text);
  };

  const handleTextColorChange = (color) => {
    console.log(`Text color changed: ${color}`);
    setTextColor(color);
  };

  const handleBackgroundColorChange = (color) => {
    console.log(`Background color changed: ${color}`);
    setBackgroundColor(color);
  };

  const handleFontSizeChange = (size) => {
    console.log(`Font size changed: ${size}`);
    setFontSize(size);
  };

  const handleFontFamilyChange = (family) => {
    console.log(`Font family changed: ${family}`);
    setFontFamily(family);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log(`Theme changed to: ${newTheme}`);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <h1>NMPGEN</h1>
        <ThemeSwitcher />
        <TextInput onTextChange={handleTextChange} />
        <ColorPicker onTextColorChange={handleTextColorChange} onBackgroundColorChange={handleBackgroundColorChange} />
        <FontSizePicker onFontSizeChange={handleFontSizeChange} onFontFamilyChange={handleFontFamilyChange} />
        <DisplayBox 
          text={text} 
          textColor={textColor} 
          backgroundColor={backgroundColor} 
          fontSize={fontSize} 
          fontFamily={fontFamily} 
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;