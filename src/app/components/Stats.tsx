import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { value: 5, label: "Production Projects", suffix: "+" },
  { value: 15, label: "Technologies", suffix: "+" },
  { value: 83, label: "Code Quality", suffix: "%" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-pink-950/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
