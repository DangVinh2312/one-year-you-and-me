import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import GreetingCard from './components/greeting-card';
import LoadingBar from './components/loading-bar';
import LoveLetter from './components/love-letter';

import './App.css';

function App() {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <LoadingBar onClick={() => setStep(1)} />;
      case 1:
        return <GreetingCard onClick={() => setStep(2)} />;
      case 2:
        return <LoveLetter />;
      default:
        return;
    }
  };

  return (
    <div id='root'>
      <AnimatePresence>{renderStep()}</AnimatePresence>
    </div>
  );
}

export default App;
