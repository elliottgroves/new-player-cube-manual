import { motion } from 'framer-motion';

const layoutVariants = {
  initial: {
    opacity: 1,
    transformPerspective: '2000px',
    x: '100vw',
    rotateY: '90deg',
  },
  enter: {
    opacity: 1,
    transformOrigin: 'right 20vh',
    transformPerspective: '2000px',
    rotateY: ['90deg', '0deg'],
    x: [0, 0],
    transition: {
      duration: 0.5,
      ease: 'circOut'
    }
  },
  exit: {
    transformPerspective: '2000px',
    transformOrigin: 'left 20vh',
    x: '-100vw',
    transition: {
      duration: 0.5,
      ease: 'easeInOut' 
    }
  },
}

export default function AnimatedLayout({children}) {
  return (
    <div> 
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={layoutVariants}
        className="animated-layout-content"
      >
        {children}
      </motion.div>
    </div>
  );
};
