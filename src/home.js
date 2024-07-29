import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import AnimatedLayout from './animatedlayout.js';
import './home.css';
import logo from './placeholder-logo.svg';

const layoutVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  }
}

const heroVariants = {
  initial: {
    y: '-100vh',
    transition: {
    }
  },
  enter: {
    y: 0,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 1,
      delayChildren: 2.5,
      staggerChildren: 0.2,
    }
  }
}

const cardAnimation = (z) => {
  return {
    variants: {
      initial: {
        z: 0,
      },
      enter: {
        z,
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.22, 1, 0.36, 1]
        }
      },
    }
  }
}

export default function Home() {
  const [scope, animate] = useAnimate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [100, -100], [-20, 60]);
  const rotateY = useTransform(x, [-100, 100], [-20, 60]);

  return (
    <motion.div 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={layoutVariants}
      className="home-layout">
      <section className="hero">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={heroVariants}
          className="hero-cards-container">
          <motion.div
            ref={scope}
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            className="hero-cards">
            <motion.div {...cardAnimation(-160)} className="hero-card one"></motion.div>
            <motion.div {...cardAnimation(-120)} className="hero-card two"></motion.div>
            <motion.div {...cardAnimation(-80)} className="hero-card three"></motion.div>
            <motion.div {...cardAnimation(-40)} className="hero-card four"></motion.div>
            <motion.div className="hero-card five">
              <img draggable="false" src={logo} className="logo" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <Link to="/welcome">
          <motion.button whileTap={{ scale: 0.8 }} className="large-nav-button">
            <span>Get Started</span>
          </motion.button>
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
    </motion.div>
  );
}

