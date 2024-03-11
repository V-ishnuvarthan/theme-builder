import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ColorPicker from './components/ColorPicker';
import InputField from './components/InputField';
import Slider from './components/Slider';
import DropdownMenu from './components/DropdownMenu';
import PreviewPane from './components/PreviewPane';

function App() {
  const [themeSettings, setThemeSettings] = useState({});

  const handleThemeChange = (newSettings) => {
    setThemeSettings({ ...themeSettings, ...newSettings });
  };

  const saveThemeSettings = () => {
    axios
      .post('http://localhost:3001/save-theme-settings', { themeSettings })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error saving theme settings:', error);
      });
  };

  return (
    <div className="App">
      <h1>Theme Builder Tool</h1>
      <ColorPicker onChange={(color) => handleThemeChange({ color })} />
      <InputField
        label="Width"
        onChange={(value) => handleThemeChange({ width: value })}
      />
      <Slider
        label="Font Size"
        min={10}
        max={30}
        onChange={(value) => handleThemeChange({ fontSize: value })}
      />
      <DropdownMenu
        options={['Arial', 'Helvetica', 'Verdana']}
        onChange={(option) => handleThemeChange({ fontFamily: option })}
      />
      <PreviewPane themeSettings={themeSettings} />
      <button onClick={saveThemeSettings}>Save Theme Settings</button>
    </div>
  );
}

export default App;
