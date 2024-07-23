import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0.2, rotateY: 0, boxShadow: 'none' },
  enter: { opacity: 1, rotateY: 0, boxShadow: 'inset 20px 0 30px -30px #7777' },
  exit: { opacity: 1, rotateY: '-90deg', boxShadow: 'inset 60px 0 30px -30px #7777, 25vw 0 10px -10px #7777' }
}

export default function AnimatedLayout({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={ variants }
      transition={{ duration: 0.8, type: 'easeOutIn' }}
      className="animated-layout"
    >
      { children }
    </motion.div>
  );
};
