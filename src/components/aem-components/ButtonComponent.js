// ComponentFactory.js

import React, { useEffect } from 'react';

const ButtonComponent = (themeSettings) => {
  const component = themeSettings.backgroundColor;
  console.log(themeSettings);
  // console.log(component.button.backgroundColor);
  useEffect(() => {
    console.log(themeSettings.backgroundColor);
  }, [themeSettings]);

  return (
    <button
      style={
        {
          // backgroundColor: component.button.backgroundColor,
        }
      }
    >
      Button
    </button>
  );
};

export default ButtonComponent;

const ButtonComponentProperties = ({ themeSettings, setThemeSettings }) => {
  const { component } = themeSettings;
  return (
    <div className="component">
      <button type="button" className="collapsible">
        &#9660; Button
      </button>
      <div className="content">
        <div className="property">
          <label>Background Color:</label>
          <input
            type="color"
            value={themeSettings.component.button.backgroundColor}
            onChange={(e) =>
              setThemeSettings({
                ...themeSettings,
                component: {
                  ...themeSettings.component,
                  button: {
                    ...themeSettings.component.button,
                    backgroundColor: '#D34223',
                  },
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

var coll = document.getElementsByClassName('collapsible');
console.log(coll.length);
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
export { ButtonComponentProperties };
