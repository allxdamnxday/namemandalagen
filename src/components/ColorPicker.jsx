import React, { useState } from 'react';

function ColorPicker({ onTextColorChange, onBackgroundColorChange }) {
  const [textColor, setTextColor] = useState('#000000'); // Default text color
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default background color

  const handleTextColorChange = (event) => {
    const newColor = event.target.value;
    setTextColor(newColor);
    onTextColorChange(newColor);
    console.log(`Text color changed to: ${newColor}`);
  };

  const handleBackgroundColorChange = (event) => {
    const newColor = event.target.value;
    setBackgroundColor(newColor);
    onBackgroundColorChange(newColor);
    console.log(`Background color changed to: ${newColor}`);
  };

  return (
    <div>
      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </label>
      <label>
        Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={handleBackgroundColorChange}
        />
      </label>
    </div>
  );
}

export default ColorPicker;