// Room.tsx
import React from 'react';
import Player from './Player';
import Enemy from './Enemy';

const Room: React.FC = () => {

  return (
    <div id='room' style={{ position: 'relative', width: '800px', height: '600px', backgroundColor: '#f0f0f0' }}>
      <Player />
      <Enemy />
    </div>
  );
};

export default Room;
