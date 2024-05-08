import React, { useState } from 'react';
import './ColorPicker.css'; // Ensure CSS file is correctly imported

function ColorPicker({ onTextColorChange, onBackgroundColorChange }) {
  const [textColor, setTextColor] = useState('#000000'); // Default text color
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default background color

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
    onTextColorChange(event.target.value);
    console.log(`Text color changed to: ${event.target.value}`);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
    onBackgroundColorChange(event.target.value);
    console.log(`Background color changed to: ${event.target.value}`);
  };

  return (
    <div className="color-picker">
      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          className="text-color-input" // Use className for styling instead of inline styles
        />
      </label>
      <label>
        Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
          className="background-color-input" // Use className for styling instead of inline styles
        />
      </label>
    </div>
  );
}

export default ColorPicker;