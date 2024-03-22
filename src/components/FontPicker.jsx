import React, { useState } from 'react';

function FontPicker({ onFontChange }) {
  const [font, setFont] = useState('Arial'); // Default font

  const handleChange = (event) => {
    setFont(event.target.value);
    onFontChange(event.target.value);
    console.log(`Font changed to: ${event.target.value}`);
  };

  return (
    <label>
      Font:
      <select value={font} onChange={handleChange}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Palatino">Palatino</option>
        <option value="Garamond">Garamond</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Arial Black">Arial Black</option>
        <option value="Impact">Impact</option>
      </select>
    </label>
  );
}

export default FontPicker;