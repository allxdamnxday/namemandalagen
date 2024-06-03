import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import ColorPicker from './components/ColorPicker.jsx';
import FontSizePicker from './components/FontSizePicker.jsx';
import DisplayBox from './components/DisplayBox.jsx';

function App() {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');

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

  const handleExport = async () => {
    const exportData = {
      text,
      textColor,
      backgroundColor,
      fontSize,
      fontFamily
    };
    console.log(exportData);
  
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';
  
    try {
      const response = await fetch(`${apiUrl}/mandala`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(exportData)
      });
  
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.log('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Create Your Name Mandala</h1>
      <p>Use the form below to input your name and see what style of mandala suits you. You can change the font, mandala color, and background. These are just used to give you an idea of the style you would like to use. Once you are happy use the "Create" Button to continue.</p>
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
      <button className="export-button" onClick={handleExport}>Save Design</button>
    </div>
  );
}

export default App;
