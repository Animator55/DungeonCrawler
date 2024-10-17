import React, { useEffect, useState } from 'react';
import '../assets/player.css';

const Player: React.FC = () => {
  const [speed] = useState(2); // Velocidad base
  const [direction, setDirection] = useState(0); // Dirección en grados
  const position = { x: 100, y: 100 }; // Posición inicial del jugador

  const keysPressed: Record<string, boolean> = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    w: false,
    s: false,
    a: false,
    d: false,
  };

  // Función para mover al jugador
  const movePlayer = (dx: number, dy: number) => {
    const roomElement = document.getElementById('room');
    if (roomElement) {
      const rect = roomElement.getBoundingClientRect();
      const newX = position.x + dx * speed;
      const newY = position.y + dy * speed;

      // Verificar colisiones con las paredes
      if (
        newX >= rect.left &&
        newX + 50 <= rect.right && // Asumiendo el ancho del jugador es 50
        newY >= rect.top &&
        newY + 50 <= rect.bottom // Asumiendo la altura del jugador es 50
      ) {
        position.x = newX;
        position.y = newY;
      }

      const playerElement = document.getElementById('player');
      if (playerElement) {
        playerElement.style.left = `${position.x}px`;
        playerElement.style.top = `${position.y}px`;
      }
    }
  };

  // Función para manejar el movimiento del jugador
  const handleMovement = () => {
    let dx = 0;
    let dy = 0;

    // Controlar múltiples direcciones simultáneas
    if (keysPressed.ArrowUp || keysPressed.w) dy -= 1;
    if (keysPressed.ArrowDown || keysPressed.s) dy += 1;
    if (keysPressed.ArrowLeft || keysPressed.a) dx -= 1;
    if (keysPressed.ArrowRight || keysPressed.d) dx += 1;

    // Mover el jugador si alguna tecla está presionada
    if (dx !== 0 || dy !== 0) {
      movePlayer(dx, dy);
    }
  };

  // Función para calcular la dirección hacia el mouse
  const handleMouseMove = (e: MouseEvent) => {
    const playerElement = document.getElementById('player');
    if (playerElement) {
      const rect = playerElement.getBoundingClientRect();
      const playerCenterX = rect.left + rect.width / 2;
      const playerCenterY = rect.top + rect.height / 2;

      // Calcular la dirección hacia el mouse
      const dx = e.clientX - playerCenterX;
      const dy = e.clientY - playerCenterY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Ajuste aquí

      setDirection(angle);

      // Actualizar el estilo del jugador para que apunte en la dirección correcta
      playerElement.style.transform = `rotate(${angle}deg)`;
    }
  };

  // Eventos de teclado para controlar el movimiento
  const handleKeyDown = (e: KeyboardEvent) => {
    keysPressed[e.key] = true;
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    keysPressed[e.key] = false;
  };

  // Manejador del clic para el ataque
  const handleMouseDown = () => {
    const weaponElement = document.getElementById('weapon');
    if (weaponElement && !weaponElement.classList.contains("attack")) {
      weaponElement.classList.add('attack');
      setTimeout(() => {
        weaponElement.classList.remove('attack');
      }, 500); // Duración de la animación de ataque
    }
  };

  // Añadir y remover los event listeners para teclas y mouse
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);

    // Movimiento continuo basado en teclas
    const movementInterval = setInterval(handleMovement, 20);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(movementInterval);
    };
  }, []);

  return (
    <div id="player" className="player" style={{width: 50, height: 50}}>
      <div id="weapon" className="weapon"></div>
    </div>
  );
};

export default Player;
