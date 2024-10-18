import React, { useEffect, useRef, useState } from 'react';

type Enemy2Props = {
  playerElement: HTMLElement | null;
};

const Enemy2: React.FC<Enemy2Props> = ({ playerElement }) => {
  const enemyRef = useRef<HTMLDivElement>(null);
  const [health, setHealth] = useState(30);  // Vida del enemigo 2

  useEffect(() => {
    if (!playerElement) return;
    const interval = setInterval(() => {
      const enemy = enemyRef.current;
      if (!enemy) return;

      const playerStyle = window.getComputedStyle(playerElement);
      const playerX = parseFloat(playerStyle.left);
      const playerY = parseFloat(playerStyle.top);

      // Implementar la lógica para disparar proyectiles al jugador
    }, 1000); // Cada segundo dispara un proyectil

    return () => clearInterval(interval);
  }, [playerElement]);

  return (
    <div ref={enemyRef} className="enemy2" style={{ position: 'absolute', left: '70%', top: '70%' }} data-health={health}>
      Enemy2
    </div>
  );
};

export default Enemy2;
