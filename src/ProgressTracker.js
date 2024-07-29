import { motion, useScroll } from "framer-motion"

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="scroll-tracker" style={{ scaleX: scrollYProgress }} />  
  )
}
