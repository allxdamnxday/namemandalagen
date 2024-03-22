import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import ColorPicker from './components/ColorPicker.jsx';
import FontPicker from './components/FontPicker.jsx';
import FontSizePicker from './components/FontSizePicker.jsx'; // Import the FontSizePicker component
import DisplayBox from './components/DisplayBox.jsx';

function App() {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState(16); // Initialize font size state

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

  const handleFontChange = (font) => {
    console.log(`Font changed: ${font}`);
    setFont(font);
  };

  const handleFontSizeChange = (size) => { // Handle font size change
    console.log(`Font size changed: ${size}`);
    setFontSize(size);
  };

  return (
    <>
      <h1>NMPGEN</h1>
      <TextInput onTextChange={handleTextChange} />
      <ColorPicker onTextColorChange={handleTextColorChange} onBackgroundColorChange={handleBackgroundColorChange} />
      <FontPicker onFontChange={handleFontChange} />
      <FontSizePicker onFontSizeChange={handleFontSizeChange} /> {/* Add the FontSizePicker component */}
      <DisplayBox text={text} textColor={textColor} backgroundColor={backgroundColor} font={font} fontSize={fontSize} /> {/* Pass fontSize as a prop */}
    </>
  );
}

export default App;