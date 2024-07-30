import { useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  } else {
    return (
      <motion.div className="scroll-tracker" style={{ scaleX: scrollYProgress }} />  
    );
  }
}
