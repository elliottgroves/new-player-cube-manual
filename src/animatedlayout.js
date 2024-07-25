import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import BraveKinDuo from './images/Brave-Kin Duo Art.webp';

const layoutVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  enter: {
    opacity: 1,
    y: 0,
    border: '0rem solid black',
    transition: {
      duration: 0.2,
      easing: 'circIn' 
    }
  },
  exit: {
    scale: 0.6,
    opacity: 0.5,
    y: '30vh',
    rotateX: '-70deg',
    border: '1rem solid black',
    transition: {
      duration: 1,
      easing: [0.87, 0, 0.13, 1]
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
    background: 'var(--bg-color-dark)'
  },
  enter: {
    background: 'var(--bg-color-dark)'
  },
  exit: {
    background: ['var(--bg-color-dark)', 'grey']
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
      variants={bgVariants}
      className="animated-layout">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={titleVariants}
        className="transition-page-title">
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
