import { motion } from 'framer-motion';
import DatetimeCounter from './datetime-counter';
import HeartRain from './heart-rain';
import TextPullup from './text-pullup';

import coupleImage from '../assets/images/cute_couple.jpeg';
import dancingCatGif from '../assets/images/dancing_cat.gif';

import './greeting-card.css';

function GreetingCard({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <motion.div
      id='greeting-card'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      className='greeting-card'
    >
      <HeartRain />
      <div className='greeting-card__header'>
        <h1 className='greeting-card__title'>Chúc mừng ngày kỉ niệm!</h1>
        <TextPullup
          classNames='greeting-card__message'
          text='Vậy là đã 1 năm rồi đó, cảm ơn Uyên vì đã tới bên tớ! Cùng nhau bước tiếp trên con đường dài phía trước nhé!'
          duration={0.5}
        />
      </div>
      <div className='greeting-card__image-wrapper'>
        <img className='greeting-card__image--dancing-cat' src={dancingCatGif} alt='dancing cat' />
        <motion.img
          className='greeting-card__image'
          src={coupleImage}
          initial={{ rotate: 0 }}
          animate={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            },
          }}
        />
        <img className='greeting-card__image--dancing-cat' src={dancingCatGif} alt='dancing cat' />
      </div>
      <DatetimeCounter />
      <button className='greeting-card__button' onClick={onClick}>
        Đi tiếp thui nào! 🚀
      </button>
    </motion.div>
  );
}

export default GreetingCard;
