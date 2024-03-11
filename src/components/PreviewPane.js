import React from 'react';

function PreviewPane({ themeSettings }) {
  const { color, width, fontSize, fontFamily } = themeSettings;

  return (
    <div>
      <h2>Preview</h2>
      <div
        style={{
          backgroundColor: color,
          width: `${width}px`,
          fontSize: `${fontSize}px`,
          fontFamily,
        }}
      >
        {/* Preview content */}
      </div>
    </div>
  );
}

export default PreviewPane;
