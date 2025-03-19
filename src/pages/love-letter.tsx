import './love-letter.css';

import coupleImage from '../assets/images/cute_couple_love.jpg';
import heartWobblyGif from '../assets/images/heart_wobbly.gif';
import kissHerImage from '../assets/images/kiss_her.jpg';

import { IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StepWrapper from '../components/step-wrapper';
import TextPullup from '../components/text-pullup';

function LoveLetter({
  onClick,
}: Readonly<{
  onClick: () => void;
}>) {
  const [showKiss, setShowKiss] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showNextStep, setShowNextStep] = useState({
    isShowKiss: false,
    isShowModal: false,
  });

  function handleOpenLetter() {
    setOpenModal(true);
  }

  return (
    <StepWrapper className='love-letter'>
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
                  <IconX
                    className='love-letter__modal-button--close'
                    onClick={() => {
                      setOpenModal(false);
                      setShowNextStep((prev) => ({ ...prev, isShowModal: true }));
                    }}
                  />
                  <h2 className='love-letter__modal-title'>Dear Uyên!</h2>
                  <TextPullup
                    classNames='love-letter__modal-message'
                    text='Một năm bên cậu nhanh quá đi! Tớ và Uyên đã có những kỉ niệm đẹp, cũng có những hạnh phúc và cũng có những muộn phiền. Cùng nhau vượt qua và trở nên tốt hơn nhé. Tớ yêu Uyên nhiều lắm!'
                    duration={0.2}
                  />
                  <img className='love-letter__modal-heart-wobbly' src={heartWobblyGif} alt='heart wobbly' />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className='love-letter__title'>Lá thư tình iu!</h1>
      <p className='love-letter__message'>Bạn yêu nhận được một bức thư nè!</p>
      <div className='love-letter__image-container'>
        <motion.img
          className='love-letter__image'
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
            },
          }}
          src={coupleImage}
          alt='couple'
          onClick={() => {
            setShowKiss(!showKiss);
            setShowNextStep((prev) => ({ ...prev, isShowKiss: true }));
          }}
        />
        <AnimatePresence>
          {showKiss && (
            <motion.img
              className='love-letter__image--kiss'
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 2,
                },
              }}
              exit={{
                scale: 0,
              }}
              src={kissHerImage}
              alt='couple'
            />
          )}
        </AnimatePresence>
      </div>
      <div className='love-letter__button-container'>
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
        <AnimatePresence>
          {showNextStep.isShowKiss && showNextStep.isShowModal && (
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
              onClick={onClick}
            >
              Đi tiếp thui!
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </StepWrapper>
  );
}

export default LoveLetter;
