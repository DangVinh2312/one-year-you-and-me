import './greeting-card.css';

import { motion } from 'framer-motion';
import coupleImage from '../assets/images/cute_couple.jpeg';
import dancingCatGif from '../assets/images/dancing_cat.gif';
import DatetimeCounter from '../components/datetime-counter';
import HeartRain from '../components/heart-rain';
import StepWrapper from '../components/step-wrapper';
import TextPullup from '../components/text-pullup';

function GreetingCard({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <StepWrapper className='greeting-card'>
      <HeartRain />
      <div className='greeting-card__header'>
        <h1 className='greeting-card__title'>Chúc mừng ngày kỉ niệm!</h1>
        <TextPullup
          classNames='greeting-card__message'
          text='Vậy là đã 1 năm rồi đó, cảm ơn Uyên vì đã tới bên tớ! Cùng nhau bước tiếp trên con đường dài phía trước nhé!'
          duration={0.2}
        />
      </div>
      <div className='greeting-card__image-wrapper'>
        <motion.img
          initial={{
            width: 0,
          }}
          animate={{
            width: 80,
            transition: {
              duration: 6,
              delay: 1,
            },
          }}
          className='greeting-card__image--dancing-cat'
          src={dancingCatGif}
          alt='dancing cat'
        />
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
        <motion.img
          initial={{
            width: 0,
          }}
          animate={{
            width: 80,
            transition: {
              duration: 6,
              delay: 1,
            },
          }}
          className='greeting-card__image--dancing-cat'
          src={dancingCatGif}
          alt='dancing cat'
        />
      </div>
      <DatetimeCounter />
      <button className='greeting-card__button' onClick={onClick}>
        Đi tiếp thui nào! 🚀
      </button>
    </StepWrapper>
  );
}

export default GreetingCard;
