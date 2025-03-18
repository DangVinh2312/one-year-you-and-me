import { IconHeartFilled } from '@tabler/icons-react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import HeartScale from './heart-scale';
import './loading-bar.css';

function LoadingBar({ onClick }: Readonly<{ onClick?: () => void }>) {
  const [progress, setProgress] = useState(0);
  const [textColor, setTextColor] = useState('text-black');
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const loadingBarControls = useAnimation();
  const loadingPointerControls = useAnimation();

  const textRef = useRef<HTMLDivElement>(null);

  const pullupVariants = {
    initial: { opacity: 0 },
    animate: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * 0.1,
      },
    }),
  };

  useEffect(() => {
    if (isLoading) {
      loadingBarControls.start({
        right: 3,
        transition: { duration: 5, ease: 'easeInOut' },
      });

      // Update the percentage display during animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            setIsLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // Update roughly every 50ms for smooth counting

      return () => clearInterval(interval);
    }
  }, [loadingBarControls, isLoading]);

  useEffect(() => {
    if (isLoading && textRef.current) {
      const textElement = textRef.current;
      const container = textElement.parentElement!;
      loadingPointerControls.start({
        x: container.getBoundingClientRect().width - 22,
        transition: { duration: 5, ease: 'easeInOut' },
      });
    }
  }, [isLoading, loadingPointerControls]);

  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const textPosition = textElement.getBoundingClientRect().x + textElement.offsetWidth / 2;
      const container = textElement.parentElement!;
      const containerLeft = container.getBoundingClientRect().x;

      // Calculate the position where the progress bar currently ends
      const progressBarEnd = containerLeft + container.offsetWidth * (progress / 100);

      // If the progress bar has passed the center of the text, change text color to white
      if (progressBarEnd >= textPosition) {
        setTextColor('text-white');
      } else {
        setTextColor('text-black');
      }
    }
  }, [progress]);

  return (
    <div className='loading'>
      <HeartScale duration={5} />
      <div className='loading-love-pointer-container'>
        <motion.div className='loading-love-pointer' animate={loadingPointerControls}>
          <IconHeartFilled />
        </motion.div>
      </div>
      <div className='loading-container'>
        <motion.div className='loading-bar' animate={loadingBarControls} />
        <div ref={textRef} className={`loading-percentage ${textColor}`}>
          <AnimatePresence>
            {progress === 100 ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                I'm ready!
              </motion.span>
            ) : (
              <motion.span>{progress}%</motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {!isComplete ? (
          <motion.p
            id='loading-love__message'
            className='loading-love-text'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            LOADING LOVE{' '}
            {'...'.split('').map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                custom={i}
                animate='animate'
                initial='initial'
                variants={pullupVariants}
              >
                {char == '' ? <span>&nbsp;</span> : char}
              </motion.span>
            ))}
          </motion.p>
        ) : (
          <motion.button
            className='click-me-button'
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            exit={{ scale: 0 }}
            onClick={onClick}
          >
            Click me!
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoadingBar;
