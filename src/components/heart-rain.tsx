import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import './heart-rain.css';

interface Heart {
  id: string;
  size: number;
  startX: number;
  duration: number;
  delay: number;
}

const HeartRain = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Generate a random heart
  const generateHeart = () => {
    const id = Math.random().toString(36).substring(7);
    const size = Math.random() * 30 + 10; // Random size between 10px and 40px
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3; // Animation duration between 3-8 seconds
    const delay = Math.random() * 0.5; // Random delay for natural effect

    return {
      id,
      size,
      startX,
      duration,
      delay,
    };
  };

  // Add new hearts periodically
  useEffect(() => {
    // Initial hearts
    const initialHearts = Array(15)
      .fill(null)
      .map(() => generateHeart());
    setHearts(initialHearts);

    // Add new hearts every 300ms
    const interval = setInterval(() => {
      setHearts((prevHearts) => {
        if (prevHearts.length > 50) {
          return prevHearts.slice(1); // Remove the oldest heart
        }

        // Add a new heart
        const newHeart = generateHeart();

        return [...prevHearts, newHeart];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fall-effect'>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            x: heart.startX,
            y: -50,
            opacity: 0.8,
            rotate: Math.random() * 30 - 15,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: Math.random() * 360,
            opacity: [0.8, 1, 0.8, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: `${heart.size}px`,
            zIndex: 10,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default HeartRain;
