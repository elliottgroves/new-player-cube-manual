import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const layoutVariants = {
  initial: {
    translateX: '100vw',
  },
  enter: {
    translateX: ['100vw', 0],
  },
  exit: {
    translateX: [0, '-100vw'],
  },
}

const titleVariants = {
  initial: {
    opacity: 1,
    translateX: 0,
  },
  enter: {
    opacity: [1, 0],
    translateX: [0, 0],
  },
  exit: {
    opacity: [0, 1],
    translateX: ['2rem', 0],
  },
}

export default function AnimatedLayout({children}) {
  const { pathname } = useLocation();
  const parsedPathname = pathname ? pathname.replace('/', '').replace('-', ' ').toUpperCase() : 'Page';

  return (
    <div className="animated-layout">
      <motion.p
        initial="initial"
        animate="enter"
        exit="exit"
        variants={titleVariants}
        className="transition-page-title">
        {parsedPathname}
      </motion.p>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={layoutVariants}
        transition={{duration: 0.6, ease: 'easeInOut'}}
        className="animated-layout-content"
      >
        { children }
      </motion.div>
    </div>
  );
};
