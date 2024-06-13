// src/App.js
import React from 'react';
import { useOidc } from '@axa-fr/react-oidc';
import SimpleAudioPlayer from './components/SimpleAudioPlayer';

function App() {
  const { login, logout, isAuthenticated } = useOidc();

  return (
    <div className="App">
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <SimpleAudioPlayer audioSrc="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}

export default App;
