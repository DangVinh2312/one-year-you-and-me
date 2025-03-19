import './the-end.css';

import StepWrapper from '../components/step-wrapper';

function TheEnd() {
  return (
    <StepWrapper className='the-end'>
      <div className='the-end__wrapper'>
        <h1 className='the-end__title'>The End</h1>
        <p className='the-end__message'>Thank you for playing!</p>
      </div>
    </StepWrapper>
  );
}

export default TheEnd;
