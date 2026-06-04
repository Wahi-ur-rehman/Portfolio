import { motion } from "motion/react";
import { useMousePosition } from "../../hooks/useMousePosition";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-blue-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: x - 12,
          y: y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
          mass: 0.1,
        }}
      />
    </>
  );
}
