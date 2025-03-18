import { AnimatePresence, motion } from 'framer-motion';
import coupleImage from '../assets/images/cute_couple_love.jpg';

import { IconX } from '@tabler/icons-react';
import { useState } from 'react';
import './love-letter.css';
import TextPullup from './text-pullup';

function LoveLetter() {
  const [openModal, setOpenModal] = useState(false);
  function handleOpenLetter() {
    setOpenModal(true);
  }

  return (
    <div className='love-letter'>
      <AnimatePresence>
        {openModal && (
          <motion.div
            id='love-letter__modal'
            className='love-letter__modal'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <div className='love-letter__modal-wrapper'>
              <div className='love-letter__modal-background'>
                <div className='love-letter__modal-border'>
                  <IconX className='love-letter__modal-button--close' onClick={() => setOpenModal(false)} />
                  <h2 className='love-letter__modal-title'>Gửi Uyên!</h2>
                  <TextPullup
                    classNames='love-letter__modal-message'
                    text='Vậy là một năm đã trôi qua rồi! Tớ và Uyên đã có những kỉ niệm đẹp, cũng có những hạnh phúc và cũng
                    có những muộn phiền. Cùng nhau vượt qua và trở nên tốt hơn nhé. Tớ yêu Uyên nhiều lắm!'
                    duration={0.5}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className='love-letter__title'>Lá thư tình iu!</h1>
      <p className='love-letter__message'>Bạn yêu nhận được một bức thư nè!</p>
      <motion.img
        className='love-letter__image'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        src={coupleImage}
        alt='couple'
      />
      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 2,
          },
        }}
        className='love-letter__button'
        onClick={handleOpenLetter}
      >
        Mở thư nào!
      </motion.button>
    </div>
  );
}

export default LoveLetter;
