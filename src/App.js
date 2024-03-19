import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ComponentFactory from './components/ComponentFactory';
import PreviewSection from './components/PreviewSection';
import PropertiesSection from './components/PropertiesSection';
import ComponentLibrary from './components/ComponentLibrary';

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
      <div className="main-section">
        <PreviewSection />
      </div>
    </div>
  );
}

export default App;
