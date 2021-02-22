import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
  
    </div>
  );
}

export default App;
