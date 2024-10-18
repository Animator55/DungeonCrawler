import React, { useEffect, useRef, useState } from 'react';

type EnemyProps = {
  playerElement: HTMLElement | null;
  removeEnemy: (enemyId: string) => void;
  id: string;
};

const Enemy: React.FC<EnemyProps> = ({ playerElement, removeEnemy, id }) => {
  const enemyRef = useRef<HTMLDivElement>(null);
  const [health, setHealth] = useState(50);  // Vida del enemigo

  useEffect(() => {
    const enemy = enemyRef.current;
    if (!enemy || !playerElement) return;

    const interval = setInterval(() => {
      const playerStyle = window.getComputedStyle(playerElement);
      const playerX = parseFloat(playerStyle.left);
      const playerY = parseFloat(playerStyle.top);

      const enemyStyle = window.getComputedStyle(enemy);
      const enemyX = parseFloat(enemyStyle.left);
      const enemyY = parseFloat(enemyStyle.top);

      // Movimiento del enemigo hacia el jugador
      const dx = playerX - enemyX;
      const dy = playerY - enemyY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const speed = 2;  // Velocidad del enemigo
      if (dist > 0) {
        enemy.style.left = `${enemyX + (dx / dist) * speed}px`;
        enemy.style.top = `${enemyY + (dy / dist) * speed}px`;
      }

    }, 1000 / 60);  // 60fps

    return () => clearInterval(interval);
  }, [playerElement]);

  const handlePlayerHit = () => {
    // Implementar la lógica para atacar al jugador
  };

  const handleStunned = () => {
    // Aturdimiento del enemigo
    if (enemyRef.current) {
      enemyRef.current.classList.add('stunned');
      setTimeout(() => {
        if (enemyRef.current) {
          enemyRef.current.classList.remove('stunned');
        }
      }, 500);
    }
  };

  return (
    <div 
      ref={enemyRef} 
      className="enemy" 
      style={{ position: 'absolute', left: '30%', top: '30%' }} 
      data-health={health}  // Vida como dataset
    >
      Enemy {id}
    </div>
  );
};

export default Enemy;
