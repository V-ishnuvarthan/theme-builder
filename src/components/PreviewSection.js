import React, { useState } from 'react';

import Draggable from 'react-draggable';
import ComponentFactory from './ComponentFactory';
import styled from 'styled-components';
import './PreviewSection.css';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '..';

const PreviewSection = ({ themeSettings }) => {
  const { textColor, fontSize, width, fontFamily, component } = themeSettings;
  const [droppedComponents, setDroppedComponents] = useState([]);
  // const [selectedComponent, setSelectedComponent] = useState(null);
  //console.log(component.button.backgroundColor);
  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('text/plain');
    const newComponent = ComponentFactory.createComponent(
      componentType,
      themeSettings
    );
    setDroppedComponents([...droppedComponents, newComponent]);
  };
  // const handleSelectComponent = (componentType) => {
  //   setSelectedComponent(componentType);
  // };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="preview-container">
      <h2>Preview Section</h2>
      <div
        className="preview-section"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          color: textColor,
          fontFamily: fontFamily,
          width: width,
          fontSize: fontSize,
        }}
      >
        {droppedComponents.map((component, index) => (
          <Draggable key={index}>
            <div className="dropped-component">{component}</div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};
export default PreviewSection;
