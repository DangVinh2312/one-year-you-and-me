import { motion } from 'framer-motion';

function TextPullup({
  text,
  classNames,
  duration = 1,
}: Readonly<{ text: string; classNames?: string; duration?: number }>) {
  const pullupVariants = {
    initial: { opacity: 0 },
    animate: (i: number) => ({
      opacity: 1,
      transition: {
        duration: duration,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <p className={classNames}>
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} custom={i} animate='animate' initial='initial' variants={pullupVariants}>
          {char}
        </motion.span>
      ))}
    </p>
  );
}

export default TextPullup;
