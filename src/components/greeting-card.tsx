import { motion } from 'framer-motion';
import coupleImage from '../assets/images/cute_couple.jpeg';
import DatetimeCounter from './datetime-counter';
import HeartRain from './heart-rain';
import TextPullup from './text-pullup';

import './greeting-card.css';

function GreetingCard({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <div className='greeting-card'>
      <HeartRain />
      <div className='greeting-card__header'>
        <h1 className='greeting-card__title'>Chúc mừng ngày kỉ niệm!</h1>
        <TextPullup
          classNames='greeting-card__message'
          text='Vậy là đã 1 năm rồi đó, cảm ơn Uyên vì đã tới bên tớ! Cùng nhau bước tiếp trên con đường dài phía trước nhé!'
          duration={0.5}
        />
      </div>
      <div>
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
      </div>
      <DatetimeCounter />
      <button className='greeting-card__button' onClick={onClick}>
        Đi tiếp thui nào! 🚀
      </button>
    </div>
  );
}

export default GreetingCard;
