import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedLayout from './animatedlayout.js';

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

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={layoutVariants}
      className="animated-layout">
      <div className="home-layout">
        <section className="hero">
          <Link to="/welcome">
            <button className="large-nav-button">
              <span>Get Started</span>
            </button>
          </Link>
        </section>
        <section className="home-nav-buttons">
          <Link to="/build">
            <button className="large-nav-button">
              <span>Build your deck</span>
            </button>
          </Link>
          <Link to="/tutorial">
            <button className="large-nav-button">
              <span>How to play</span>
            </button>
          </Link>
          <Link to="/cheat-sheet">
            <button className="large-nav-button">
              <span>Turn cheat sheet</span>
            </button>
          </Link>
        </section>
      </div>
    </motion.div>
  );
}

