import React, { useState } from 'react';
import Player from './Player';
import Enemy from './Enemy';
import Enemy2 from './Enemy2';

const Room: React.FC = () => {
  const [enemyList, setEnemyList] = useState(['enemy1', 'enemy2']);  // Lista de enemigos

  const removeEnemy = (enemyId: string) => {
    setEnemyList((prev) => prev.filter((id) => id !== enemyId));
  };

  return (
    <div className="room" style={{ position: 'relative', width: '500px', height: '500px', border: '2px solid black' }}>
      <Player removeEnemy={removeEnemy} />
      {enemyList.map((id) => (
        id === 'enemy1' ? <Enemy key={id} playerElement={document.querySelector('.player')} removeEnemy={removeEnemy} id={id} /> : 
                          <Enemy2 key={id} playerElement={document.querySelector('.player')} />
      ))}
      {/* Divs para las puertas */}
      <div className="door" style={{ position: 'absolute', left: '50%', top: '0' }}></div>
      <div className="door" style={{ position: 'absolute', left: '50%', bottom: '0' }}></div>
      <div className="door" style={{ position: 'absolute', left: '0', top: '50%' }}></div>
      <div className="door" style={{ position: 'absolute', right: '0', top: '50%' }}></div>
    </div>
  );
};

export default Room;
