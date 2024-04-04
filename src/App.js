import React, { useState } from 'react';
//import axios from 'axios';
import './App.css';
import ComponentLibrary from './components/ComponentLibrary';
import PreviewSection from './components/PreviewSection';
import PropertiesSection from './components/PropertiesSection';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

function App() {
  const [themeSettings, setThemeSettings] = useState({
    textColor: '#rrggbb',
    fontSize: '16px',
    width: '200px',
    fontFamily: 'Arial',
    component: {
      button: {
        backgroundColor: 'D34223',
      },
      teaser: {
        backgroundColor: 'rrggbb',
      },
    },
  });
  // const [selectedComponent, setSelectedComponent] = useState(null);
  // const handleSelectComponent = (componentType) => {
  //   setSelectedComponent(componentType);
  // };
  console.log(themeSettings.component.button.backgroundColor);
  // const history = useHistory(); // Initialize useHistory
  // const handlePagePreviewClick = () => {
  //   history.push('/page-preview'); // Navigate to the page preview route
  // };
  return (
    // <Router>
    <div className="App">
      <div className="heading">
        <p>DreamHacks Theme Builder</p>
        {/* <button className="pagePreview" onClick={handlePagePreviewClick}>
            page preview
          </button> */}
      </div>
      <div className="main-section">
        <div className="container">
          {/* <ComponentLibrary onSelectComponent={handleSelectComponent} /> */}
          <ComponentLibrary />
          <PreviewSection themeSettings={themeSettings} />
          <PropertiesSection
            themeSettings={themeSettings}
            setThemeSettings={setThemeSettings}
            // selectedComponent={selectedComponent}
          />
        </div>
      </div>

      {/* <Switch>
          <Route path="/page-preview" component={PagePreview} />
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
