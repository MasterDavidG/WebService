// src/components/SimpleAudioPlayer.js
import React from 'react';

function SimpleAudioPlayer({ audioSrc }) {
  return (
    <div>
      <h1>Simple React Audio Player</h1>
      <audio controls>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default SimpleAudioPlayer;
