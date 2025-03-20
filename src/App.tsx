import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LoveLetter from './pages/love-letter';

import './App.css';
import GreetingCard from './pages/greeting-card';
import LoadingBar from './pages/loading-bar';
import PhotoGallery from './pages/photo_gallery';
import SecurityCheck from './pages/security-form';
import TheEnd from './pages/the-end';

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
        return <LoveLetter onClick={() => setStep(4)} />;
      case 4:
        return <PhotoGallery onClick={() => setStep(5)} />;
      case 5:
        return <TheEnd />;
      default:
        return;
    }
  };

  return <AnimatePresence>{renderStep()}</AnimatePresence>;
}

export default App;
