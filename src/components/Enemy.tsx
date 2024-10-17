// Enemy.tsx
import React, { useEffect, useRef } from 'react';
import '../assets/enemy.css';

const Enemy: React.FC= () => {
  const enemyRef = useRef<HTMLDivElement>(null);
  const speed = 0.01; // Velocidad del enemigo

  useEffect(() => {
    const interval = setInterval(() => {
        let player = document.querySelector(".player") as HTMLDivElement
      if (!player || !enemyRef.current) return;

      const playerRect = player.style;
      const enemyRect = enemyRef.current.style;

      // Obtener la posición del jugador
      const playerX = parseFloat(playerRect.left);
      const playerY = parseFloat(playerRect.top);

      // Calcular la dirección hacia el jugador
      const dx = playerX - parseFloat(enemyRect.left);
      const dy = playerY - parseFloat(enemyRect.top);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) { // Asegúrate de que no esté demasiado cerca
        const moveX = (dx * speed);
        const moveY = (dy * speed);

        // Mover al enemigo
        enemyRef.current.style.left = `${parseFloat(enemyRect.left) + moveX}px`;
        enemyRef.current.style.top = `${parseFloat(enemyRect.top) + moveY}px`;
      }
    }, 2); // Actualizar cada 100ms

    return () => clearInterval(interval); // Limpiar el intervalo
  }, );

  return (
    <div
      ref={enemyRef}
      className="enemy"
      style={{
        position: 'absolute',
        left: '200px', // Posición inicial
        top: '200px',  // Posición inicial
        width: '40px',
        height: '40px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    />
  );
};

export default Enemy;
