import React, { useRef, useEffect, useState } from 'react';

type PlayerProps = {
  removeEnemy: (enemyId: string) => void;  // Heredado de Room para eliminar enemigos.
};

const Player: React.FC<PlayerProps> = ({ removeEnemy }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const swordRef = useRef<HTMLDivElement>(null);
  const [health, setHealth] = useState(100); // Vida del jugador

  // Movimiento suave
  useEffect(() => {
    const handleMovement = (e: KeyboardEvent) => {
      const player = playerRef.current;
      if (player) {
        const style = window.getComputedStyle(player);
        const left = parseFloat(style.left);
        const top = parseFloat(style.top);

        switch (e.key) {
          case 'w':
            player.style.top = `${top - 5}px`;
            break;
          case 's':
            player.style.top = `${top + 5}px`;
            break;
          case 'a':
            player.style.left = `${left - 5}px`;
            break;
          case 'd':
            player.style.left = `${left + 5}px`;
            break;
        }
      }
    };
    window.addEventListener('keydown', handleMovement);
    return () => {
      window.removeEventListener('keydown', handleMovement);
    };
  }, []);

  // Rotación basada en el mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const player = playerRef.current;
      if (player) {
        const playerRect = player.getBoundingClientRect();
        const centerX = playerRect.left + playerRect.width / 2;
        const centerY = playerRect.top + playerRect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        player.style.rotate = `${angle}deg`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Ataque con click izquierdo
  const handleAttack = () => {
    const sword = swordRef.current;
    if (sword) {
      sword.classList.add('swing');
      setTimeout(() => sword.classList.remove('swing'), 500); // Animación de swing
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Implementar la lógica para cambiar de sala o interactuar
  };

  return (
    <div 
      ref={playerRef} 
      className="player" 
      style={{ position: 'absolute', left: '50%', top: '50%' }} 
      onClick={handleAttack}
      onContextMenu={handleRightClick}
      data-health={health}  // Vida como dataset
    >
      <div className="sword" ref={swordRef}></div>
    </div>
  );
};

export default Player;
