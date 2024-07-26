import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import BraveKinDuo from './images/Brave-Kin Duo Art.webp';

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
      easing: [0.87, 0, 0.13, 1] 
    }
  },
  exit: {
    transformPerspective: '2000px',
    transformOrigin: 'left 20vh',
    x: '-100vw',
    transition: {
      duration: 0.5,
      easing: 'easeIn' 
    }
  },
}

const titleVariants = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '100vh',
  },
  exit: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      easing: [0.87, 0, 0.13, 1]
    }
  },
}

const bgVariants = {
  initial: {
    background: 'var(--bg-color)'
  },
  enter: {
    background: 'var(--bg-color)'
  },
  exit: {
    background: ['var(--bg-color)', 'grey']
  }
}

export default function AnimatedLayout({children}) {
  const { pathname } = useLocation();
  const parsedPathname = pathname ? pathname.replace('/', '').replace('-', ' ').toUpperCase() : 'Page';

  return (
    <motion.div 
      initial="initial"
      animate="enter"
      exit="exit"
      className="animated-layout">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={titleVariants}>
      </motion.div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={layoutVariants}
        className="animated-layout-content"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
