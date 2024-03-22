import React, { useState } from 'react';

function FontSizePicker({ onFontSizeChange }) {
  const [fontSize, setFontSize] = useState(16); // Default font size

  const handleChange = (event) => {
    const newFontSize = event.target.value;
    setFontSize(newFontSize);
    onFontSizeChange(newFontSize);
    console.log(`Font size changed to: ${newFontSize}`);
  };

  return (
    <div>
      <label>
        Font Size:
        <input
          type="range"
          min="8"
          max="72"
          value={fontSize}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default FontSizePicker;