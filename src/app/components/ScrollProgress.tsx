import { motion, MotionValue } from "motion/react";

interface ScrollProgressProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollProgress({ scrollYProgress }: ScrollProgressProps) {
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
    />
  );
}
