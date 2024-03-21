import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import PreviewSection from './components/PreviewSection';

function App() {
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
