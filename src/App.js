import React from 'react';
import './App.css';
import Tamagotchi from './Components/Tamagotchi';

function App() {
  return (
    <div className="container">
      <div className="dashboard">
        <Tamagotchi />
      </div>
    </div>
  );
}

export default App;
