import React from 'react';

function Slider({ label, min, max, onChange }) {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div>
      <label>{label}:</label>
      <input type="range" min={min} max={max} onChange={handleChange} />
    </div>
  );
}

export default Slider;
