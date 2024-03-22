import React, { useState } from 'react';

function TextInput({ onTextChange }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="Enter text here..."
    />
  );
}

export default TextInput;