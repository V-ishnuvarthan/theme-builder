import React, { useState } from 'react';
import ComponentLibrary from './ComponentLibrary';
import PropertiesSection from './PropertiesSection';
import Draggable from 'react-draggable';
import ComponentFactory from './ComponentFactory';
import styled from 'styled-components';
import './PreviewSection.css';

const PreviewSection = () => {
  const [droppedComponents, setDroppedComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [textColor, setTextColor] = useState('black');
  const [fontSize, setFontSize] = useState('36px');
  const [width, setWidth] = useState('100%');
  const [fontFamily, setFontFamily] = useState('Arial');
  // const fetchSettingsFromDatabase = async () => {
  //   try {
  //     // Assume you have an API endpoint for fetching settings
  //     const response = await fetch('http://localhost:5000/api/Styles');
  //     const data = await response.json();
  //     console.log(data.color);
  //     // Update state variables (e.g., textColor, fontSize) with fetched values
  //     setTextColor(data.color);
  //     setFontSize(data.fontSize);
  //     setWidth(data.width);
  //     setFontFamily(data.fontFamily);
  //     // Add other properties here
  //   } catch (error) {
  //     console.error('Error fetching settings:', error);
  //   }
  // };
  // fetchSettingsFromDatabase();
  console.log('after function');
  const Preview = styled.div`
    width: ${width};
    color: ${textColor};
    font-size: ${fontSize};
    font-family: ${fontFamily};
  `;

  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('text/plain');
    // Create a new component based on the type (using ComponentFactory)
    const newComponent = ComponentFactory.createComponent(componentType);
    setDroppedComponents([...droppedComponents, newComponent]);
  };

  const handleSelectComponent = (componentType) => {
    setSelectedComponent(componentType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <ComponentLibrary onSelectComponent={handleSelectComponent} />
      <div className="preview-container">
        <h2>Preview Section</h2>
        <Preview
          className="preview-section"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {droppedComponents.map((component, index) => (
            <Draggable key={index}>
              <div className="dropped-component">{component}</div>
            </Draggable>
          ))}
        </Preview>
      </div>
      <PropertiesSection selectedComponent={selectedComponent} />
    </div>
  );
};

export default PreviewSection;
