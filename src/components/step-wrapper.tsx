import { motion } from 'framer-motion';
import { useId } from 'react';

function StepWrapper({ className, children }: Readonly<{ className?: string; children: React.ReactNode }>) {
  const id = useId();
  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default StepWrapper;
