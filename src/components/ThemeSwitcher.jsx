import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx'; // Adjust the import path as necessary

// ThemeSwitcher component
const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{
      backgroundColor: theme === 'light' ? '#F6B95D' : '#886555', // Use yellow accent for light theme and dark brown for dark theme
      color: theme === 'light' ? '#886555' : '#E6E6E6', // Use dark brown for light theme text and off white for dark theme text
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px',
      transition: 'background-color 0.3s, color 0.3s' // Smooth transition for color changes
    }}>
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;