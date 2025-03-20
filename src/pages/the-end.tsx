import './the-end.css';

import catHugGif from '../assets/images/cat_hug.gif';

import StepWrapper from '../components/step-wrapper';

function TheEnd() {
  return (
    <StepWrapper className='the-end'>
      <div className='the-end__wrapper'>
        <img className='the-end__image' src={catHugGif} alt='cat hug'/>
        <h1 className='the-end__title'>The End</h1>
        <p className='the-end__message'>Thank you for playing!</p>
      </div>
    </StepWrapper>
  );
}

export default TheEnd;
