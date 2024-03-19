// PropertiesSection.js
import React, { useState } from 'react';
import './PropertiesSection.css';

const PropertiesSection = () => {
  const [textColor, setTextColor] = useState('#rrggbb');
  const [fontSize, setFontSize] = useState('16px');
  const [width, setWidth] = useState('200px');
  const [fontFamily, setFontFamily] = useState('Arial');
  const saveSettingsToDatabase = async () => {
    try {
      // Assume you have an API endpoint for saving settings
      const response = await fetch('/api/save-settings', {
        method: 'POST',
        body: JSON.stringify({
          textColor,
          fontSize,
          width,
          fontFamily, // Add other properties here
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Settings saved successfully!');
      } else {
        console.error('Error saving settings:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };
  return (
    <div className="properties-section">
      <h2>Properties Section</h2>
      <label>Text Color:</label>
      <input
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
      <br />
      <label>Font Size:</label>
      <input
        type="range"
        min="10"
        max="30"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value + 'px')}
      />
      <br />
      <label>Width :</label>
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <br />
      <DropdownMenu options={['Arial', 'Helvetica', 'Verdana']} />
      <button onClick={saveSettingsToDatabase}>save settings</button>
    </div>
  );
};

function DropdownMenu({ options }) {
  return (
    <div>
      <label>Select an option:</label>
      <select onChange={(e) => setFontFamily(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default PropertiesSection;
