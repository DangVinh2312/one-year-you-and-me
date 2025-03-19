import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LoveLetter from './pages/love-letter';

import './App.css';
import GreetingCard from './pages/greeting-card';
import LoadingBar from './pages/loading-bar';
import SecurityCheck from './pages/security-form';

function App() {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <LoadingBar onClick={() => setStep(1)} />;
      case 1:
        return <SecurityCheck onClick={() => setStep(2)} />;
      case 2:
        return <GreetingCard onClick={() => setStep(3)} />;
      case 3:
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
