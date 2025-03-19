import './security-form.css';

import amiCatNotOk1Gif from '../assets/images/ami_cat_not_ok_1.gif';
import amiCatNotOk2Gif from '../assets/images/ami_cat_not_ok_2.gif';
import amiCatNotOk3Gif from '../assets/images/ami_cat_not_ok_3.gif';
import amiCatNotOk4Gif from '../assets/images/ami_cat_not_ok_4.gif';
import amiCatOk1Gif from '../assets/images/ami_cat_ok_1.gif';
import amiCatOk2Gif from '../assets/images/ami_cat_ok_2.gif';
import amiCatOk3Gif from '../assets/images/ami_cat_ok_3.gif';
import amiCatOk4Gif from '../assets/images/ami_cat_ok_4.gif';

import { IconArrowBigLeft, IconAsterisk, IconKey } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import StepWrapper from '../components/step-wrapper';

function SecurityForm({ onClick }: Readonly<{ onClick: () => void }>) {
  const [passcode, setPasscode] = useState<number[]>([]);

  function handleFillPasscode(value: number) {
    if (passcode.length >= 4) return;
    setPasscode((prev) => [...prev, value]);
  }

  function handleCheckPasscode() {
    if (passcode.length < 4) return;
    if (passcode.join('') === '2303') {
      onClick();
      return;
    }
    setPasscode([]);
  }

  return (
    <StepWrapper className='security-form'>
      <motion.div className='security-form__wrapper'>
        <div className='security-form__emotion'>
          <AnimatePresence>
            {passcode.length > 0 && (
              <motion.img
                key={passcode[0] === 2 ? 'passcode-1-ok' : 'passcode-1-not-ok'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='security-form__emotion-gif'
                src={passcode[0] === 2 ? amiCatOk1Gif : amiCatNotOk1Gif}
                alt='ami cat'
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {passcode.length > 1 && (
              <motion.img
                key={passcode[1] === 3 ? 'passcode-2-ok' : 'passcode-2-not-ok'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='security-form__emotion-gif'
                src={passcode[1] === 3 ? amiCatOk2Gif : amiCatNotOk2Gif}
                alt='ami cat'
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {passcode.length > 2 && (
              <motion.img
                key={passcode[2] === 0 ? 'passcode-3-ok' : 'passcode-3-not-ok'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='security-form__emotion-gif'
                src={passcode[2] === 0 ? amiCatOk3Gif : amiCatNotOk3Gif}
                alt='ami cat'
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {passcode.length > 3 && (
              <motion.img
                key={passcode[3] === 3 ? 'passcode-4-ok' : 'passcode-4-not-ok'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='security-form__emotion-gif'
                src={passcode[3] === 3 ? amiCatOk4Gif : amiCatNotOk4Gif}
                alt='ami cat'
              />
            )}
          </AnimatePresence>
        </div>
        <div className='security-form__passcode'>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i + 1} className='security-form__passcode--slot'>
              {passcode[i] ? <IconAsterisk size={10} /> : ''}
            </div>
          ))}
        </div>
        <div className='security-form__delete-button'>
          <IconArrowBigLeft size={30} onClick={() => setPasscode((prev) => prev.slice(0, -1))} />
        </div>
        <div className='security-form__keyboard'>
          {Array.from({ length: 9 }).map((_, i) => (
            <button key={i + 1} onClick={() => handleFillPasscode(i + 1)}>
              {i + 1}
            </button>
          ))}
          <button className='security-form__keyboard--zero' onClick={() => handleFillPasscode(0)}>
            0
          </button>
          <button onClick={handleCheckPasscode} disabled={passcode.length < 4}>
            <IconKey />
          </button>
        </div>
      </motion.div>
    </StepWrapper>
  );
}

export default SecurityForm;
