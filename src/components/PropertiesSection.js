// PropertiesSection.js
import React, { useEffect, useState } from 'react';
import './PropertiesSection.css';
import { db } from '..';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { ButtonComponentProperties } from './aem-components/ButtonComponent';

const PropertiesSection = ({ themeSettings, setThemeSettings }) => {
  const { textColor, fontSize, width, fontFamily, component } = themeSettings;
  const [selectedTheme, setSelectedTheme] = useState('Default');
  const [allthemes, setAllthemes] = useState(['Default']);
  const options = ['Arial', 'Helvetica', 'Verdana'];
  const themeOptions = ['Default', 'Dark', 'Light'];
  useEffect(() => {
    const fetchAllThemeId = async () => {
      const themesRef = collection(db, 'Themes');
      getDocs(themesRef)
        .then((snapshot) => {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push(doc.id);
          });
          setAllthemes(results);
        })
        .catch((err) => console.log(err));
    };
    fetchAllThemeId();
  }, []);
  const fetchSelectedThemeSettings = async (selectedTheme) => {
    const themesRef = collection(db, 'Themes');
    getDocs(themesRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.id === selectedTheme) {
          const data = doc.data();
          console.log(selectedTheme);
          console.log(data.textColor);
          setThemeSettings({ ...themeSettings, textColor: data.textColor });
          setThemeSettings({ ...themeSettings, fontSize: data.fontSize });
          setThemeSettings({ ...themeSettings, width: data.width });
          setThemeSettings({ ...themeSettings, fontFamily: data.fontFamily });
          console.log(themeSettings);
        }
      });
    });
  };
  const saveSettingsToDatabase = async (e) => {
    e.preventDefault();
    if (themeOptions.includes(selectedTheme)) {
      const theme = { textColor, fontSize, width, fontFamily };
      await updateDoc(collection(db, 'Themes', selectedTheme), theme);
    } else {
      const theme = { textColor, fontSize, width, fontFamily };
      const themeDocRef = doc(db, 'Themes', selectedTheme);
      await setDoc(themeDocRef, theme);
    }
    alert('settings saved');
  };
  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
    fetchSelectedThemeSettings(e.target.value);
  };
  const createCustomTheme = () => {
    const customThemeName = prompt('Enter a custom theme name:');
    if (customThemeName) {
      setSelectedTheme(customThemeName);
    }
    console.log(themeOptions);
  };
  return (
    <div className="properties-section">
      <h2>Properties Section</h2>
      <div className="property">
        <label>Select Theme:</label>
        <select onChange={handleThemeChange} value={selectedTheme}>
          {allthemes.map((theme, index) => (
            <option className="input" key={index} value={theme}>
              {theme}
            </option>
          ))}
        </select>
        <button onClick={createCustomTheme}>+</button>
      </div>
      <div className="property">
        {' '}
        <label>Text Color:</label>
        <input
          type="color"
          value={themeSettings.textColor}
          onChange={(e) =>
            setThemeSettings({ ...themeSettings, textColor: e.target.value })
          }
        />
      </div>
      <br />
      <div className="property">
        {' '}
        <label>Font Size:</label>
        <input
          type="range"
          min="10"
          max="30"
          value={themeSettings.fontSize}
          onChange={(e) =>
            setThemeSettings({
              ...themeSettings,
              fontSize: e.target.value + 'px',
            })
          }
        />
      </div>
      <br />
      <div className="property">
        <label>Width :</label>
        <input
          type="text"
          className="input"
          value={themeSettings.width}
          onChange={(e) =>
            setThemeSettings({ ...themeSettings, width: e.target.value })
          }
        />
      </div>
      <br />
      <div className="property">
        <label>Select an option:</label>
        <select
          value={{ value: themeSettings.fontFamily }}
          onChange={(e) =>
            setThemeSettings({ ...themeSettings, fontFamily: e.target.value })
          }
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <ButtonComponentProperties
        themeSettings={themeSettings}
        setThemeSettings={setThemeSettings}
      ></ButtonComponentProperties>
      <button onClick={saveSettingsToDatabase}>save settings</button>
    </div>
  );
};

export default PropertiesSection;
