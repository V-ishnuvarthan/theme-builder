import React from 'react';

function ColorPicker({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="colorPicker">Choose a color:</label>
      <input type="color" id="colorPicker" onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;