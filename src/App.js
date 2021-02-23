import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);


  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Sidebar />
          <h1 className='app__loginTitle'>You need to login</h1>
        </>
      )}
    </div>
  );
}

export default App;
