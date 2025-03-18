import { IconHeart } from '@tabler/icons-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import './heart-scale.css';

function HeartScale({
  duration = 1,
}: Readonly<{
  duration?: number;
}>) {
  const firstHeartControls = useAnimation();
  const secondHeartControls = useAnimation();
  const thirdHeartControls = useAnimation();

  useEffect(() => {
    async function scaleHeart() {
      await firstHeartControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: duration / 3, ease: 'easeOut' },
      });

      await secondHeartControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: duration / 3, ease: 'easeOut' },
      });

      await thirdHeartControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: duration / 3, ease: 'easeOut' },
      });
    }
    scaleHeart();
  }, [duration, firstHeartControls, secondHeartControls, thirdHeartControls]);

  return (
    <div className='heart-scale-container'>
      {/* First (smallest) heart */}
      <motion.div animate={firstHeartControls} initial={{ scale: 0, opacity: 0 }} className='heart-scale-icon'>
        <IconHeart size={64} color='#ff6b6b' />
      </motion.div>

      {/* Second (medium) heart */}
      <motion.div animate={secondHeartControls} initial={{ scale: 0, opacity: 0 }} className='heart-scale-icon'>
        <IconHeart size={96} color='#ff5252' />
      </motion.div>

      {/* Third (largest) heart */}
      <motion.div animate={thirdHeartControls} initial={{ scale: 0, opacity: 0 }} className='heart-scale-icon'>
        <IconHeart size={144} color='#ff3838' />
      </motion.div>
    </div>
  );
}

export default HeartScale;
