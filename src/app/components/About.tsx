import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { MapPin, Briefcase, Target } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3ODAyOTQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer workspace"
                  className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] border border-white/10"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Rawalpindi, Pakistan</p>
                  <p className="text-sm text-gray-500 mt-1">Open to remote opportunities worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                  <p className="text-gray-400">
                    AI Engineer & Full Stack Developer specializing in production-ready
                    systems. From algorithmic trading to 3D web experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-all">
                  <Target className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-gray-400">
                    Bridging the gap between demo and deployed. Building intelligent
                    systems with clean architecture and reliability at the core.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about building intelligent systems that solve real-world
                  problems. With expertise spanning from AI/ML to full-stack development,
                  I focus on creating production-ready applications that combine cutting-edge
                  technology with practical utility. Whether it's algorithmic trading systems,
                  AI-powered applications, or immersive 3D experiences, I bring ideas to life
                  with clean code and robust architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
