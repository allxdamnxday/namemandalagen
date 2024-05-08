import React, { useState } from 'react';

function FontSizePicker({ onFontSizeChange, onFontFamilyChange }) {
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [fontFamily, setFontFamily] = useState('Arial'); // Default font family

  const handleFontSizeChange = (event) => {
    const newFontSize = event.target.value;
    setFontSize(newFontSize);
    onFontSizeChange(newFontSize);
    console.log(`Font size changed to: ${newFontSize}`);
  };

  const handleFontFamilyChange = (event) => {
    const newFontFamily = event.target.value;
    setFontFamily(newFontFamily);
    onFontFamilyChange(newFontFamily);
    console.log(`Font family changed to: ${newFontFamily}`);
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
          onChange={handleFontSizeChange}
        />
      </label>
      <label>
        Font Family:
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="Aguafina Script">Aguafina Script</option>
          <option value="Dancing Script">Dancing Script</option>
          <option value="Euphoria Script">Euphoria Script</option>
          <option value="Imperial Script">Imperial Script</option>
          <option value="Lily Script One">Lily Script One</option>
          <option value="Marck Script">Marck Script</option>
          <option value="Oleo Script Swash Caps">Oleo Script Swash Caps</option>
          <option value="Pinyon Script">Pinyon Script</option>
          <option value="Rouge Script">Rouge Script</option>
          <option value="Bad Script">Bad Script</option>
          <option value="Petit Formal Script">Petit Formal Script</option>
          <option value="Style Script">Style Script</option>
          <option value="Clicker Script">Clicker Script</option>
          <option value="League Script">last one</option>
        </select>
      </label>
    </div>
  );
}

export default FontSizePicker;