import React, { useEffect, useState } from 'react';

function FontPicker({ onFontChange }) {
  const [fonts, setFonts] = useState(['Aguafina Script', 'Dancing Script', 'Pinyon Script']); // Initialize fonts list with specific fonts

  useEffect(() => {
    // Log the successful loading of fonts
    console.log('Fonts loaded successfully');
  }, []);

  const handleChange = (event) => {
    onFontChange(event.target.value);
    console.log(`Font changed to: ${event.target.value}`);
  };

  return (
    <label>
      Font:
      <select onChange={handleChange}>
        {fonts.map((fontName, index) => (
          <option key={index} value={fontName}>{fontName}</option>
        ))}
      </select>
    </label>
  );
}

export default FontPicker;