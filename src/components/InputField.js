import React from 'react';

function InputField({ label, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}:</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default InputField;
