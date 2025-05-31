import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SnakeGame404 = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const navigate = useNavigate();

  const boxSize = 20;
  const canvasSize = 400;
  const initialSnake = [{ x: 4, y: 4 }];
  const initialFood = { x: 8, y: 8 };
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [dir, setDir] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Draw 404 in background
    ctx.font = 'bold 120px sans-serif';
    ctx.fillStyle = '#111';
    ctx.textAlign = 'center';
    ctx.fillText('404', canvasSize / 2, canvasSize / 2 + 40);

    // Draw snake
    snake.forEach(segment => {
      ctx.fillStyle = '#fff';
      ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });

    // Draw food
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
  }, [snake, food]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver || won) return;

      setSnake(prev => {
        const newHead = {
          x: prev[0].x + dir.x,
          y: prev[0].y + dir.y,
        };

        const newSnake = [newHead, ...prev];

        // Collision check
        if (
          newHead.x < 0 || newHead.x >= canvasSize / boxSize ||
          newHead.y < 0 || newHead.y >= canvasSize / boxSize ||
          prev.some(seg => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          setGameOver(true);
          return prev;
        }

        // Food check
        if (newHead.x === food.x && newHead.y === food.y) {
          setWon(true);
          return newSnake;
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [dir, gameOver, won]);

  useEffect(() => {
    const handleKeyDown = e => {
      switch (e.key) {
        case 'ArrowUp': setDir({ x: 0, y: -1 }); break;
        case 'ArrowDown': setDir({ x: 0, y: 1 }); break;
        case 'ArrowLeft': setDir({ x: -1, y: 0 }); break;
        case 'ArrowRight': setDir({ x: 1, y: 0 }); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Oops! You ran out of oxygen 💨
      </h1>

      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="my-6"
        style={{ backgroundColor: 'black' }}
      />

      {won && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold mb-4">🎉 You got the oxygen bag!</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-2 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
          >
            Back to Home
          </button>
        </div>
      )}

      {gameOver && !won && (
        <div className="text-center mt-6">
          <h2 className="text-xl text-red-400 font-semibold">💥 Game Over! Try again</h2>
        </div>
      )}
    </div>
  );
};

export default SnakeGame404;
