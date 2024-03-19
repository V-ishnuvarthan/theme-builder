// ComponentLibrary.js
import React from 'react';
import './ComponentLibrary.css';

const ComponentLibrary = ({ onSelectComponent }) => {
  const handleDragStart = (e, componentType) => {
    e.dataTransfer.setData('text/plain', componentType);
  };

  return (
    <div className="components-section">
      <h2>Components Section</h2>
      <div
        className="draggable-component"
        draggable
        onDragStart={(e) => handleDragStart(e, 'button')}
      >
        Button
      </div>
      <div
        className="draggable-component"
        draggable
        onDragStart={(e) => handleDragStart(e, 'image')}
      >
        Image
      </div>
      <div
        className="draggable-component"
        draggable
        onDragStart={(e) => handleDragStart(e, 'text')}
      >
        Text
      </div>
      {/* Add other components */}
    </div>
  );
};

export default ComponentLibrary;
